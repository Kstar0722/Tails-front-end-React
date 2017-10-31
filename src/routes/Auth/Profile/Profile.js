import './Profile.scss'
import { connect } from 'react-redux'
import StockBanner from 'assets/stock-banner.png'
import { Link } from 'react-router';
import Avatar from 'components/Avatar'
import ListingsContainer from './listings/ListingsContainer'
import BidsContainer from './bids/BidsContainer'
import ListingBidsContainer from './listing_bids/BidsContainer'
import { browserHistory } from 'react-router'
import { getListings } from 'actions/listing'
class Profile extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			cover_photo: StockBanner,
			scale: 1
		}
		if(this.props.profile.avatar != undefined)
		{
			localStorage.setItem("user_img", this.props.profile.avatar)
			localStorage.setItem("first_name", this.props.profile.first_name)
			localStorage.setItem("last_name", this.props.profile.last_name)
			localStorage.setItem("zoom_amount", this.props.profile.zoom_amount)
		}
	}
	toEdit(){
		browserHistory.push('/profile/edit')
	}
	toStepOne(){
		browserHistory.push('/step-one')
	}
	componentWillMount() {
		this.props.getListings()
        if(this.props.profile.cover_photo)
            this.setState({
                cover_photo: this.props.profile.cover_photo
		})
	}
	componentWillReceiveProps(nextProps){
        if(nextProps.profile.cover_photo != this.props.profile.cover_photo){
            if (nextProps.profile.cover_photo){
                this.setState({cover_photo: nextProps.profile.cover_photo})
            }
		}
		if(nextProps.profile.scale != this.props.profile.scale){
            if (nextProps.profile.scale){
                this.setState({scale: nextProps.profile.scale})
            }
        }
    }

	render() {
		const { listings } = this.props
		const { bids } = this.props
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
											<button onClick={this.toStepOne} className="btn btn-create-listing block-btn blue">Create Listing</button>	
										</div>
									</div>									
									: <div className="row not-listings justify-content-center align-self-center">
										<h1>You have no listings yet...</h1>
										<button onClick={this.toStepOne} className="btn btn-create-listing block-btn blue">Create Listing</button>
									</div>
								}													
							</div>
							<div className="block-section my-bids">
								<p className="title">My Bids</p>
              {
                bids.length > 0
                  ?
								<div className="table-responsive">
									<BidsContainer />
								</div>
                  : <div className="row not-listings justify-content-center align-self-center">
										<h1>You have no bids yet...</h1>
									</div>
              }
							</div>

							{/*<div className="block-section my-bids">*/}
								{/*<p className="title">Bids to my listings</p>*/}
								{/*<div className="table-responsive">*/}
									{/*{<ListingBidsContainer />}*/}
								{/*</div>*/}
							{/*</div>*/}
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
	  listings: state.listing.data ? state.listing.data.data ? state.listing : {data: []} : {data: []},
  	bids : state.bid.data ? state.bid.data.data ? state.bid.data : { data: [] } : { data: [] },
})

const mapDispatchToProps = dispatch => ({
    getListings: () => dispatch(getListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)