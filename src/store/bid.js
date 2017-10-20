import {ADD_BID_SUCCESS, BID_CLEAR, GET_BIDS_BY_LISTING_ID, GET_COUNT_TRANSFERED_BIDS } from '../config/actionTypes'

// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_BIDS: (state, action) => Object.assign({}, state, {
    data: action.bids,
    listings: action.listings
  }),
  GET_BIDS_BY_LISTING_ID: (state, action) => Object.assign({}, state, {
    data: action.bids
  }),
  GET_COUNT_TRANSFERED_BIDS: (state, action) => Object.assign({}, state, {
    bidder_details: Object.assign({}, state.bidder_details, action.data )
  }),
  ADD_BID_SUCCESS: (state, action) => Object.assign({}, state, {
    data:  [...state.data, action.bid]
  }),
  BID_CLEAR: (state, action) => Object.assign({}, state, {
    data:  []
  })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {
    data: []
  },
  listings: {},
  bidder_details: {}
}

export default function bidGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
