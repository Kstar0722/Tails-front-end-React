import { GET_LISTING_BIDS, UPDATE_LISTING_BID } from '../config/actionTypes'

// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_LISTING_BIDS: (state, action) => action.bids,
  UPDATE_LISTING_BID: (state, action) => {
    let bids = state.map(bid => {
      if (bid.id == action.bid.id){
        action.bid.listing = bid.listing;
        return action.bid;
      }
      return bid;
    })
    return bids;
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []

export default function bidGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
