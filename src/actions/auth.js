import {push} from 'react-router-redux'
import async from 'async'
import {checkHttpStatus, parseJSON} from '../http.js'
import config from '../config.js'
import { browserHistory } from 'react-router'
// import { dashboardUrl } from '../routes/urlGenerators'
import user from 'auth/user'

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccess(res) {
    user.authorize(res.access_token, res.user.id)
    return {
        type: LOGIN_SUCCESS,
        userId: res.user.id
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        status: error.response
    }
}

export function signupRequest() {
    return {
        type: SIGNUP_REQUEST
    }
}

export function signupSuccess(res) {
    user.authorize(res.access_token, res.user.id)
    return {
        type: SIGNUP_SUCCESS,
        userInfo: JSON.stringify(res)
    }
}

export function signupFailure(error) {
    return {
        type: SIGNUP_FAILURE,
        status: error.response
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
            dispatch(loginSuccess(res))
            browserHistory.push('/profile')
            console.log("login success")
        })
        .catch(error =>{
            dispatch(loginFailure(error))
        })
    }
}

export function register(firstName = ' ', lastName = 'dev', email, password) {
    return function(dispatch) {
        dispatch(signupRequest())
        return fetch(config.endpoints.url + config.endpoints.signup, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            dispatch(signupSuccess(res))
            browserHistory.push('/profile')
            console.log("signup success")
        })
        .catch(error =>{
            dispatch(signupFailure(error))
        })
    }
}