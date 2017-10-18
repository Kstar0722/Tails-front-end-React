import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'
import locationReducer from './location'
import listingGetReducer from './listing'
import authReducer from './auth'
import profileReducer from './profile'
import bidGetReducer from './bid'
import animalsReducer from './animals'
import animalShipReducer from './animalShip'
import userReducer from './user'
import notificationsBidGetReducer from './notifications_bid'
import listingBidReducer from './listing_bid'
import listingAnimalsReducer from './listingAnimals'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    form: formReducer,
    notifications,
    location: locationReducer,
    auth: authReducer,
    listing: listingGetReducer,
    profile: profileReducer,
    notifications_bid: notificationsBidGetReducer,
    bid: bidGetReducer,
    animalsReducer,
    animalShipReducer,
    user: userReducer,
    listing_bid: listingBidReducer,
    listingAnimals: listingAnimalsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
