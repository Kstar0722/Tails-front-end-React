import {push} from 'react-router-redux'
import {checkHttpStatus, parseJSON} from 'http.js'
import config from 'config.js'
import { browserHistory } from 'react-router'
import user from 'auth/user'
import Notifications from 'react-notification-system-redux'

const GET_ANIMALS_IDS_SUCCESS = 'GET_ANIMALS_IDS_SUCCESS'
const GET_ANIMALS_IDS_FAILURE = 'GET_ANIMALS_IDS_FAILURE'

export function getAnimalsIdsSuccess(res) {
    return {
        type: GET_ANIMALS_IDS_SUCCESS,
        data: res
    } 
}

export function getAnimalsIdsFailure(error) {
    return {
        type: GET_ANIMALS_IDS_FAILURE,
        error: error
    } 
}

export function getAnimalsIds() {
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.listings_animals, {
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
            dispatch(getAnimalsIdsSuccess(res))
        })
        .catch(error =>{
            dispatch(getAnimalsIdsFailure(error))
        })
    }
}

export function selectAnimal(id) {
    console.log(id)
    return function(dispatch) {
        
    }
}