<template>
  <div class="inline-block p-4 absolute top-0 right-0 mt-3 lg:mt-2  mr-12 md:mr-12 lg:mr-0">
    <label
      for="toogleA"
      class="flex items-center cursor-pointer"
    >
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toogleA" :checked="this.$store.getters.isDarkTheme" type="checkbox" class="hidden" @click="darkThemeSwitch()">
        <!-- line -->
        <div
          class="toggle__line w-6 h-3 bg-purple-lighter-c rounded-full shadow-inner"
        />
        <!-- dot -->
        <div
          class="toggle__dot absolute w-4 h-4 bg-black-c rounded-full shadow inset-y-0 left-0"
        />
      </div>
      <!-- label -->
      <div
        class="ml-3 text-gray-700 font-sm"
      />
    </label>
  </div>
</template>

<script>
/* eslint-disable nuxt/no-globals-in-created */
export default {
  name: 'ToggleTheme',
  created () {
    if (process.client) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !this.$store.getters.isSetTheme) {
        this._addDarkTheme()
        this.$store.commit('updateThemeTemp', 'dark')
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // console.log(`changed to ${e.matches ? 'dark' : 'light'} mode`)
        if (e.matches) {
          this._addDarkTheme()
          this.$store.dispatch('activateDark')
          // this.$store.commit('updateThemeTemp', 'dark')
        } else {
          this._removeDarkTheme()
          this.$store.dispatch('deactivateDark')
          // this.$store.commit('updateThemeTemp', 'light')
        }
      })
    }
  },
  methods: {
    _addDarkTheme () {
      const darkThemeLinkEl = document.createElement('link')
      darkThemeLinkEl.setAttribute('rel', 'stylesheet')
      darkThemeLinkEl.setAttribute('href', '/css/color/darktheme.css')
      darkThemeLinkEl.setAttribute('id', 'dark-theme-style')

      // console.log(darkThemeLinkEl)
      const docHead = document.querySelector('head')
      docHead.append(darkThemeLinkEl)
      // document.getElementsByTagName('head')[0].appendChild(darkThemeLinkEl)
    },
    _removeDarkTheme () {
      const darkThemeLinkEl = document.querySelector('#dark-theme-style')
      const parentNode = darkThemeLinkEl.parentNode
      parentNode.removeChild(darkThemeLinkEl)
    },
    darkThemeSwitch () {
      const darkThemeLinkEl = document.querySelector('#dark-theme-style')
      if (!darkThemeLinkEl) {
        this._addDarkTheme()
        this.$store.dispatch('activateDark')
      } else {
        this._removeDarkTheme()
        this.$store.dispatch('deactivateDark')
      }
    }
  },
  head () {
    return this.$store.getters.isDarkTheme ? {
      link: [
        { rel: 'stylesheet', href: '/css/color/darktheme.css', id: 'dark-theme-style' }
      ],
      meta: [
        { hid: 'theme-color', name: 'theme-color', content: '#000000' }
      ]
    }
      : {}
  }
}
</script>

<style scoped>
  .toggle__dot {
    top: -.25rem;
    left: -.25rem;
    transition: all 0.3s ease-in-out;
  }
  .toggle__line {
    margin-top: -2px;
  }

  input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: var(--purple-color);
  }
</style>
