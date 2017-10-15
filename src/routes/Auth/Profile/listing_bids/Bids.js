import './Bids.scss'
import moment from 'moment'
import BidItem from './components/BidItem'

class Bids extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		console.log('componentWillMount', this.props.user.id)
		if(this.props.user.id){
			this.props.getListingBids(this.props.user.id)
		}
	}

	componentWillReceiveProps(nextProps){
		console.log('nextProps', nextProps)
		if(nextProps.user.id != this.props.user.id){
			this.props.getListingBids(nextProps.user.id)
		}
	}

	getBids() {
		const bids = []
		
		this.props.bids.data.map((bid, i) => {
			if(bid.listing != undefined){
				bids.push(this.renderBids(
					bid.id,
					bid.listing.title,
					moment(new Date(bid.created_at)).format('MM/DD/YYYY'),
					bid.status
				))
			}
			
		})
		return bids
	}

	renderBids(id, title, date, status) {
		return (
			<BidItem
				key={id}
				id={id}
				title={title}
				dateBidded={date}
				status={status}
			/>
		)
	}

	render() {
		console.log('bids', this.props.bids)
		return (
			<table className="bids table table-bordered table-striped">
				<tbody>
					<tr>
						<th>Title</th>
						<th>Date Bidded</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
					{this.props.bids.map(bid => <BidItem
						key={bid.id}
						id={bid.id}
						title={bid.listing.title}
						dateBidded={moment(new Date(bid.created_at)).format('MM/DD/YYYY')}
						status={bid.status}
						bid={bid}
						/>
					)}
				</tbody>
			</table>
		)
	}
}

export default Bids
