import './Listings.scss'

import ListingItem from './components/ListingItem'

class Listings extends React.Component {
	constructor(props) {
		super(props)
	}

	// Return the Listings
	getListings() {
		// for now, I'm just going to loop through and return 3
		const listings = []

		for (let i=0; i<3; i++) {
			listings[i] = this.renderListings("Title", "Date", "Listing " + i, "Status")
		}

		return(
			listings
		)
	}

	// This will be called for each listing based on how many there are
	renderListings(title, date, bid, status) {
		return (
			<ListingItem
				title={title}
				dateCreated={date}
				totalBids={bid}
				status={status}
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