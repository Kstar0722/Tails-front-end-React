import { GET_NOTIFICATION_BITS } from '../config/actionTypes'

// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  GET_NOTIFICATION_BIDS: (state, action) => Object.assign({}, state, {
    data: action.bids
  }),
  GET_NOTIFICATION_BIDS_UPDATE: (state, action) => {
    let update_bids = state.data.map(item => {
      if(action.result.id == item.my_bid[0].id){
        item.my_bid[0]= action.result.bid;
        console.log('item',item)
        return item
      }
      return item;
    })
    return {data: update_bids};
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: []
}

export default function notificationsBid (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}