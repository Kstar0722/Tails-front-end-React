import AllListings from './AllListings'
import {getAllListings} from 'actions/listing'

const mapDispatchToProps = (dispatch) => ({
     getAllListings: filter => dispatch(getAllListings(filter)),
})

const mapStateToProps = (state) => ({
  listings: state.listings
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AllListings)
