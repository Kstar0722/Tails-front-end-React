import { GET_PROFILE, PROFILE_UPDATE, PROFILE_STRIPE } from 'config/actionTypes'

const initialState = {
  data: {
  },
  stripe: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PROFILE:
      let profile = action.profile
      profile.be_a_carrier = false;
      profile.ship = false;
      if(typeof profile.purpose == 'string'){
        let types = profile.purpose.split('/').filter(item => {
          return ['ship','be_a_carrier'].indexOf(item) > -1
        })
        profile.be_a_carrier = types.indexOf('be_a_carrier') > -1
        profile.ship = types.indexOf('ship') > -1
      }

      return Object.assign({}, state, {
        data: profile
      });
    case PROFILE_UPDATE:
      return Object.assign({}, state, {
        data: action.user
      });
    case PROFILE_STRIPE:
      return Object.assign({}, state, {
        stripe: action.stripe
      });
    default:
      return state;
  }
}
