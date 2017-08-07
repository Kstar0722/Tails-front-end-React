import config from '../config.js'
import { checkHttpStatus, parseJSON } from '../http.js'
import user from 'auth/user'

export function getBids() {
    let bids = [];
    let listing_ids = [];
    return function(dispatch) {
        return fetch(config.endpoints.url + config.endpoints.bids+ '?include=listing', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            bids = res;
            return fetch(config.endpoints.url + config.endpoints.listings, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                },
            })
        }).then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {

            let listings = {};
            res.data.map(listing => {
                listings[listing.id] = listing
            })

            console.log('listings', listings)
            dispatch({ type: 'GET_BIDS', bids: bids, listings })
        })
        .catch(error =>{
            dispatch({ type: 'ERROR_BIDS', error })
        })
    }
}