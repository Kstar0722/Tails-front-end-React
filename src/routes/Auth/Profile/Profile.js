import './Profile.scss'
import { connect } from 'react-redux'
import StockBanner from 'assets/stock-banner.png'
import { Link } from 'react-router';
import Avatar from 'components/Avatar'
import ListingsContainer from './listings/ListingsContainer'
import BidsContainer from './bids/BidsContainer'
import { browserHistory } from 'react-router'
import { getListings } from 'actions/listing'
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
		this.props.getListings()
        if(this.props.profile.cover_photo)
            this.setState({
                cover_photo: this.props.profile.cover_photo
            })
	}
	
	render() {
		const { listings } = this.props
		
		if(listings.loaded) {
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
									listings.data.data.length > 0 
									? <div>
										<div className="table-responsive">
											<ListingsContainer />
										</div>
										<div className="row not-listings justify-content-center align-self-center">
											<Link className="btn btn-create-listing" to="/step-one">Create Listing</Link>
										</div>
									</div>									
									: <div className="row not-listings justify-content-center align-self-center">
										<h1>You have no listings yet...</h1>
										<Link className="btn btn-create-listing" to="/step-one">Create Listing</Link>
									</div>
								}
								{/*
									<div className="row not-listings justify-content-center align-self-center">
										<Link className="btn btn-create-listing" to="/step-one">Create Listing</Link>
									</div>
								*/}
									
														
							</div>
							<div className="block-section my-bids">
								<p className="title">My Bids</p>
								<div className="table-responsive">
									<BidsContainer />
								</div>
							</div>
						</div>
					</div>
				</section>
			)
		} else {
			return null
		}
		
	}
}

const mapStateToProps = state => ({
    profile: state.profile.data,
	listings: state.listing
})

const mapDispatchToProps = dispatch => ({
    getListings: () => dispatch(getListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)