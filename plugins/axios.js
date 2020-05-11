import { TOKEN } from '../services/helpers/consts'

export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest((config) => {
    // console.log('Making request to ', config)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
    if (code === 401) {
      store.dispatch('user/logOut')
    }
    if (code === 500) {
      redirect('/error')
    }
    if (code === 404) {
      redirect('*')
    }
  })

  const token = app.$cookies.get(TOKEN)
  if (token) {
    $axios.setToken(token, 'Bearer')
  }

  $axios.setBaseURL(process.env.API_BASE_URL)
  $axios.setHeader('Api-Authorization-Key', process.env.API_KEY)
}