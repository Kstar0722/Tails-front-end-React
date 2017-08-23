const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS'
const GET_LISTINGS_FAILURE = 'GET_LISTINGS_FAILURE'

const ACTION_HANDLERS = {
  [GET_LISTINGS_SUCCESS]: (state, action) => Object.assign({}, state, {
    data: action.data
  }),
  [GET_LISTINGS_FAILURE]: (state, action) => Object.assign({}, state, {
    error: action.error
  })
}

const initialState = {
  data: [],
  error: null
}

export default function listingGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}