import './Profile.scss'

import StockBanner from 'assets/stock-banner.png'

import Avatar from 'components/Avatar'
import ListingsContainer from './listings/ListingsContainer'
import BidsContainer from './bids/BidsContainer'

class Profile extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="profile">
				<div className="banner-wrap" style={{backgroundImage: 'url('+StockBanner+')'}}>
					<div className="container">
						<div className="banner-content d-flex flex-row flex-wrap justify-content-between align-items-baseline">
							
							<Avatar type="large"/>

							<button className="edit-profile block-btn orange">Edit Profile</button>

						</div>
					</div>
				</div>
				<div className="container">
					<div className="page-content d-flex flex-column align-items-start justify-content-center">
						<div className="block-section my-listings">
							<p className="title">My Listings</p>
							<div className="table-wrap">
								
								<ListingsContainer />

							</div>
						</div>
						<div className="block-section my-bids">
							<p className="title">My Bids</p>
							<div className="table-wrap">
								
								<BidsContainer />

							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Profile