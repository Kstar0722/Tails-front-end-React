// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_BIDS: (state, action) => Object.assign({}, state, {
    data: action.bids
  })
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