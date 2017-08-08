import { GET_PROFILE } from 'config/actionTypes'

const initialState = {
  data: {
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PROFILE:
      let profile = action.profile
      profile.be_a_cerrier = false;
      profile.ship = false;
      if(typeof profile.purpose == 'string'){
        let types = profile.purpose.split('/').filter(item => {
          return ['ship','be_a_cerrier'].indexOf(item) > -1
        })
        profile.be_a_cerrier = types.indexOf('be_a_cerrier') > -1
        profile.ship = types.indexOf('ship') > -1
      }

      return Object.assign({}, state, {
        data: profile
      });
    default:
      return state;
  }
}