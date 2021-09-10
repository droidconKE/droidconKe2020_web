import fs from 'fs'
import path from 'path'

const env = process.env.NODE_ENV
const envPath = path.resolve(process.cwd(), `.env.${env}`)
// const _defaultEnvPath = path.resolve(process.cwd(), '.env')
export default {
  mode: 'universal',
  ssr: true,
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
      { hid: 'og:description', property: 'description', content: 'Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.' },
      { hid: 'og:title', property: 'og:title', content: 'The Largest Android Developers\' Conference in Africa' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'The Largest Android Developers\' Conference in Africa' },
      { hid: 'og:url', property: 'og:url', content: 'https://droidcon.co.ke' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://droidcon.co.ke' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@droidconke' },
      { name: 'twitter:creator', content: '@droidconke' },
      { property: 'og:site_name', content: 'droidconKe' },
      { hid: 'og:image', property: 'og:image', content: '/images/img.png' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/images/img.png' },
      { hid: 'theme-color', name: 'theme-color', content: '#864F96' },
      { name: 'canonical', content: 'https://droidcon.co.ke' }
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
    ['@nuxtjs/dotenv', { filename: fs.existsSync(envPath) ? `.env.${env}` : '.env', systemvars: true }],
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
      pathRewrite: { '^/api2/': '' },
      secure: !process.env.ENV === 'development'
    },
    '/apis/': {
      target: 'https://droidcon-erp.herokuapp.com/api/v1',
      pathRewrite: { '^/apis/': '' },
      secure: !process.env.ENV === 'development'
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
    },
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
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
  // publicRuntimeConfig: {
  //   baseUrl: process.env.BASE_URL,
  //   apiBaseUrl: process.env.API_BASE_URL,
  //   orgSlug: process.env.ORG_SLUG,
  //   eventSlug: process.env.EVENT_SLUG,
  //   messagingId: process.env.MESSAGING_TOPIC
  // },
  // privateRuntimeConfig: {
  //   apiKey: process.env.API_KEY,
  //   googleClientId: process.env.GOOGLE_CLIENT_ID,
  //   firebaseApiKey: process.env.FIREBASE_API_KEY,
  //   firebaseMessageId: process.env.FIREBASE_MESSAGE_ID,
  //   firebasePublicKey: process.env.FIREBASE_PUBLIC_KEY,
  //   firebaseServerKey: process.env.FIREBASE_SERVER_KEY,
  //   firebaseAppId: process.env.FIREBASE_APP_ID
  // }
}
