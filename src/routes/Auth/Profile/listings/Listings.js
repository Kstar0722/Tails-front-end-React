import './Listings.scss'
import moment from 'moment'

import ListingItem from './components/ListingItem'

class Listings extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		console.log('get listing')
		this.props.getListings()
	}

	// Return the Listings
	getListings() {
		// for now, I'm just going to loop through and return 3
		const listings = []

		this.props.listings.data.map((listing, i) => {
			listings.push(this.renderListings(listing.title, moment(new Date(listing.created_at)).format('L'), "Listing " + i, listing.status, {delete: this.delete.bind(this, listing.id)}));
		})

		return(
			listings
		)
	}

	delete(id){
		this.props.deleteListing(id)
	}

	// This will be called for each listing based on how many there are
	renderListings(title, date, bid, status, optionActions) {
		return (
			<ListingItem
				title={title}
				dateCreated={date}
				totalBids={bid}
				status={status}
				optionActions={optionActions}
			/>
		)
	}


	render() {
		return (
			<table className="listings">
				<tbody>
					<tr>
						<th>Title</th>
						<th>Date Created</th>
						<th>Total Bids</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
					{this.getListings()}
				</tbody>
			</table>
		)
	}
}
export default Listings