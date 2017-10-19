import { GET_ALL_LISTINGS, SET_FILTER_LISTINGS } from '../config/actionTypes'

const ACTION_HANDLERS = {
  [GET_ALL_LISTINGS]: (state, action) => Object.assign({}, state, action.data),
  [SET_FILTER_LISTINGS]: (state, action) => Object.assign({}, state,
    Object.assign({}, state.filter, action.filter ))
}

const initialState = {
  filter: null
}

export default function allListingsGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
