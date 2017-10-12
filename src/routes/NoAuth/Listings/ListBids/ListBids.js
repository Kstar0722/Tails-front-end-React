import './ListBids.scss'
import { Component } from 'react'
import { getBidsByListingID } from '../../../../actions/bids'
import { connect } from 'react-redux'
import BidItem from '../BidItem/BidItem'

class ListBids extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getBidsByListingID({
      filter:{
        listing_id: 2
      }
    })
  }

  render() {
    const { bids } = this.props

    return(
      <div>

        <h1>Current bids</h1>

        {(bids.length > 0) ? bids.map(bid =>

          <BidItem
            title={this.props.title}
            description={bid.description}
            cost={bid.cost}
          />

        ) : ''}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  bids: state.bid.data
})

export default connect(mapStateToProps, { getBidsByListingID })(ListBids)
