import { GET_USER } from '../config/actionTypes'

// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_USER: (state, action) => Object.assign({}, state, {
    data: action.data
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
