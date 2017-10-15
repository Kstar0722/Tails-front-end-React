const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS'
const GET_LISTINGS_FAILURE = 'GET_LISTINGS_FAILURE'

import { GET_BIDS_BY_LISTING_ID, GET_COMPLETED_SHIPPING } from '../config/actionTypes'

const ACTION_HANDLERS = {
  [GET_LISTINGS_SUCCESS]: (state, action) => Object.assign({}, state, {
    data: action.data,
    loaded: true,
    loading: false
  }),
  [GET_LISTINGS_FAILURE]: (state, action) => Object.assign({}, state, {
    error: action.error,
    loaded: false,
    loading: true
  }),
  [GET_COMPLETED_SHIPPING]: (state, action) => Object.assign({}, state, {
    completedShipping: action.total
  })
}

const initialState = {
  data: [],
  error: null,
  loaded: false,
  loading: true,
  completedShipping: 0
}

export default function listingGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
