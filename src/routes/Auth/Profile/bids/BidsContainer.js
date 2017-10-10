import Bids from './Bids'
import {getBids} from 'actions/bids'

const mapDispatchToProps = (dispatch) => ({
     getBids: () => dispatch(getBids()),
})

const mapStateToProps = (state) => ({
    bids : state.bid.data,
    listings: state.listing.data
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Bids)
