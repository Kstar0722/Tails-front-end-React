import { GET_LISTING_ANIMALS_BY_ID } from '../config/actionTypes'

// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_LISTING_ANIMALS_BY_ID: (state, action) => Object.assign({}, state, {
    listing_details: action.listing_animals
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  listing_details: {}
}

export default function listingAnimalsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
