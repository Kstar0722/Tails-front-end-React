
// ------------------------------------
// Constants
// ------------------------------------
const GET_ANIMALS_IDS_SUCCESS = 'GET_ANIMALS_IDS_SUCCESS'
const GET_ANIMALS_IDS_FAILURE = 'GET_ANIMALS_IDS_FAILURE'
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_ANIMALS_IDS_SUCCESS]: (state, action) => Object.assign({}, state, {
    data: action.data
  }),
  [GET_ANIMALS_IDS_FAILURE]: (state, action) => Object.assign({}, state, {
    data: action.error
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: [],
  error: null
}

export default function animalsIdsGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}