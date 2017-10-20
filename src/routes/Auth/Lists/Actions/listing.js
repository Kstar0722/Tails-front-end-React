import config from 'config.js'
import { checkHttpStatus, parseJSON } from 'http.js'
import user from 'auth/user'
import { browserHistory } from 'react-router'
import apiService from 'lib/api'
import Bluebird from 'bluebird'
import Notifications from 'react-notification-system-redux'

const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS'
const GET_LISTINGS_FAILURE = 'GET_LISTINGS_FAILURE'
const CREATE_LISTINGS_SUCCESS = 'CREATE_LISTINGS_SUCCESS'
const CREATE_LISTINGS_FAILURE = 'CREATE_LISTINGS_FAILURE'
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

export function createListingsSuccess(res) {
    return {
        type: CREATE_LISTINGS_SUCCESS,
        data: res
    }
}

export function createListingsFailure(error) {
    return {
        type: CREATE_LISTINGS_FAILURE,
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
export function updateListings(id, value){
   return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.listings + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify(value)
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            console.log(res)
            dispatch(createListingsSuccess(res))
            browserHistory.push('/profile')
        })
        .catch(error =>{
            dispatch(createListingsFailure(error))
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

export function createListings({listing, animals}) {
    return function(dispatch) {
        return apiService.create('listings', listing).then(careatListing => {
            return Bluebird.map(animals, animal => {
                animal.listing_id = careatListing.id;
                let images = null;

                if (animal.images){
                    images = animal.images.map(image => image)
                }

                delete animal.images;

                return apiService.create('listing_animals', animal).then(careatAnimal => {
                    if(!images){
                        return null;
                    }
                    return apiService.create('animal_images/bulk', {listing_animal_id: careatAnimal.id, images})
                })
            })

            // dispatch(createAnimalInfo(res.id, value.animalList))
        }).then(() => {
            browserHistory.push('/profile');
            dispatch(Notifications.success({
                title: '',
                message: 'Listing created',
                position: 'br',
                autoDismiss: 2,
            }));
            return null;
        }).catch(error =>{
            dispatch(createListingsFailure(error))
            dispatch(Notifications.error({
                title: '',
                message: 'Oops, something went wrong!',
                position: 'br',
                autoDismiss: 3,
           }));
        })
    }
}
export function createAnimalInfo(list_id, value)
{
    const animalInfoList = []
    for(let i = 0; i < value.length; i ++)
    {
        value[i].listing_id = list_id
    }
    console.log(value)
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.listings_animals +"/bulk", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify(value)
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            console.log(res)
            browserHistory.push('/profile')
            // dispatch(createAnimalInfo(res.id, value.animalList))
        })
        .catch(error =>{
            dispatch(createListingsFailure(error))
        })
    }
}