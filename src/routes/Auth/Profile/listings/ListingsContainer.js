import Listings from './Listings'
import { getListings, deleteListing } from 'actions/listing'

const mapDispatchToProps = (dispatch) => ({
    getListings: query => dispatch(getListings(query)),
    deleteListing: id => dispatch(deleteListing(id)),
})

const mapStateToProps = (state) => ({
    listings: state.listing.data
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Listings)
