import { GET_CONVERSATIONS } from '../config/actionTypes'

// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_CONVERSATIONS: (state, action) => Object.assign({}, state, {
    data: action.conversations
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: []
}

export default function conversations (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}