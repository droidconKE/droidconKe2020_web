<template>
  <div>
    <nav-bar />
    <div class="container mx-auto px-12">
      <nuxt />
    </div>
    <div class="container mx-auto px-12">
      <section class="w-full bg-green-100 md:px-32 sm:px-10">
        <div class="md:mt-10 mx-auto px-4 md:py-12">
          <div class="items-center flex flex-wrap mb-10">
            <div class="w-full md:w-7/12 ml-auto sm:px-6 md:px-12 md:px-4">
              <div class="md:pr-12  text-left">
                <h3 class="text-3xl font-semibold">
                  EVENT INFO
                </h3>
              </div>
            </div>
            <div class="w-full md:w-5/12 items-start justify-end">
              <div class="mt-0">
                <a class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg" style="transition:all .15s ease" href="/learning-lab/tailwind-starter-kit/documentation/download">Get Your Ticket</a>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full px-4">
              <div class="flex flex-wrap items-top mb-6 text-left">
                <div class="w-full md:w-4/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Venue</span><ul class="list-unstyled">
                    <p>
                      Nairobi
                      View Map location
                    </p>
                  </ul>
                </div>
                <div class="w-full md:w-4/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Transport</span>
                  <ul class="list-unstyled">
                    <p>Public transit do not go directly to iHub. You can share ride on famous using famous taxi services</p>
                  </ul>
                </div>
                <div class="w-full md:w-4/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Parking</span>
                  <ul class="list-unstyled">
                    <p>Parking is very limited and available only in iHub designated slots located in Santeu Plaza</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="w-full items-center justify-center px-4 py-3">
        <div class="mt-0">
          <a href="https://www.twitter.com/creativetim" target="_blank">
            <i class="fa fa-twitter  bg-white text-blue-400 font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
          </a>
          <a href="https://www.facebook.com/creativetim" target="_blank">
            <i class="fa fa-instagram bg-white text-blue-600 font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
          </a>
          <a href="https://www.dribbble.com/creativetim" target="_blank">
            <i class="fa fa-youtube bg-white text-pink-400 font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
          </a>
        </div>
        <p class="text-sm mt-6 text-gray-600 font-semibold">
          Copyright 2020. All rights reserved
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/layout/NavBar'
export default {
  components: { NavBar },
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
