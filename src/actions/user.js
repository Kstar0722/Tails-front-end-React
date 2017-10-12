import apiService from '../lib/api'
import { GET_USER } from '../config/actionTypes'

export function getUser(filter = {}) {
  let userId = localStorage.getItem('userId')

  return function (dispatch) {
    return apiService.find('users/' + userId , filter)
      .then(res => {
        dispatch({ type: GET_USER, data: res })
      })
      .catch(error => {
        console.log('getUser err', error)
      })
  }
}
