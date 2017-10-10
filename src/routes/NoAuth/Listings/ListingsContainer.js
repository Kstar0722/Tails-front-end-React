import AllListings from './AllListings'
import {getAllListings} from 'actions/listing'

const mapDispatchToProps = (dispatch) => ({
     getAllListings: () => dispatch(getAllListings()),
})

const mapStateToProps = (state) => ({
    listings: state.listing.data
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AllListings)
