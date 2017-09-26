import './AllListings.scss'
import ListingBanner from 'assets/listings-banner.jpg'
import CowImage from 'assets/cow.jpg'
import DogImage from 'assets/dog.jpg'
import ListItem from './ListItem/ListItem'
import ListingSidebar from './Sidebar/ListingSidebar'


class AllListings extends React.Component {
	constructor(props) {
		super(props)
	}

	getAllListings() {
		const listings = []
		this.props.listings.data.map((listing, i) => {
			listings.push(this.renderAllListings(
				listing.id,
				listing.title,
				listing.budget,
				moment(new Date(listing.created_at)).format('MM/DD/YYYY')
			));
		})

		return listings
        console.log('test')
	}

	renderAllListings(id, title, budget, date, optionActions, showActions, editStapActions) {
		return (
			<ListItem
				key={id}
				id={id}
				title={title}
				budget={budget}
				dateCreated={date}
				optionActions={optionActions}
				showActions = {showActions}
				editStapActions = {editStapActions}
			/>
		)
	}

	render() {
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
								<getAllListings />
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
