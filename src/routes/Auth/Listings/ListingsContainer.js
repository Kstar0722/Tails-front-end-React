import AllListings from './AllListings'
import {getAllListings} from 'actions/listing'

const mapDispatchToProps = (dispatch) => ({
     getAllListings: filter => dispatch(getAllListings(filter)),
    dispatch: dispatch
})

const mapStateToProps = (state) => ({
  listings: state.listings,
  pagination: state.pagination
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AllListings)
