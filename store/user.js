import { TOKEN } from '../services/helpers/consts'

export const state = () => ({
  token: '',
  currentUser: ''
})

export const getters = ({
  isAuthenticated: state => !!state.token
})
export const mutations = {
  updateUser (state, user) {
    state.token = this.$cookies.get(TOKEN) || ''
    // state.currentUser = this.$cookies.get(USER) || ''
    state.currentUser = user
  }
}
export const actions = {
  loginUser (context, payload) {
    this.$cookies.set(TOKEN, payload.token, { maxAge: 60 * 60 * 24 * 100, path: '/' })
    // this.$cookies.set(USER, payload.user, { maxAge: 60 * 60 * 24 * 100, path: '/' })
    context.commit('updateUser', payload.user)
  },
  logOut (context) {
    this.$cookies.remove(TOKEN)
    // this.$cookies.remove(USER)
    context.commit('updateUser', '')
  },
  getUser (context, error) {
    return this.$axios
      .get('/details')
      .then((response) => {
        context.commit('updateUser', response.data.user)
      })
      .catch((_error) => {
        context.commit('updateUser', '')
      })
  }
}
