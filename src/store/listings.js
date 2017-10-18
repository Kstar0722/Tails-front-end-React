import { GET_ALL_LISTINGS } from '../config/actionTypes'

const ACTION_HANDLERS = {
  [GET_ALL_LISTINGS]: (state, action) => Object.assign({}, state, {
    data: action.data
  })
}

const initialState = {
  data: []
}

export default function allListingsGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
