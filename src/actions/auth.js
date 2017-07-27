import {push} from 'react-router-redux'
import async from 'async'
import {checkHttpStatus, parseJSON} from '../http.js'
import config from '../config.js'
import { browserHistory } from 'react-router'
// import { dashboardUrl } from '../routes/urlGenerators'

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccess(res) {
    localStorage.setItem('userInfo', JSON.stringify(res))
    
    return {
        type: LOGIN_SUCCESS,
        userInfo: JSON.stringify(res)
    }
}

export function loginFailure(error) {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')

    return {
        type: LOGIN_FAILURE,
        status: error.response
    }
}

export function logoutRequest() {
    return {
        type: LOGOUT_REQUEST
    }  
}
export function logoutSucess() {
    return {
        type: LOGOUT_SUCCESS
    }
}

export function login(email, password) {
    return function(dispatch) {
        dispatch(loginRequest())
        return fetch(config.endpoints.url + config.endpoints.login, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            dispatch(getUserInfo(res))
        })
        .catch(error =>{
            dispatch(loginFailure(error))
        })
    }
}

export function getUserInfo(res) {
    const token = res.access_token
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.userInfo + res.user.id, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(parseJSON)
        .then(res =>{
            localStorage.setItem('token', token)
            dispatch(loginSuccess(res))
            dispatch(push(dashboardUrl()))            
        })
    }

}
export function logout() {
    return function(dispatch) {
        dispatch(logoutSucess())
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        dispatch(push('/'))
    }
}

