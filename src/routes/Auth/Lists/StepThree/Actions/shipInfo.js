const ANIMAL_SHIP_INFO_UPDATE = 'ANIMAL_SHIP_INFO_UPDATE'

export function setAnimalShipInfo( field, value) {
    return {
        type: ANIMAL_SHIP_INFO_UPDATE,
        field: field,
        value: value
    }
}