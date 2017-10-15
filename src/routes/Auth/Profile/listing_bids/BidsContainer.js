import Bids from './Bids'
import {getListingBids} from 'actions/listing_bids'

const mapDispatchToProps = (dispatch) => ({
    getListingBids: (user_id) => dispatch(getListingBids(user_id)),
})

const mapStateToProps = (state) => ({
    bids : state.listing_bid,
    user: state.profile.data
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Bids)
