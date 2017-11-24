import './ListingItem.scss'

class ListingItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<tr>
				<td>{this.props.title}</td>
				<td className="bold">{this.props.dateCreated}</td>
				<td className="bold">{this.props.totalBids}</td>
				<td className="complete bold">{this.props.status}</td>
				<td className="actions">
					<i className="fa fa-eye" aria-hidden="true"></i>
					<i className="fa fa-pencil" aria-hidden="true"></i>
					<i className="fa fa-trash-o" aria-hidden="true"></i>
				</td>
			</tr>
		)
	}
}

export default ListingItem