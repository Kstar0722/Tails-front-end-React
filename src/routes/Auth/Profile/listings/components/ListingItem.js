import './ListingItem.scss'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router';
class ListingItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
    const {id} = this.props
		return (
			<tr key={this.props.id}>
				<td>{this.props.title}</td>
				<td className="bold"><NumberFormat value={this.props.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
				<td className="bold">{this.props.dateCreated}</td>
				<td className="actions">
					<Link  className='link-color-eye' to={`listing-details/` + id}><i className="fa fa-eye  " aria-hidden="true" ></i></Link>
					<i className="fa fa-pencil" aria-hidden="true" onClick={this.props.editStapActions.editStep}></i>
					<i className="fa fa-trash-o" aria-hidden="true" onClick={this.props.optionActions.delete}></i>
				</td>
			</tr>
		)
	}
}

export default ListingItem