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
import config from '../../../../config'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
		  images: [],
      countBreeds: ''
    }
	}

	componentDidMount() {
	  this.props.getListingAnimals({
      filter: {
        listing_id: this.props.id
      },
      include: ['images']
    })
  }

  componentWillReceiveProps(nextProps){
    this.prepareData(nextProps)
  }

  prepareData(props) {
    if (Object.keys(props.listingAnimals).length > 0) {

      let images = []
      let counts = {}

      props.listingAnimals.forEach(animal => {

        if (config.breeds.indexOf(animal.breed) > -1) {
          if (!counts[animal.breed]){
            counts[animal.breed] = 0;
          }
          counts[animal.breed]++;
        }

        if (animal.images.length) {
          animal.images.forEach(image => {
            images.push(image)
          })
        }
      })

      const countBreeds = Object.keys(counts)
        .map(type => counts[type]+' '+ type + ((counts[type]>1) ? 's' : ''))
        .join(',');

      this.setState({ images, countBreeds })
    }
  }

  render() {

    const {id, title, created_at, pick_up_city, pick_up_state, desired_pick_up_date, delivery_city, delivery_state, desired_delivery_date, budget, other_notes, bids_count, listing_details} = this.props

    return (
      <div className="list-item">
          <div className="top-part">

            <div className="image-holder text-center">

              <img src={ (this.state.images.length) ? this.state.images['0'].url : '' } className="main-image" />

              <div className="thumbs">

                { (this.state.images.length > 1) ? this.state.images.map((image, index) => {

                    if (index < 3) {
                      return <a href="#"><img src={image.url} alt=""/></a>
                    }

                  }

                ) : '' }

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
              <div className="animal-tags bottom-detail">{ this.state.countBreeds }</div>
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
