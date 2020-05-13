import { DARK_THEME, TOKEN } from '../services/helpers/consts'

export const state = () => ({
  darkTheme: '',
  sessions: [],
  members: [],
  organizers: [],
  sessionsMine: false
})

export const getters = ({
  isDarkTheme: state => !!state.darkTheme
})
export const mutations = {
  updateTheme (state) {
    state.darkTheme = this.$cookies.get(DARK_THEME) || ''
  },
  updateSessions (state, sessions) {
    state.sessions = sessions
  },
  updateMembers (state, members) {
    state.members = members
  },
  updateOrganizers (state, organizers) {
    state.organizers = organizers
  },
  bookmarkSession (state, { sessionId, status }) {
    Object.values(state.sessions).forEach((sessions) => {
      const record = sessions.find(p => p.id === sessionId)
      if (record) {
        record.is_bookmarked = status
        if (state.sessionsMine) {
          const index = sessions.findIndex(function (p) {
            return (p.id === sessionId)
          })
          sessions.splice(index, 1)
        }
      }
    })
  },
  updateSessionsMineStatus (state, status) {
    state.sessionsMine = status
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
    if (this.$cookies.get(TOKEN)) {
      await context.dispatch('user/getUser', { root: true })
    } else {
      await context.commit('user/updateUser', '')
    }
    await context.commit('updateTheme')
  }
}
