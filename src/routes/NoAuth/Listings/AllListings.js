import './AllListings.scss'
import moment from 'moment'
import ListingBanner from 'assets/listings-banner.jpg'
import CowImage from 'assets/cow.jpg'
import DogImage from 'assets/dog.jpg'
import ListItem from './ListItem/ListItem'
import ListingSidebar from './Sidebar/ListingSidebar'


class AllListings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			getAllListings: []
		}
	}

	componentWillMount() {
		this.props.getAllListings()
	}

	getAllListings() {
		if (this.props.listings.hasOwnProperty('data')) {
			const listings = []
			
			this.props.listings.data.map((listing, i) => {
				listings.push(this.renderAllListings(
					listing.title,
					listing.created_at,
					listing.pick_up_city,
					listing.pick_up_state,
					listing.desired_pick_up_date,
					listing.delivery_city,
					listing.delivery_state,
					listing.desired_delivery_date,
					listing.budget,
					listing.other_notes,
					listing.bids_count
				))
			})

			return listings
		}
	}

	renderAllListings(title, created_at, pick_up_city, pick_up_state, desired_pick_up_date, delivery_city, delivery_state, desired_delivery_date, budget, other_notes, bids_count) {
		return (
			<ListItem
				title={title}
				created_at={created_at}
				pick_up_city={pick_up_city}
				pick_up_state={pick_up_state}
				desired_pick_up_date={desired_pick_up_date}
				delivery_city={delivery_city}
				delivery_state={delivery_state}
				desired_delivery_date = {desired_delivery_date}
				budget={budget}
				other_notes={other_notes}
				bids_count={bids_count}
			/>
		)
	}

	render() {
		const { listings } = this.props
		return (
            <main>
                <section id="main-banner">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Current <span>Listings</span></h1>
                                <p>Check back often, our users are always adding new listings</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="main-content">
                    <div className="container">
                        <div className="row list-items">
                            <div className="col-md-8">
								{this.getAllListings()}
								{/* <ListItem /> */}
                            </div>

                            <div className="col-md-4 sidebar">
								<ListingSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
		)
	}
}

export default AllListings
