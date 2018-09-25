import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { actions } from './actions/user-actions'
import { mutations } from './mutations/user-mutations'

export const userState = {
  token: null,
  email: null,
  numero_default: null,
  id: null
}

export const msgState = {
  msg: null,
  numero: null,
  link: null,
  counter: null,
  id: null,
  page: null
}

export const alertState = {
  message: null,
  isActive: 0,
  type: 'success',
  time: 5000
}

export const paginationState = {
  pages: null,
  messages: null,
  type: null
}

const state = {
  userState,
  msgState,
  alertState,
  paginationState
}

export const store = new Vuex.Store({
  state,
  actions,
  mutations
})
