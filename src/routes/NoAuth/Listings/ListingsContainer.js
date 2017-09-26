import AllListings from './AllListings'
import {getListings} from 'actions/listing'

const mapDispatchToProps = (dispatch) => ({
     getAllListings: () => dispatch(getListings()),
})

const mapStateToProps = (state) => ({
    listings: state.listing.data
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AllListings)
