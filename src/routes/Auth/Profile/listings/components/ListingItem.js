import './ListingItem.scss'

class ListingItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<tr key={this.props.id}>
				<td>{this.props.title}</td>
				<td className="bold">{this.props.budget}</td>
				<td className="bold">{this.props.dateCreated}</td>
				<td className="actions">
					
					<i className="fa fa-eye" aria-hidden="true" onClick={this.props.showActions.review}></i>
					<i className="fa fa-pencil" aria-hidden="true" onClick={this.props.editStapActions.editStep}></i>
					<i className="fa fa-trash-o" aria-hidden="true" onClick={this.props.optionActions.delete}></i>
				</td>
			</tr>
		)
	}
}

export default ListingItem