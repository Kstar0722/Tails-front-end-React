import './Bids.scss'
import moment from 'moment'
import BidItem from './components/BidItem'

class Bids extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		console.log('get listing')
		this.props.getBids()
	}
	// Return the bids
	getBids() {
		// for now, I'm just going to loop through and return 3
		const bids = []

		this.props.bids.data.map((bid, i) => {
			bids.push(this.renderBids(bid.listing.title, moment(new Date(bid.created_at)).format('MM/DD/YYYY'), (this.props.listings[bid.listing_id]) ? this.props.listings[bid.listing_id].bids_count : '-', bid.status))
		})

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
