import { Api } from '../common/api'
import Vue from 'vue'
import routes from '../router'

import { mutationTypes } from '../mutations/mutations-types'

export const actions = {
  logout ({ commit, dispatch }, payload) {
    localStorage.setItem('token', null)
    Api.logout(Vue.http, payload).then(response => {
      commit(mutationTypes.USER_LOGOUT, null)
      routes.push({
        name: 'Login'
      })
    })
  },
  saveNumber ({ commit, dispatch }, payload) {
    Api.saveNumber(Vue.http, payload).then(response => {
      if (response.status === 200) {
        let token = response.body
        commit(mutationTypes.SAVE_NUMBER,  token )
        dispatch('hideAlert', {
          message: 'El número ha sido agregado',
          isActive: 1,
          type: 'success',
          time: 5000
        })
      }
    }, error => {
      dispatch('hideAlert', {
        message: 'Error al editar',
        isActive: 1,
        type: 'eror',
        time: 5000
      })
    })
  },
  saveLink ({ commit, dispatch }, payload) {
    Api.saveLink(Vue.http, payload).then(response => {

        let msg = response.body
        commit(mutationTypes.SAVE_LINK,  msg )
        routes.push({
          name: 'History',
          params: {
            pagination: 1
          }
        })

    }, error => {
      dispatch('hideAlert', {
        message: 'Error al guardar',
        isActive: 1,
        type: 'eror',
        time: 5000
      })
    })
  },
  editLink ({ commit, dispatch }, payload) {
    Api.editLink(Vue.http, payload).then(response => {
        routes.push({
          name: 'History',
          params: {
            pagination: 1
          }
        })

    }, error => {
      dispatch('hideAlert', {
        message: 'Error al guardar',
        isActive: 1,
        type: 'eror',
        time: 5000
      })
    })
  },
  commitMessages({ commit, dispatch }, payload) {
    commit(mutationTypes.MESSAGES_PAGINATION,  payload)
    routes.push({
      name: 'History',
      params: {
        pagination: payload.actualPage
      }
    })
  },
  countCopy({ commit, dispatch }, payload) {
    Api.countCopy(Vue.http, payload.event.id).then(response => {

      dispatch('getMessages', {pagination:payload.event.pagination})
      commit(mutationTypes.ALERTS,  payload.alerts)

    })
  },
  searchMsgByDate ({ commit, dispatch }, payload) {
    console.log(payload)
    Api.searchMsgByDate(Vue.http, payload).then(response => {

      if (!response.body.N_Page) {
        dispatch('hideAlert', {
          message: 'No se encontraron datos a la fecha',
          isActive: 1,
          type: 'error',
          time: 5000
        })
      }

      let msg = {
        response: response.body,
        actualPage: payload.pagination,
        type: 'date'
      }
      dispatch('commitMessages', msg)
      routes.push({
        name: 'HistoryDate',
        params: {
          from: payload.from,
          to: payload.to,
          pagination: payload.pagination,
        }
      })

    })
  },
  searchMsgByText ({ commit, dispatch }, payload) {
    Api.searchMsgByText(Vue.http, payload).then(response => {

      if (!response.body.N_Page) {
        dispatch('hideAlert', {
          message: 'No se encontraron coincidencias',
          isActive: 1,
          type: 'error',
          time: 5000
        })
      }

      let msg = {
        response: response.body,
        actualPage: payload.pagination,
        type: 'text'
      }
      dispatch('commitMessages', msg)
      routes.push({
        name: 'HistoryText',
        params: {
          text: payload.text,
          pagination: payload.pagination,
        }
      })

    })
  },
  hideAlert({ commit, dispatch }, payload){
    commit(mutationTypes.ALERTS,  payload)
  },
  getMessages ({ commit, dispatch }, payload) {
    Api.getMessages(Vue.http, payload).then(response => {
      let msg = {
        response: response.body,
        actualPage: payload.pagination,
        type: payload.type
      }
      dispatch('commitMessages', msg)
    }).then(err => {

    })
  },
  login ({ commit, dispatch }, payload) {
    Api.login(Vue.http, payload).then(response => {
      console.log(response.status)
      if (response.status === 200) {
        let token = response.body
        console.log(token)
        commit(mutationTypes.USER_AUTHENTICATED,  token )
        localStorage.setItem('token', token.token)

        routes.push({
          name: 'Home',
          params: {
            id: token.id
          }
        })
      }
    }, error => {
      console.log(error)
      dispatch('hideAlert', {
        message: 'Usuario o contraseña incorrecto',
        isActive: 1,
        type: 'error',
        time: 5000
      })
    })
  },
  chanceDirectory({ commit, dispatch }, payload) {
    routes.push({
      name: payload.name,
      params: payload.params
    })
  }
}

