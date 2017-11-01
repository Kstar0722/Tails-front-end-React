import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'
import Notifications from 'react-notification-system-redux'
import apiService from '../lib/api'
import { PROFILE_UPDATE, PROFILE_STRIPE} from '../config/actionTypes'

export function createAccount() {
    return function(dispatch) {
      return apiService.post('users/create_stripe_account', {}).then(res => {
       console.log('create_stripe_account',res)
       dispatch({ type: PROFILE_UPDATE, user: res.user })
       return null;
      })
      .catch(error => {
        console.log('getBids err', error)
      })
    }
}

export function fetchStripeAccountInfo() {
    return function(dispatch) {
      return apiService.post('users/fetch_stripe_account_info').then(res => {
        dispatch({ type: PROFILE_STRIPE, stripe: res.stripeData ? res.stripeData : {} })
        return null;
      })
      .catch(error => {
        console.log('getBids err', error)
      })
    }
}

export function verifyAccount(data) {
    return function(dispatch) {
      return apiService.post('stripe/verify_account', data).then(res => {
      //  dispatch({ type: PROFILE_STRIPE, stripe: res.stripeData ? res.stripeData : {} })
        return apiService.post('users/fetch_stripe_account_info');
        return null;
      }).then((res) => {
        dispatch({ type: PROFILE_STRIPE, stripe: res.stripeData ? res.stripeData : {} })
        return res.stripeData ? res.stripeData : {}
      })
    }
}

