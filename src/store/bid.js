import { GET_BIDS_BY_LISTING_ID } from '../config/actionTypes'

// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_BIDS: (state, action) => Object.assign({}, state, {
    data: action.bids,
    listings: action.listings
  }),
  GET_BIDS_BY_LISTING_ID: (state, action) => Object.assign({}, state, {
    data: action.bids
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {
    data: []
  },
  listings: {}
}

export default function bidGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
