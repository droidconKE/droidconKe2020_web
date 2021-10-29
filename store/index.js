import { DARK_THEME, TOKEN } from '../services/helpers/consts'

export const state = () => ({
  darkTheme: '',
  sessions: [],
  members: [],
  organizers: [],
  sessionsMine: false,
  event: []
})

export const getters = ({
  isDarkTheme: state => state.darkTheme === 'dark',
  isSetTheme: state => !!state.darkTheme
})
export const mutations = {
  updateTheme (state) {
    state.darkTheme = this.$cookies.get(DARK_THEME) || ''
  },
  updateThemeTemp (state, status) {
    state.darkTheme = status
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
  filterSessions (state, { levels, formats, rooms }) {
    Object.keys(state.sessions).forEach((key) => {
      state.sessions[key] = state.sessions[key].filter(function (e) {
        return e.session_level.includes(levels) && e.session_format.includes(formats) && e.rooms.some(x => x.title.includes(rooms))
      })
    })
  },
  updateSessionsMineStatus (state, status) {
    state.sessionsMine = status
  },
  updateEvent (state, event) {
    state.event = event
  }
}
export const actions = {
  activateDark (context) {
    this.$cookies.set(DARK_THEME, 'dark', { maxAge: 60 * 60 * 24 * 1000, path: '/' })
    context.commit('updateTheme')
  },
  deactivateDark (context) {
    // this.$cookies.remove(DARK_THEME)
    this.$cookies.set(DARK_THEME, 'light', { maxAge: 60 * 60 * 24 * 1000, path: '/' })
    context.commit('updateTheme')
  },
  async nuxtServerInit (context, { app, query, route, error }) {
    // error('Error on [nuxtServerInit] action.')
    if (this.$cookies.get(TOKEN)) {
      await this.$axios
        .get('/apis/details').then((response) => {
          context.commit('user/updateUser', response.data.user)
        }).catch((_err) => {
          error('Error on [nuxtServerInit] action.')
        })
    } else {
      await context.commit('user/updateUser', '')
    }
    await context.commit('updateTheme')
    await this.$axios
      .get('/apis/events/' + process.env.EVENT_SLUG)
      .then((response) => {
        context.commit('updateEvent', response.data.data)
      })
  }
}
