import './AllListings.scss'
import ListingBanner from 'assets/listings-banner.jpg'

class AllListings extends React.Component {
	constructor(props) {
		super(props)
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
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row list-item">
                                    <div className="col-md-12">
                                        <div className="row top-part">
                                            <div className="col-md-2 image-holder text-center">image goes here</div>
                                            <div className="col-md-10 right-content-holder">
                                                <div className="row">
                                                    <div className="col-md-7"><h3>3 Cows to Kansas</h3></div>
                                                    <div className="col-md-5">
                                                        <div className="age-of-post pull-right"><span className="age">20</span> min</div>
                                                        <div className="bid-count pull-right"><span className="count">13</span> bids</div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 top-destination">
                                                        <span className="start">Rochester, NY</span> -> <span className="finish">Kansas City, KA</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 listing-excerpt">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row bottom-details">
                                            <div className="col-md-4 animal-tags bottom-detail">2 Cows, 1 Dog</div>
                                            <div className="col-md-3 budget-details bottom-detail">$0-$500</div>
                                            <div className="col-md-5 date-details bottom-detail text-right">Departing 8/31 - Arriving 9/31</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">2</div>
                        </div>
                    </div>
                </section>
            </main>
		)
	}
}

export default AllListings
