import './Bids.scss'
import moment from 'moment'
import BidItem from './components/BidItem'

class Bids extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.getBids()
	}

	getBids() {
		const bids = []
		console.log(this.props.bids)
		this.props.bids.data.map((bid, i) => {
			bids.push(this.renderBids(
				bid.id,
				bid.listing.title,
				moment(new Date(bid.created_at)).format('MM/DD/YYYY'),
				bid.status
			))
		})
		return bids
	}

	renderBids(id, title, date, status) {
		return (
			<BidItem
				id={id}
				title={title}
				dateBidded={date}
				status={status}
			/>
		)
	}

	render() {
		return (
			<table className="bids table table-bordered table-striped">
				<tbody>
					<tr>
						<th>Title</th>
						<th>Date Bidded</th>
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
