import apiService from 'lib/api'
import config from '../config'
export default {
  authorize (token, userId) {
    window.localStorage.setItem('authToken', token)
    window.localStorage.setItem('userId', userId)
    apiService.config({
      baseUrl: config.endpoints.url,
      headers: {
        'Accept': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json'
      }
    })
    // window.localStorage.setItem('role', role)
  },

  logout () {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('userId')
    apiService.config({
      baseUrl: config.endpoints.url,
      headers: {
        'Authorization': undefined,
      }
    })
    // window.localStorage.removeItem('role')
  },

  get authorized () {
    return (window.localStorage.getItem('authToken') && window.localStorage.getItem('userId')) ? true : false
  },

  get token () {
    return window.localStorage.getItem('authToken')
  },

  get id () {
    return window.localStorage.getItem('userId')
  },

//   get role () {
//     return window.localStorage.getItem('role')
//   }

}