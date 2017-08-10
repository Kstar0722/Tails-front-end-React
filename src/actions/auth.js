import {push} from 'react-router-redux'
import async from 'async'
import {checkHttpStatus, parseJSON} from '../http.js'
import config from '../config.js'
import { browserHistory } from 'react-router'
// import { dashboardUrl } from '../routes/urlGenerators'
import user from 'auth/user'
import Notifications from 'react-notification-system-redux'

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
        type: 'GET_NOTIFICATION',
        notification: [{
            type: 'danger',
            message: 'Incorrect credentials'
        }]
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
        type: 'GET_NOTIFICATION',
        notification: [{
            type: 'danger',
            message: 'Incorrect credentials'
        }]
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
           dispatch(Notifications.error({
                title: '',
                message: 'Incorrect credentials',
                position: 'br',
                autoDismiss: 3,
           }));
        })
    }
}

export function logout() {
    return function(dispatch) {
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export function register(username, email, password, purpose) {
    let _username = '' + username.trim();
    username = username.trim().split(' ');
    let firstName = '' + username[0];
    let lastName = _username.slice(-1*firstName.length).trim();
    
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
                password: password,
                purpose: purpose
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
            dispatch(Notifications.error({
                title: '',
                message: 'Incorrect credentials',
                position: 'br',
                autoDismiss: 3,
           }));
        })
    }
}