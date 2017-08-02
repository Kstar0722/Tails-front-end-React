export default {
  authorize (token, userId) {
    window.localStorage.setItem('authToken', token)
    window.localStorage.setItem('userId', userId)
    // window.localStorage.setItem('role', role)
  },

  logout () {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('userId')
    // window.localStorage.removeItem('role')
  },

  get authorized () {
    return window.localStorage.getItem('authToken') && window.localStorage.getItem('userId')
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