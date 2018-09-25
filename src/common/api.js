const apiDireccion = 'http://localhost:8081'

export class Api {
  static login (http, data) {
    return http.post(`${apiDireccion}/login`,
      {
        email: data.event.email, password: data.event.password
      })
  }
  static saveNumber (http, data) {
    return http.put(`${apiDireccion}/usuarios/${data.id}`,
      {
        numero_default: data.number
      })
  }
  static saveLink (http, data) {
    return http.post(`${apiDireccion}/messages`,
      {
        number: data.number,
        link: data.link,
        msg: data.msg,
        id: data.id
      })
  }
  static editLink (http, data) {
    return http.put(`${apiDireccion}/messages/${data.id}`,
      {
        number: data.number,
        link: data.link,
        msg: data.msg,
      })
  }
  static getMessages (http, data) {
    return http.get(`${apiDireccion}/messages/list/${data.pagination}`,
    {
      header: {
        'Authorization': 'stringToken'
      }
    })
  }
  static searchMsgByDate (http, data) {
    return http.get(`${apiDireccion}/messages/search-date/${data.from}/${data.to}/${data.pagination}`,
    {
      header: {
        'Authorization': 'stringToken'
      }
    })
  }
  static searchMsgByText (http, data) {
    return http.get(`${apiDireccion}/messages/search/${data.text}/${data.pagination}`,
    {
      header: {
        'Authorization': 'stringToken'
      }
    })
  }
  static countCopy (http, data) {
    return http.put(`${apiDireccion}/messages/${data}/counter`,
    {
      header: {
        'Authorization': 'stringToken'
      }
    })
  }
  static logout (http, event) {
    let token = event
    return http.get(`${apiDireccion}/logout`)
  }
}
