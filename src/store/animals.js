
// ------------------------------------
// Constants
// ------------------------------------
const GET_ANIMALS_IDS_SUCCESS = 'GET_ANIMALS_IDS_SUCCESS'
const GET_ANIMALS_IDS_FAILURE = 'GET_ANIMALS_IDS_FAILURE'
const SELECTED_ANIMALS = 'SELECTED_ANIMALS'
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_ANIMALS_IDS_SUCCESS]: (state, action) => Object.assign({}, state, {
    data: action.data,    
    loading: false,
    loaded: true
  }),
  [GET_ANIMALS_IDS_FAILURE]: (state, action) => Object.assign({}, state, {
    data: action.error,
    loading: true,
    loaded: false
  }),
  [SELECTED_ANIMALS]: (state, action) => {
    const flag = action.flag
    let selectedAnimals = state.selectedAnimals
    if(flag == true)
      selectedAnimals.push(action.data)
    else {
      const index = _.findIndex(selectedAnimals, item => item.id == action.data.id)
      selectedAnimals.splice(index, 1)
    }
    
    return Object.assign({}, state, {
      selectedAnimals
  });
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: [],
  selectedAnimals: [],
  error: null,
  loading: true,
  loaded: false
}

export default function animalsIdsGetReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}