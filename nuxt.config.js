import fs from 'fs'
import path from 'path'

const env = process.env.NODE_ENV
const envPath = path.resolve(process.cwd(), `.env.${env}`)
// const _defaultEnvPath = path.resolve(process.cwd(), '.env')
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
  loading: { color: '#864F96' },
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
    '~/plugins/vue-toaster.client.js',
    '~/plugins/eventBus.js'
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
    ['@nuxtjs/dotenv', { filename: fs.existsSync(envPath) ? `.env.${env}` : '.env' }],
    'cookie-universal-nuxt',
    '@nuxtjs/proxy',
    'vue-social-sharing/nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api2/': {
      target: 'https://iid.googleapis.com',
      pathRewrite: { '^/api2/': '' }
    },
    '/apis/': {
      target: 'https://droidcon-api.appslab.tech/v1',
      pathRewrite: { '^/apis/': '' }
    }
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
  },
  pwa: {
    workbox: {
      cacheNames: {
        prefix: 'dr',
        precache: 'precache',
        runtime: 'runtime'
      },
      config: {
        debug: false
      },
      offlineAssets: [
        '/images/sponsor-graph.svg',
        '/favicon.ico',
        '/images/NUMBERS.svg',
        '/images/sponsor-graph.svg'
      ],
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://via.placeholder.com/*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://sessionize.com/image*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://lh3.googleusercontent.com/*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: `${process.env.API_BASE_URL}/*`,
          handler: 'staleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheableResponse: { statuses: [0, 200, 201] },
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
            }
          }
        }
      ]
    }
  }
}
