// import user from 'auth/user'

// ------------------------------------
// Constants
// ------------------------------------
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_SUCCESS]: (state, action) => Object.assign({}, state, {
    authorized: true,
    userId: action.userId
  }),
  ['LOGOUT']: (state, action) => Object.assign({}, state, {
    authorized: false,
    userId: null
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  authorized: false,
  userId: null
}

export default function userGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}