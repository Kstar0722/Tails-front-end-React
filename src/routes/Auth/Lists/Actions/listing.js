import config from 'config.js'
import { checkHttpStatus, parseJSON } from 'http.js'
import user from 'auth/user'
import { browserHistory } from 'react-router'

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

export function createListings(value) {
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.listings, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify(value.listItems)
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            browserHistory.push('/profile')
            //dispatch( createAnimalInfo(res.id, value.animalList))
            
        })
        .catch(error =>{
            dispatch(createListingsFailure(error))
        })
    }
}
export function createAnimalInfo(list_id, value)
{
    return function(dispatch){
        for(let i = 0; i < value.length; i ++)
        {
            const animalInfoList = {
                listing_id: list_id,
                name: value[i].name,
                breed: value[i].breed,
                height: value[i].height,
                weight: value[i].weight,
                special_notes: value[i].special_notes
            }
            console.log(animalInfoList)
            
                return fetch(config.endpoints.url + config.endpoints.listings_animals, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + user.token
                    },
                    body: JSON/stringify(animalInfoList)
                })
                .then(checkHttpStatus)
                .then(parseJSON)
                .then(res => {
                
                    console.log("success")
                    
                })
                .catch(error =>{
                    dispatch(createListingsFailure(error))
                })
        }
    }

}