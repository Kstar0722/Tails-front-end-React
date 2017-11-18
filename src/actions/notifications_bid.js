import apiService from '../lib/api'
import { GET_NOTIFICATION_BIDS, GET_NOTIFICATION_BIDS_UPDATE } from '../config/actionTypes'

export function getNotification () {
  let bids;
  return function (dispatch) {
    return apiService.find('notifications').then(res => {
      // bids = res.data.filter(item => !item.details || !item.details.approved_by_bidder);
      dispatch({type: GET_NOTIFICATION_BIDS, bids: res })
    })
      .catch(error => {
        console.log('getBids err', error)
      })
  }
}

export function approveBid (id) {

  return function (dispatch) {
    return apiService.post('bids/' + id + '/approve', {}).then(res => {
       // dispatch({type: GET_NOTIFICATION_BIDS_UPDATE, result: {bid: res, id} })
       dispatch(getNotification())
    }).catch(error => {
        console.log('getBids err', error)
      })
  }
}