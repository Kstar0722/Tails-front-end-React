
// ------------------------------------
// Constants
// ------------------------------------
const GET_LISTINGS = 'GET_LISTINGS'
const DELETE_LISTING = 'DELETE_LISTING'
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_LISTINGS]: (state, action) => Object.assign({}, state, {
    data: action.listings
  }),
  [DELETE_LISTING]: (state, action) => {
    let listings_data = []
    state.data.data.map(listing => {
      if (listing.id !== action.id) {
        listings_data.push(listing)
      }
    })
    let listings = state.data
    listings.data = listings_data
    listings.total -= 1
    return Object.assign({}, state, {
      data: Object.assign({}, listings)
    })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {
    data: []
  }
}

export default function userGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}