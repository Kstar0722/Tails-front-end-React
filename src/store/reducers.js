import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'
import locationReducer from './location'
import listinghReducer from './listing'
import authReducer from './auth'
import profileReducer from './profile'
import bidReducer from './bid'
import animalIdsReducer from './animals'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    form: formReducer,
    notifications,
    location: locationReducer,
    auth: authReducer,
    listing: listinghReducer,
    profile: profileReducer,
    bid: bidReducer,
    animalIdsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
