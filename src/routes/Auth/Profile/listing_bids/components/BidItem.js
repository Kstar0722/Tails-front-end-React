import './BidItem.scss'

import Payment from './Payment';
import {Shipped} from 'actions/listing_bids'
import { connect } from 'react-redux'

class BidItem extends React.Component {
	constructor(props) {
		super(props)
	}

	shipped(id){
		this.props.Shipped(id);
	}

	render() {
		const { id, title, dateBidded, status, bid } = this.props

		let charged = bid.details ? bid.details.charged : null;
		let transfered = bid.details ? bid.details.transfered : null;
		return (
			<tr key={id}>
				<td>{title}</td>
				<td className="bold">{dateBidded}</td>
				<td className="in-progress bold">{status}</td>
				<td className="actions">
					{charged ? transfered ? 'Shipped' : <button type="button" className="btn btn-danger" onClick={this.shipped.bind(this, bid.id)}>Shipped</button> : <Payment bid={{id}}/>}
				</td>
			</tr>
		)
	}
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
	Shipped: (id) => dispatch(Shipped(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BidItem)
