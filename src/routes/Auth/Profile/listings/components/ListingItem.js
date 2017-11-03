import './ListingItem.scss'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router';
class ListingItem extends React.Component {
	constructor(props) {
		super(props);
		this.shipped = this.shipped.bind(this);
	}
  renderBtnByStatus(){
    switch (this.props.status){
      case "open": return <td className="bold accepted">Accepting Bids</td>
      case "offer_sent": return <td className="bold accepted">Offer Sent</td>
      case "pending_peyment": return <td className="bold accepted">Pending Payment</td>
      case "pending_shipment": return <td className="bold accepted">Pending Shipment</td>
      case "complete": return <td className="bold accepted">Complete</td>
        break
      default: return <td className="bold ">None</td>
    }
	}
	
	shipped(){
		console.log(this.props)
		let {bids} = this.props;
		
		let bid_id = null;

		bids.map(bid => {
			let charged = bid.details ? bid.details.charged : null;
			let transfered = bid.details ? bid.details.transfered : null;
			let approved = bid.details ? bid.details.approved_by_bidder : null;
			if (bid.status == "accepted" && approved && charged && !transfered ){
				bid_id = bid.id;
			}
		})

		console.log('bid_id', bid_id);

		if (bid_id){
			this.props.Shipped(bid_id);
		}

		// this.props.Shipped(id);
	}

	render() {
    const {id, status} = this.props
		return (
			<tr key={this.props.id}>
				<td>{this.props.title}</td>
				<td className="bold"><NumberFormat value={this.props.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
				<td className="bold">{this.props.dateCreated}</td>
        {this.renderBtnByStatus()}
				<td className="actions">
					<Link  className='link-color-eye' to={`listing-details/` + id}><i className="fa fa-eye" aria-hidden="true" ></i></Link>
					<i className="fa fa-pencil" aria-hidden="true" onClick={this.props.editStapActions.editStep}></i>
					<i className="fa fa-trash-o" aria-hidden="true" onClick={this.props.optionActions.delete}></i>
					{status == 'pending_shipment' ? <i className="fa fa-check" aria-hidden="true" onClick={this.shipped}></i> : <i style={{width: '16px'}}></i> }
				</td>
			</tr>
		)
	}
}

export default ListingItem