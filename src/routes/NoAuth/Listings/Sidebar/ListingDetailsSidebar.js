import './ListingSidebar.scss'
import './ListingDetailsSidebar.scss'
import AddBidModal from '../Modals/AddBidModal'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../../../actions/user'
import { getCompletedShipping } from '../../../../actions/listing'
import moment from 'moment'

class ListingDetailsSidebar extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getUser()
    this.props.getCompletedShipping()
  }

  render() {

    return(
      <div id="filters" className="">
        <div className="filters-toggle">LISTING DETAILS</div>
        <div className="filters-body">
          <div className="filter">
            <label className="filter-label"><b>About this Client</b></label>
          </div>
          <div className="filter">
            <label className="filter-label">{ this.props.completedShipping } Completed shipping</label>
          </div>
          <div className="filter">
            <label className="filter-label">Member Since: { (this.props.user) ? moment(this.props.user.created_at).format('LL') : '' }</label>
          </div>
          <div className="filter">
            <label className="filter-label"><b>About this Listing</b></label>
          </div>
          <div className="filter">
            <label className="filter-label">Posted: { (this.props.listing) ? moment(this.props.listing.created_at).startOf('day').fromNow() : '' }</label>
          </div>
          <div className="filter">
            <label className="filter-label">Bids: { Object.keys(this.props.bid.data).length }</label>
          </div>
          <div className="filter">
            <AddBidModal
              id={this.props.id}
              title={this.props.title}
              budget={this.props.budget}
            />
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  user: state.user.data,
  listing: state.listing.data,
  bid: state.bid,
  completedShipping: state.listing.completedShipping
})

export default connect(mapStateToProps, { getUser, getCompletedShipping } )(ListingDetailsSidebar)
