import './ListingItem.scss'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router';
class ListingItem extends React.Component {
	constructor(props) {
		super(props)
	}
  renderBtnByStatus(){
    switch (this.props.status){
      case "open": return <td className="bold accepted">Accepting Bids</td>
      case "offre_sent": return <td className="bold accepted">Offer Sent</td>
      case "pending_peyment": return <td className="bold accepted">Pending Payment</td>
      case "pending_shipment": return <td className="bold accepted">Pending Shipment</td>
      case "complete": return <td className="bold accepted">Complete</td>
        break
      default: return <td className="bold ">None</td>
    }
  }
	render() {
    const {id} = this.props
		return (
			<tr key={this.props.id}>
				<td>{this.props.title}</td>
				<td className="bold"><NumberFormat value={this.props.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
				<td className="bold">{this.props.dateCreated}</td>
        {this.renderBtnByStatus()}
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