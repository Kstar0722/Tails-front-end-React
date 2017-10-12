import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'
import { browserHistory } from 'react-router'

export function getListing(listing_id) {
  return function(dispatch) {
    const url = config.endpoints.url + config.endpoints.listings + '/' + listing_id + '?filter[user_id]=' + user.id + "&include_bid_counts=1"
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
        console.log('getListing res', res)
        dispatch({ type: 'GET_LISTINGS_SUCCESS', data: res })
      })
      .catch(error =>{
        console.log('getListing err')
        dispatch({ type: 'GET_LISTINGS_FAILURE', error })
      })
  }
}

export function getListings() {
    return function(dispatch) {
        const url = config.endpoints.url + config.endpoints.listings + '?filter[user_id]=' + user.id + "&include_bid_counts=1"
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
            dispatch({ type: 'GET_LISTINGS_SUCCESS', data: res })
        })
        .catch(error =>{
            dispatch({ type: 'GET_LISTINGS_FAILURE', error })
        })
    }
}

export function getAllListings() {
    return function(dispatch) {
        const url = config.endpoints.url + config.endpoints.listings + "?include_bid_counts=1"
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
            console.log(res)
            dispatch({ type: 'GET_LISTINGS_SUCCESS', data: res })
        })
        .catch(error =>{
            dispatch({ type: 'GET_LISTINGS_FAILURE', error })
        })
    }
}

export function deleteListing(id) {
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.listings + '/' + id, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            dispatch({ type: 'DELETE_LISTING', id })
            window.location.reload()
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_LISTING', error })


        })
    }
}
