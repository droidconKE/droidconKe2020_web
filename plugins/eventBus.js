import Vue from 'vue'
export default function ({ app, store }, inject) {
  app.$bus = new Vue()
  if (store) { store.$bus = app.$bus }
  inject('bus', app.$bus)
}
