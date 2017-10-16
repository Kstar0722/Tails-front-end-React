import Listings from './Listings'
import { getListings, deleteListing } from 'actions/listing'

const mapDispatchToProps = (dispatch) => ({
    deleteListing: id => dispatch(deleteListing(id)),
})

const mapStateToProps = (state) => ({
    listings: state.listing.data,
    viewitem: state.params
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Listings)
