import { TOKEN } from '../services/helpers/consts'

export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest((config) => {
    // console.log('Making request to ', config)
  })

  $axios.onError((error) => {
    if (error.response) {
      const code = parseInt(error.response && error.response.status)
      console.log(code)
      if (code === 401) {
        store.dispatch('user/logOut')
        app.$bus.$emit('loggedInn')
      }
      if (code === 500) {
        redirect('/error')
      }
      if (code === 404) {
        redirect('/not-found')
      }
    } else {
      redirect('/error?no_internet=true')
    }
  })

  const token = app.$cookies.get(TOKEN) || store.state.user.token
  if (token) {
    $axios.setToken(token, 'Bearer')
  }

  // ! using a proxy, this is not needed in this case
  // $axios.setBaseURL(process.env.API_BASE_URL)
  $axios.setHeader('Api-Authorization-Key', process.env.API_KEY)
}
