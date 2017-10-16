import './BidItem.scss'

class BidItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { id, title, dateBidded, status } = this.props
		return (
			<tr key={id}>
				<td>{title}</td>
				<td className="bold">{dateBidded}</td>
				<td className="in-progress bold">{status}</td>
				<td className="actions">
					<i className="fa fa-eye" aria-hidden="true"></i>
					<i className="fa fa-pencil" aria-hidden="true"></i>
				</td>
			</tr>
		)
	}
}

export default BidItem
