import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'
import { browserHistory } from 'react-router'
import apiService from '../lib/api'

import { GET_COMPLETED_SHIPPING, GET_ALL_LISTINGS } from '../config/actionTypes'

export function getCompletedShipping(filter) {
  return function (dispatch) {
    return apiService.find('listings', filter)
      .then(res => {
        dispatch({ type: GET_COMPLETED_SHIPPING, total: res.total })
      })
      .catch(error => {
        console.log('getCompletedShipping err', error)
      })
  }
}

export function getListing(listing_id) {
  return function(dispatch) {
    const url = config.endpoints.url + config.endpoints.listings + '/' + listing_id + '?filter[user_id]=' + user.id + "&include_bid_counts=1"
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
        console.log('getListing res', res)
        dispatch({ type: 'GET_LISTINGS_SUCCESS', data: res })
      })
      .catch(error =>{
        console.log('getListing err')
        dispatch({ type: 'GET_LISTINGS_FAILURE', error })
      })
  }
}

export function getListings() {
    return function(dispatch) {
        const url = config.endpoints.url + config.endpoints.listings + '?filter[user_id]=' + user.id + "&include_bid_counts=1"
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
            dispatch({ type: 'GET_LISTINGS_SUCCESS', data: res })
        })
        .catch(error =>{
            dispatch({ type: 'GET_LISTINGS_FAILURE', error })
        })
    }
}

export function getAllListings(filter) {
  return function (dispatch) {

    let listings = []

    return apiService.find('listings', filter)
      .then(res => {
        let ids = []
        if(res.total > 0) {

          listings = res.data;
          listings.forEach(listing => {
            if (listing.animals.length) {
              ids = ids.concat(listing.animals.map(animal => animal.id))
            }

            listing.images = [];
          })

          return ids
        }

        return []
      })
      .then(animals_ids => {

        if (animals_ids.length) {
          const listing_animal_id = {}
          listing_animal_id.in = animals_ids.join(',')

          return apiService.find('animal_images', {
            filter: { listing_animal_id }
          })
            .then(res => {
              return res.data
            })
            .catch(error => {
              console.log('getListingAnimals err', error)
              return []
            })
        }

        return []
      })
      .then(images => {

        let imagesObj = {};
        images.forEach(image => {
          if (!imagesObj[image.listing_animal_id]){
            imagesObj[image.listing_animal_id] = [];
          }

          imagesObj[image.listing_animal_id].push(image);
        })

        let tmp = []
        listings.forEach(listing => {

          let counts = {}

          if (listing.animals.length) {
            listing.animals.forEach(animal => {
              if (imagesObj[animal.id]) {
                listing.images = listing.images.concat( imagesObj[animal.id] )
              }

              if (config.breeds.indexOf(animal.breed) > -1){
                if (!counts[animal.breed]){
                  counts[animal.breed] = 0;
                }
                counts[animal.breed]++;
              }

            })

            listing.countBreeds = Object.keys(counts)
              .map(type => counts[type]+' '+ type + ((counts[type]>1) ? 's' : ''))
              .join(',');
          }
        })

        dispatch({ type: GET_ALL_LISTINGS, data: listings })
      })
      .catch(error => {
        console.log('getAllListings err', error)
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
            window.location.reload()
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_LISTING', error })
        })
    }
}
