<template>
  <div>
    <nav-bar />
    <div>
      <nuxt />
    </div>
    <foot-bar />
  </div>
</template>
<script>
import NavBar from '../components/layout/NavBar'
import FootBar from '../components/layout/FootBar'
export default {
  components: { NavBar, FootBar },
  methods: {
    _addDarkTheme () {
      const darkThemeLinkEl = document.createElement('link')
      darkThemeLinkEl.setAttribute('rel', 'stylesheet')
      darkThemeLinkEl.setAttribute('href', '/css/color/darktheme.css')
      darkThemeLinkEl.setAttribute('id', 'dark-theme-style')

      const docHead = document.querySelector('head')
      docHead.append(darkThemeLinkEl)
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
      } else {
        this._removeDarkTheme()
      }
    }
  }
}
</script>
<style>

html {
  font-family: var(--font-family);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: var(--background-color);
}

h1,h2,h3,h4,h5,h6,p {
  color: var(--primary-color) ;
}
</style>
