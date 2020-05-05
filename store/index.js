const DARK_THEME = 'droid-dark'
export const state = () => ({
  darkTheme: ''
})

export const getters = ({
  isDarkTheme: state => !!state.darkTheme
})
export const mutations = {
  updateTheme (state) {
    state.darkTheme = this.$cookies.get(DARK_THEME) || ''
    console.log(this.$cookies.get(DARK_THEME))
  }
}
export const actions = {
  activateDark (context) {
    console.log('gwrwrw')
    this.$cookies.set(DARK_THEME, 'dark', { maxAge: 60 * 60 * 24 * 1000, path: '/' })
    context.commit('updateTheme')
  },
  deactivateDark (context) {
    console.log('gwrwrw-2112')
    this.$cookies.remove(DARK_THEME)
    context.commit('updateTheme')
  },
  async nuxtServerInit (context) {
    await context.commit('updateTheme')
  }
}
