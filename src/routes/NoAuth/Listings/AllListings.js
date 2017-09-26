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
	}

	componentWillMount() {
		this.props.getAllListings()
	}

	getAllListings() {
		const listings = []
		console.log(this.props.listings)
		this.props.listings.data.map((listing, i) => {
			listings.push(this.renderAllListings(
				listing.title
			))
		})
		return bids
	}

	renderAllListings(title) {
		return (
			<ListItem
				title={title}
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
								<ListItem />
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
