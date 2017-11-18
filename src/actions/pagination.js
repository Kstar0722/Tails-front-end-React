import { SET_CURRENT_PAGE_PAGINATION, SET_PAGES_PAGINATION, SET_TOTAL_PAGINATION } from '../config/actionTypes'

export function setCurrentPage(indexPage) {
  return function (dispatch) {
    dispatch({ type: SET_CURRENT_PAGE_PAGINATION, indexPage: indexPage })
  }
}

export function setPages(countPages) {
  return function (dispatch) {
    dispatch({ type: SET_PAGES_PAGINATION, countPages: countPages })
  }
}

export function setTotalItems(countTotal) {
  return function (dispatch) {
    dispatch({ type: SET_TOTAL_PAGINATION, countTotal: countTotal })
  }
}

