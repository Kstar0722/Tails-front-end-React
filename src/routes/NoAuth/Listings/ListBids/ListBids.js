import './ListBids.scss'
import { Component } from 'react'
import { getBidsByListingID } from '../../../../actions/bids'
import { connect } from 'react-redux'
import BidItem from '../BidItem/BidItem'

class ListBids extends Component {
  constructor(props){
    super(props)

    this.state = {
      listing_id: 0
    }
  }

  componentDidMount(){
    if (Object.keys(this.props.listing).length > 0 && this.state.listing_id != this.props.listing.id) {
      this.props.getBidsByListingID({
        filter: {
          listing_id: this.props.listing.id
        },
        include: ['user']
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.listing).length > 0 && this.state.listing_id != nextProps.listing.id) {
      this.setState({ listing_id: nextProps.listing.id })
      this.props.getBidsByListingID({
        filter: {
          listing_id: nextProps.listing.id
        },
        include: ['user']
      })
    }
  }

  render() {
    const { bids } = this.props

    return(
      <section className="list-bids">

        <h1>Current bids</h1>

        { (bids.length > 0) ? bids.map(bid =>

          <BidItem
            user_id={ bid.user.id }
            bid_id={ bid.id }
            listing_id={ this.props.listing.id }
            avatar={ bid.user.avatar }
            title={ bid.user.first_name + ' ' + bid.user.last_name }
            description={ bid.description }
            cost={ bid.cost }
            status={ bid.status }
          />

        ) : '' }

      </section>
    )
  }
}

const mapStateToProps = state => ({
  listing: state.listing.data,
  bids: state.bid.data
})

export default connect(mapStateToProps, { getBidsByListingID })(ListBids)
