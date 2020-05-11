import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: process.env.API_BASE_URL,
  providers: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      redirectUri: process.env.BASE_URL + '/social_login/google',
      url: '/social_login/google',
      responseType: 'token'
    }
  }

})
