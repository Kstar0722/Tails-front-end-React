// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_PROFILE: (state, action) => Object.assign({}, state, {
    data: action.profile
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {
  }
}

export default function userGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}