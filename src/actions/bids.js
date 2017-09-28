import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'

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