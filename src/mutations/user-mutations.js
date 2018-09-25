import { mutationTypes } from './mutations-types'

// mutations
export const mutations = {
  [mutationTypes.AUTH_LOG] (state, payload) {
    state.empleadoState.isLog = payload.tipoUsuario
    state.empleadoState.idLog = payload.idActivo
  },
  [mutationTypes.USER_LOGOUT] (state, payload) {
    state.usuarioState = {
      token: null,
      autenticado: false,
      rol: 0
    }
  },
  [mutationTypes.USER_AUTHENTICATED] (state, payload) {
    state.userState = {
      email: payload.email,
      numero_default: payload.numero_default,
      token: payload.token,
      id: payload.id
    }
  },
  [mutationTypes.SAVE_NUMBER] (state, payload) {
    state.userState = {
      email: payload.email,
      numero_default: payload.numero_default,
      token: payload.token,
      id: payload.id
    }
  },
  [mutationTypes.SAVE_LINK] (state, payload) {
    state.msgState = {
      msg: payload.msg,
      numero: payload.numero,
      counter: payload.counter,
      id: payload.id
    }
  },
  [mutationTypes.MESSAGES_PAGINATION] (state, payload) {
    state.paginationState = {
      messages: payload.response.Pagination,
      pages: payload.response.N_Page,
      actualPage: payload.actualPage,
      type: payload.type
    }
  },
  [mutationTypes.ALERTS] (state, payload) {
    state.alertState = {
      message: payload.message,
      isActive: payload.isActive,
      type: payload.type,
      time: payload.time
    }
  },
  [mutationTypes.USER_NO_ACCESS] (state, payload) {
    var secret = 'secret'
    var decoded = jwt.decode(payload.token, secret)
    console.log(decoded)

    state.userState = {
      token: payload.token,
      autenticado: payload.token !== null,
      nombre: decoded.nombre + ' ' + decoded.apellidos,
      rol: decoded.tipo_cuenta
    }
  }
}
