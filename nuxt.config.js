
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Largest Android Developers\' Conference in Africa',
    titleTemplate: 'droidconKe - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.' },
      { hid: 'keywords', name: 'keywords', content: 'Android, Event,  Conference, Meetup, droidCon, Kenya, KE, droidConKE, droidconke, Android254, Kotlin, Flutter, iOS' },
      { hid: 'og:description', name: 'description', content: 'Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.' },
      { property: 'og:url', content: 'https://droidcon.co.ke' },
      { name: 'twitter:url', content: 'https://droidcon.co.ke' },
      { name: 'canonical', content: 'https://droidcon.co.ke' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@droidconke' },
      { name: 'twitter:creator', content: '@droidconke' },
      { name: 'og:image', content: '/icon.png' },
      { hid: 'theme-color', name: 'theme-color', content: '#864F96' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/layout.css' },
      { rel: 'stylesheet', href: '/css/color/light.css', id: 'light-theme-css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', id: 'font-awesome-css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto', id: 'roboto-font' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#864F96' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
