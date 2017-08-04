import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'

export function getProfile() {
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.profile + '/' + user.id, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            dispatch({ type: 'GET_PROFILE', profile: res })
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_PROFILE', error })
        })
    }
}

export function updateProfile(data) {
    data.password = data.password_reset;
    delete data.confirm_password;
    delete data.password_reset;
    
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.profile + '/', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
             body: JSON.stringify(data)
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            dispatch({ type: 'GET_PROFILE', profile: res })
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_PROFILE', error })
        })
    }
}