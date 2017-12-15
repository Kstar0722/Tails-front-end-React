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
  [LOGIN_REQUEST]: (state, action) => Object.assign({}, state, {
    loading: true,
    error: false,
  }),
  [LOGIN_SUCCESS]: (state, action) => Object.assign({}, state, {
    authorized: true,
    userId: action.userId,
    loading: false,
  }),
  [LOGIN_FAILURE]: (state, action) => Object.assign({}, state, {
    error: true,
    authorized: false,
    userId: null,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  authorized: false,
  userId: null,
  error: false,
  loading: false,
}

export default function userGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
