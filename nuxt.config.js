
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,400,300,700,900', id: 'roboto-font' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700&subset=latin,latin-ext', id: 'roboto-slab-font' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#68DEA4' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/vue-countdown', mode: 'client' },
    '~/plugins/vue-authenticate.client.js',
    '~/plugins/vue-carousel.client.js',
    '~/plugins/helpers.js',
    '~/plugins/vue-toaster.client.js'
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
    ['@nuxtjs/dotenv', { filename: '.env.' + process.env.NODE_ENV }],
    'cookie-universal-nuxt'
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
  },
  router: {
    linkExactActiveClass: 'active',
    // linkActiveClass: 'active',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'error-404',
        path: '*',
        component: resolve(__dirname, 'pages/errors/404.vue')
      },
      {
        name: 'not-found',
        path: '/not-found',
        component: resolve(__dirname, 'pages/errors/404.vue')
      },
      {
        name: 'error-500',
        path: '/error',
        component: resolve(__dirname, 'layouts/error.vue')
      },
      {
        path: '/social_login/:provider',
        component: resolve(__dirname, 'components/pages/auth/logged.vue')
      })
    }
  }
}
