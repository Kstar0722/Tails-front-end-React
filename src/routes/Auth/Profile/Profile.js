import './Profile.scss'
import { connect } from 'react-redux'
import StockBanner from 'assets/stock-banner.png'
import { Link } from 'react-router';
import Avatar from 'components/Avatar'
import ListingsContainer from './listings/ListingsContainer'
import BidsContainer from './bids/BidsContainer'
import { browserHistory } from 'react-router'

class Profile extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			cover_photo: StockBanner
		}
	}

	toEdit(){
		browserHistory.push('/profile/edit')
	}

	componentWillMount() {
        if(this.props.profile.cover_photo)
            this.setState({
                cover_photo: this.props.profile.cover_photo
            })
	}

	render() {
		console.log(this.props.listings)
		return (
			<section id="profile">
				<div className="banner-wrap" style={{backgroundImage: 'url('+ this.state.cover_photo +')'}}>
					<div className="container">
						<div className="banner-content d-flex flex-row flex-wrap justify-content-between align-items-baseline">
							
							<Avatar type="large"/>

							<button onClick={this.toEdit} className="btn edit-profile block-btn blue">Edit Profile</button>

						</div>
					</div>
				</div>
				<div className="container">
					<div className="page-content d-flex flex-column align-items-start justify-content-center">
						<div className="block-section my-listings">
							<p className="title">My Listings</p>
							{
								this.props.listings.length > 0 ? 
								<div className="table-wrap">
									<ListingsContainer />
								</div> : 
								<div className="row not-listings justify-content-center align-self-center">
									<h1>You have no listings yet...</h1>
									<Link className="btn btn-create-listing" to="/step-one">Create Listing</Link>
								</div>
							}
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

Profile = connect(
  state => ({
	profile: state.profile.data,
	listings: state.listing.data
  }),
  {}
)(Profile)

export default Profile