import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'
import Notifications from 'react-notification-system-redux'
import apiService from '../lib/api'
import { GET_BIDS_BY_LISTING_ID } from '../config/actionTypes'

import { ADD_BID_SUCCESS, ADD_BID_ERROR } from "../config/actionTypes";

export function getBidsByListingID(filter) {
  return function (dispatch) {
    return apiService.find('bids', filter)
      .then(res => {
        dispatch({ type: GET_BIDS_BY_LISTING_ID, bids: res.data })
      })
      .catch(error => {
        console.log('getBids err', error)
      })
  }
}

export function getBids() {
    return function(dispatch) {
        const url = config.endpoints.url + config.endpoints.bids + '?include=listing' + '?filter[user_id]=' + user.id
        return fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
          dispatch({ type: 'GET_BIDS', bids: res })
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_BIDS', error })
        })
    }
}

export function getAllBids() {
    return function(dispatch) {
        const url = config.endpoints.url + config.endpoints.bids + '?include=listing'
        return fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            dispatch({ type: 'GET_BIDS', bids: res })
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_BIDS', error })
        })
    }
}

export function addBid(data) {
  return function(dispatch) {
    const url = config.endpoints.url + config.endpoints.bids
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      },
      body: JSON.stringify(data)
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(res => {
        dispatch({ type: ADD_BID_SUCCESS, bid: res })
        dispatch(Notifications.success({
          title: '',
          message: 'Bid added',
          position: 'br',
          autoDismiss: 3,
        }));
      })
      .catch(error =>{
        console.log('addBid err', error)
        dispatch({ type: ADD_BID_ERROR, error })
        dispatch(Notifications.success({
          title: '',
          message: 'Error added',
          position: 'br',
          autoDismiss: 3,
        }));
      })
  }
}
