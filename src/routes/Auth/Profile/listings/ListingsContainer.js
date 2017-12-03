import Listings from './Listings'
import { getListings, deleteListing } from 'actions/listing'
import {Shipped} from 'actions/listing_bids'

const mapDispatchToProps = (dispatch) => ({
    deleteListing: id => dispatch(deleteListing(id)),
    Shipped: (id) => dispatch(Shipped(id))
})

const mapStateToProps = (state) => ({
    listings: state.listing.data ? state.listing.data.data ? state.listing.data : { data: [] } : { data: [] },
    viewitem: state.params
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Listings)
