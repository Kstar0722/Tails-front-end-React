import config from 'config.js'
import { checkHttpStatus, parseJSON } from 'http.js'
import user from 'auth/user'

const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS'
const GET_LISTINGS_FAILURE = 'GET_LISTINGS_FAILURE'

export function getListingsSuccess(res) {
    return {
        type: GET_LISTINGS_SUCCESS,
        data: res
    }
}

export function getListingsFailure(error) {
    return {
        type: GET_LISTINGS_FAILURE,
        error: error
    }
}

export function getListings(id) {
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.listings + '/' + id, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            dispatch(getListingsSuccess(res))
        })
        .catch(error =>{
            dispatch(getListingsFailure(error))
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
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_LISTING', error })
        })
    }
}