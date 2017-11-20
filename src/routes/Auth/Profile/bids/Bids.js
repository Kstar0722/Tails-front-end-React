import './Bids.scss'

import BidItem from './components/BidItem'

class Bids extends React.Component {
	constructor(props) {
		super(props)
	}

	// Return the bids
	getBids() {
		// for now, I'm just going to loop through and return 3
		const bids = []

		for (let i=0; i<3; i++) {
			bids[i] = this.renderBids("Title", "Date", "Bid " + i, "Status")
		}

		return(
			bids
		)
	}

	// This will be called for each bid based on how many there are
	renderBids(title, date, bid, status) {
		return (
			<BidItem
				title={title}
				dateBidded={date}
				totalBids={bid}
				status={status}
			/>
		)
	}

	render() {
		return (
			<table className="bids">
				<tbody>
					<tr>
						<th>Title</th>
						<th>Date Bidded</th>
						<th>Total Bids</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
					{this.getBids()}
				</tbody>
			</table>
		)
	}
}

export default Bids