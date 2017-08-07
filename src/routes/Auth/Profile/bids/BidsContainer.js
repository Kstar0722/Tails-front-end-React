import Bids from './Bids'
import {getBids} from 'actions/bids'

const mapDispatchToProps = (dispatch) => ({
     getBids: query => dispatch(getBids(query)),
})

const mapStateToProps = (state) => ({
    bids : state.bid.data,
    listings: state.bid.listings
})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Bids)
