import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'
import Notifications from 'react-notification-system-redux'
import apiService from '../lib/api'
import { GET_LISTING_BIDS, UPDATE_LISTING_BID } from '../config/actionTypes'

export function getListingBids(user_id) {
    return function(dispatch) {
      return Promise.all([
        apiService.find('bids', {
          filter: {
            status: "accepted"
          },
          include: ['listing']
        }),
        apiService.find('listings', {
          filter: {
            user_id: user_id
          }
        })
      ]).then(([bid, listing]) => {
        let listind_ids = listing.data.map(listing => listing.id);
        let bids = bid.data.filter(item => listind_ids.indexOf(item.listing_id) > -1);
        dispatch({ type: GET_LISTING_BIDS, bids })
      })
      .catch(error => {
        console.log('getBids err', error)
      })
    }
}

export function PayBid(bid_id, token) {
    return function(dispatch) {
      
      return apiService.post('bids/' + bid_id +'/pay', {
          card_token: token
      }).then((res) => {
        console.log('res pay', res)
        dispatch({ type: UPDATE_LISTING_BID, bid: res.bid });
        dispatch(Notifications.success({
          title: '',
          message: 'Accepted',
          position: 'br',
          autoDismiss: 2,
        }));
      })
      .catch(error => {
        console.log('err', error)
        dispatch(Notifications.error({
          title: '',
          message: 'Error',
          position: 'br',
          autoDismiss: 2,
        }));
      })
    }
}

export function Shipped(bid_id) {
    return function(dispatch) {
      
      return apiService.post('bids/' + bid_id +'/transfer', {}).then((res) => {
        dispatch({ type: UPDATE_LISTING_BID, bid: res.bid })
        dispatch(Notifications.success({
          title: '',
          message: 'Accepted',
          position: 'br',
          autoDismiss: 2,
        }));
      })
      .catch(error => {
        console.log('err', error)
        dispatch(Notifications.error({
          title: '',
          message: 'Error',
          position: 'br',
          autoDismiss: 2,
        }));
      })
    }
}
