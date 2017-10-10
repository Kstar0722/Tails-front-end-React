import {push} from 'react-router-redux'
import {checkHttpStatus, parseJSON} from 'http.js'
import config from 'config.js'
import { browserHistory } from 'react-router'
import user from 'auth/user'
import Notifications from 'react-notification-system-redux'

const GET_ANIMALS_IDS_SUCCESS = 'GET_ANIMALS_IDS_SUCCESS'
const GET_ANIMALS_IDS_FAILURE = 'GET_ANIMALS_IDS_FAILURE'
const SELECTED_ANIMALS = 'SELECTED_ANIMALS'

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
            dispatch(getAnimalImage(res.data))
        })
        .catch(error =>{
            dispatch(getAnimalsIdsFailure(error))
        })
    }
}

export function getAnimalImage(listings) {
    let animalInfos = []
    return function(dispatch) {
        listings.forEach(function(element) {
            const url = config.endpoints.url + config.endpoints.animal_image + '?filter[listing_animal_id]=' + element.id
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
                const animalInfo = Object.assign({}, res, element)
                animalInfos.push(animalInfo)
                dispatch(getAnimalsIdsSuccess(animalInfos))            
            })
            .catch(error =>{
                dispatch(getAnimalsIdsFailure(error))
            })
        });
    }    
}
export function selectAnimal(value, flag) {
    return {
        type: SELECTED_ANIMALS,
        data: value,
        flag: flag
    } 
}
