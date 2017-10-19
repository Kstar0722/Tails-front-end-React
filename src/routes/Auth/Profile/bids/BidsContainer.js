import Bids from './Bids'
import {getBids} from 'actions/bids'

const mapDispatchToProps = (dispatch) => ({
     getBids: () => dispatch(getBids()),
})

const mapStateToProps = (state) => ({
    bids : state.bid.data ? state.bid.data.data ? state.bid.data : { data: [] } : { data: [] },
    listings: state.listing.data ? state.listing.data.data ? state.listing.data : { data: [] } : { data: [] }
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Bids)
