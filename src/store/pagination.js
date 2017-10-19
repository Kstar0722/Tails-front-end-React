import { SET_CURRENT_PAGE_PAGINATION, SET_PAGES_PAGINATION, SET_TOTAL_PAGINATION } from '../config/actionTypes'

const ACTION_HANDLERS = {
  [SET_CURRENT_PAGE_PAGINATION]: (state, action) => Object.assign({}, state, { currentPage: action.indexPage }),
  [SET_PAGES_PAGINATION]: (state, action) => Object.assign({}, state, { countPages: action.countPages }),
  [SET_TOTAL_PAGINATION]: (state, action) => Object.assign({}, state, { countTotal: action.countTotal })
}

const initialState = {
  currentPage: 1,
  countPages: null,
  countTotal: null,
  defaultPageSize: 2
}

export default function paginationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
