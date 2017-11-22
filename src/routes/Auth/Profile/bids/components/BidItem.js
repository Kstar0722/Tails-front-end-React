import './BidItem.scss'

class BidItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<tr>
				<td>{this.props.title}</td>
				<td className="bold">{this.props.dateBidded}</td>
				<td className="bold">{this.props.totalBids}</td>
				<td className="in-progress bold">{this.props.status}</td>
				<td className="actions">
					<i className="fa fa-eye" aria-hidden="true"></i>
					<i className="fa fa-pencil" aria-hidden="true"></i>
					<i className="fa fa-trash-o" aria-hidden="true"></i>
				</td>
			</tr>
		)
	}
}

export default BidItem