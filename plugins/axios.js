export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest((config) => {
    console.log('Making request to ', config)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
  })

  $axios.setBaseURL(process.env.API_BASE_URL)
  $axios.setHeader('Api-Authorization-Key', process.env.API_KEY)
}
