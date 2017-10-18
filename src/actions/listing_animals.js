import apiService from '../lib/api'
import { GET_LISTING_ANIMALS_BY_ID } from '../config/actionTypes'

export function getListingAnimals(filter) {
  return function (dispatch) {
    return apiService.find('listing_animals', filter)
      .then(res => {
        dispatch({ type: GET_LISTING_ANIMALS_BY_ID, listing_animals: res.data })
      })
      .catch(error => {
        console.log('getListingAnimals err', error)
      })
  }
}
