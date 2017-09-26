import './AllListings.scss'
import ListingBanner from 'assets/listings-banner.jpg'
import CowImage from 'assets/cow.jpg'
import DogImage from 'assets/dog.jpg'


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
                        <div className="row list-items">
                            <div className="col-md-8">
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
                                                <div className="col-lg-7"><h3>3 Cows to Kansas</h3></div>
                                                <div className="col-lg-5 item-meta">
                                                    <div className="age-of-post pull-right"><span className="age">20</span> min</div>
                                                    <div className="bid-count pull-right"><span className="count">13</span> bids</div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 top-destination">
                                                    <span className="start">Rochester, NY</span> <i className="btl bt-long-arrow-right"></i> <span className="finish">Kansas City, KA</span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 listing-excerpt">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bottom-details">
                                        <div className="animal-tags bottom-detail">2 Cows, 1 Dog</div>
                                        <div className="budget-details bottom-detail">$0-$500</div>
                                        <div className="date-details bottom-detail">Departing 8/31 - Arriving 9/31</div>
                                    </div>
                                </div>

                                <div className="list-item">
                                    <div className="top-part">
                                        <div className="image-holder text-center">
                                            <img src={DogImage} className="main-image" />
                                            <div className="thumbs">
                                                <a href="#"><img src={DogImage} alt=""/></a>
                                                <a href="#"><img src={DogImage} alt=""/></a>
                                                <a href="#"><img src={DogImage} alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="right-content-holder">
                                            <div className="row">
                                                <div className="col-lg-7"><h3>3 Cows to Kansas</h3></div>
                                                <div className="col-lg-5 item-meta">
                                                    <div className="age-of-post pull-right"><span className="age">20</span> min</div>
                                                    <div className="bid-count pull-right"><span className="count">13</span> bids</div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 top-destination">
                                                    <span className="start">Rochester, NY</span> <i className="btl bt-long-arrow-right"></i> <span className="finish">Kansas City, KA</span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 listing-excerpt">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bottom-details">
                                        <div className="animal-tags bottom-detail">2 Cows, 1 Dog</div>
                                        <div className="budget-details bottom-detail">$0-$500</div>
                                        <div className="date-details bottom-detail">Departing 8/31 - Arriving 9/31</div>
                                    </div>
                                </div>

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
                                                <div className="col-lg-7"><h3>3 Cows to Kansas</h3></div>
                                                <div className="col-lg-5 item-meta">
                                                    <div className="age-of-post pull-right"><span className="age">20</span> min</div>
                                                    <div className="bid-count pull-right"><span className="count">13</span> bids</div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 top-destination">
                                                    <span className="start">Rochester, NY</span> <i className="btl bt-long-arrow-right"></i> <span className="finish">Kansas City, KA</span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 listing-excerpt">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bottom-details">
                                        <div className="animal-tags bottom-detail">2 Cows, 1 Dog</div>
                                        <div className="budget-details bottom-detail">$0-$500</div>
                                        <div className="date-details bottom-detail">Departing 8/31 - Arriving 9/31</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 sidebar">
                                <div id="filters" className="">
                                    <div className="filters-toggle">Filters</div>
                                    <div className="filters-body">
                                        <div className="filter">
                                            <label className="filter-label">Price</label>

                                            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
                                        </div>
                                        <div className="filter">
                                            <label className="filter-label">Pickup State</label>
                                            <label className="select select-state">
                                                <select>
                                                    <option value="Any State">Any State</option>
                                                    <option value="Idaho">Idaho</option>
                                                    <option value="Idaho">Idaho</option>
                                                    <option value="Idaho">Idaho</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="filter">
                                            <label className="filter-label">Destination State</label>
                                            <label className="select select-state">
                                                <select>
                                                    <option value="Any State">Any State</option>
                                                    <option value="Idaho">Idaho</option>
                                                    <option value="Idaho">Idaho</option>
                                                    <option value="Idaho">Idaho</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="filter">
                                            <label className="filter-label">Number of animals</label>
                                            <label className="select select-number">
                                                <select>
                                                    <option value="Any">Any</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="filter">
                                            <label className="filter-label">Animal Type</label>
                                            <ul className="check-list">
                                                <li><label><input type="checkbox" checked /><span>Dog</span></label></li>
                                                <li><label><input type="checkbox" /><span>Horse</span></label></li>
                                                <li><label><input type="checkbox" checked /><span>Cow</span></label></li>
                                                <li><label><input type="checkbox" /><span>Goat</span></label></li>
                                                <li><label><input type="checkbox" /><span>Cat</span></label></li>
                                                <li><label><input type="checkbox" /><span>Bird</span></label></li>
                                                <li><label><input type="checkbox" /><span>Other</span></label></li>
                                            </ul>
                                        </div>
                                        <div className="filter">
                                            <label className="filter-label">Pickup Dates Range</label>
                                            
                                            <div className="input-group">
                                                <label className="select">
                                                    <select>
                                                        <option value="Any">Any</option>
                                                        <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                                        <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                                        <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                                        <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                                    </select>
                                                </label>
                                                <em>to</em>
                                                <label className="select">
                                                    <select>
                                                        <option value="Any">Any</option>
                                                        <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                                        <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                                        <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                                        <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="filter">
                                            <label className="filter-label">Dropoff Dates Range</label>

                                            <div className="input-group">
                                                <label className="select">
                                                    <select>
                                                        <option value="Any">Any</option>
                                                        <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                                        <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                                        <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                                        <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                                    </select>
                                                </label>
                                                <em>to</em>
                                                <label className="select">
                                                    <select>
                                                        <option value="Any">Any</option>
                                                        <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                                        <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                                        <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                                        <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
		)
	}
}

export default AllListings
