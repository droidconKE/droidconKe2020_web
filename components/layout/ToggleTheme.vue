<template>
  <div class="inline-block p-4">
    <label
      for="toogleA"
      class="flex items-center cursor-pointer"
    >
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toogleA" @click="darkThemeSwitch()" type="checkbox" class="hidden">
        <!-- line -->
        <div
          class="toggle__line w-6 h-3 bg-gray-400 rounded-full shadow-inner"
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
export default {
  name: 'ToggleTheme',
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
      console.log('Test')
      const darkThemeLinkEl = document.querySelector('#dark-theme-style')
      if (!darkThemeLinkEl) {
        this._addDarkTheme()
      } else {
        this._removeDarkTheme()
      }
    }
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
