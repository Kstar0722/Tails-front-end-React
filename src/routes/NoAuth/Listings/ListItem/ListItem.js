import './ListItem.scss'
import CowImage from 'assets/cow.jpg'
import DogImage from 'assets/dog.jpg'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
        const {title, pick_up_city, pick_up_state, delivery_city, delivery_state, budget, other_notes} = this.props
		return (
            <div className="list-item">
                <div className="top-part">
                    <div className="image-holder text-center">
                        <img src={CowImage} className="main-image" />
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
                                <div className="age-of-post pull-right"><span className="age">20</span> min</div>
                                <div className="bid-count pull-right"><span className="count">13</span> bids</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 top-destination">
                                <span className="start">{pick_up_city}, {pick_up_state}</span> <i className="btl bt-long-arrow-right"></i> <span className="finish">{delivery_city}, {delivery_state}</span>
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
                    <div className="budget-details bottom-detail">${budget}</div>
                    <div className="date-details bottom-detail">Departing 8/31 - Arriving 9/31</div>
                </div>
            </div>
		)
	}
}

export default ListItem
