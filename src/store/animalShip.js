export const ANIMAL_SHIP_INFO_UPDATE = 'ANIMAL_SHIP_INFO_UPDATE'

const initialState = {
    data: {}
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ANIMAL_SHIP_INFO_UPDATE:
            let shipInfo = state.data
            shipInfo[action.field] = action.value
            return Object.assign({}, state, {
                shipInfo
            });
        default:
        return state;
    }
}