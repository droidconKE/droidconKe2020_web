const DARK_THEME = 'droid-dark'
export const state = () => ({
  darkTheme: '',
  user: ''
})

export const getters = ({
  isDarkTheme: state => !!state.darkTheme,
  isLoggedIn: state => !!state.user
})
export const mutations = {
  updateTheme (state) {
    state.darkTheme = this.$cookies.get(DARK_THEME) || ''
  },
  login (state, user) {
    state.user = user
  }
}
export const actions = {
  activateDark (context) {
    this.$cookies.set(DARK_THEME, 'dark', { maxAge: 60 * 60 * 24 * 1000, path: '/' })
    context.commit('updateTheme')
  },
  deactivateDark (context) {
    this.$cookies.remove(DARK_THEME)
    context.commit('updateTheme')
  },
  async nuxtServerInit (context) {
    await context.commit('updateTheme')
  }
}
