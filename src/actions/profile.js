import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'
import Notifications from 'react-notification-system-redux'

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
            console.log('err', error)
            dispatch({ type: 'ERROR_PROFILE', error })
        })
    }
}

export function updateProfile(_data) {
    let data = Object.assign({}, _data);
    data.password = data.password_reset;
    data.avatar = data.avatar_new;
    data.cover_photo = data.cover_photo_new;
    delete data.confirm_password;
    delete data.password_reset;
    delete data.cover_photo_new;
    delete data.avatar_new;
    data.purpose = "";
    if (data.be_a_cerrier)
        data.purpose = 'be_a_cerrier/'

    if (data.ship)
        data.purpose += 'ship'

    delete data.ship;
    delete data.be_a_cerrier;
    console.log("sendData=========>", data)
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
            dispatch(Notifications.success({
                title: '',
                message: 'Profile saved',
                position: 'br',
                autoDismiss: 0,
           }));
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_PROFILE', error })
            dispatch(Notifications.error({
                title: '',
                message: 'Incorrect credentials',
                position: 'br',
                autoDismiss: 3,
           }));
        })
    }
}