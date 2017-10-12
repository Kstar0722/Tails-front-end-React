import './ListingSidebar.scss'
import './ListingDetailsSidebar.scss'
import AddBidModal from '../Modals/AddBidModal'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../../../actions/user'
import moment from 'moment'

class ListingDetailsSidebar extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getUser()
  }

  render() {

    return(
      <div id="filters" className="">
        <div className="filters-toggle">LISTING DETAILS</div>
        <div className="filters-body">
          <div className="filter">
            <label className="filter-label"><b>About this Client</b></label>
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
          </div>
          <div className="filter">
            <label className="filter-label">0 Completed shipping</label>
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
          </div>
          <div className="filter">
            <label className="filter-label">Member Since: { (this.props.user) ? moment(this.props.user.created_at).format('LL') : '' }</label>
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
          </div>
          <div className="filter">
            <label className="filter-label"><b>About this Listing</b></label>
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
          </div>
          <div className="filter">
            <label className="filter-label">Posted: { (this.props.listing) ? moment(this.props.listing.created_at).startOf('day').fromNow() : '' }</label>
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
          </div>
          <div className="filter">
            <label className="filter-label">Bids: 0</label>
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
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
  listing: state.listing.data
})

export default connect(mapStateToProps, { getUser } )(ListingDetailsSidebar)
