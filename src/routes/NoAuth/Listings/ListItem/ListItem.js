import './ListItem.scss'
import CowImage from 'assets/cow.jpg'
import DogImage from 'assets/dog.jpg'
import NumberFormat from 'react-number-format'
import Timestamp from'react-timestamp';
import moment from 'moment';
import AddBidModal from '../Modals/AddBidModal';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getListingAnimals } from '../../../../actions/listing_animals'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
		  images: []
    }
	}

	componentDidMount() {
	  this.props.getListingAnimals({
      filter: {
        listing_id: 1
      },
      include: ['images']
    })
  }

  render() {

    const {id, title, created_at, pick_up_city, pick_up_state, desired_pick_up_date, delivery_city, delivery_state, desired_delivery_date, budget, other_notes, bids_count, listing_details} = this.props

    return (
      <div className="list-item">
          <div className="top-part">

            <div className="image-holder text-center">

              <img src={ (Object.keys(this.props.listingAnimals)).length > 0 ? this.props.listingAnimals['0'].images['0'].url : '' } className="main-image" />

              <div className="thumbs">
                <a href="#"><img src={CowImage} alt=""/></a>
                <a href="#"><img src={CowImage} alt=""/></a>
                <a href="#"><img src={CowImage} alt=""/></a>
              </div>

            </div>

              <div className="right-content-holder">
                  <div className="row">
                      <div className="col-lg-7"><h3>{title}</h3></div>
                      <div className="col-lg-5 item-meta">
                          <div className="age-of-post pull-right"><span className="age">
                                  <Timestamp time={created_at} precision={1} />
                              </span></div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-md-12 top-destination">
                        <span className="start">{pick_up_city}, {pick_up_state}</span> <i className="btl bt-long-arrow-right"></i> <span className="finish">{delivery_city}, {delivery_state}</span>

                        { (listing_details) ?

                          <Link to={`listing-details/` + id}>
                            <div className="bid-count pull-right" onClick={this.toggle}><span className="count">{bids_count}</span> bids</div>
                          </Link>

                          : <div className="bid-count pull-right" onClick={this.toggle}><span className="count">{Object.keys(this.props.bid.data).length}</span> bids</div>
                        }

                      </div>
                  </div>

                  <div className="row">
                      <div className="col-md-12 listing-excerpt">
                          <p>{other_notes}</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bottom-details">
              <div className="animal-tags bottom-detail">2 Cows, 1 Dog</div>
              <div className="budget-details bottom-detail">
                  <NumberFormat value={budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </div>
              <div className="date-details bottom-detail">Departing {moment(desired_pick_up_date).month()+1} / {moment(desired_pick_up_date).date()} - Arriving {moment(desired_delivery_date).month()+1} / {moment(desired_delivery_date).date()}</div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bid: state.bid,
  listingAnimals: state.listingAnimals.listing_details
})

export default connect(mapStateToProps, { getListingAnimals })(ListItem)
