import './BidItem.scss'
import { Link } from 'react-router'

class BidItem extends React.Component {
	constructor(props) {
		super(props)
	}

  renderBtnByStatus(){
    switch (this.props.status){
      case "accepted": return <td className="complete bold">Accepted</td>
      case "rejected": return <td className="failed bold ">Rejected</td>
      case null : return <td className="in-progress bold">Pending</td>
        break
      default: return <td className="bold ">None</td>
    }
  }
	render() {
		const { id, title, dateBidded, status, listing_id } = this.props
		return (
			<tr key={id}>
				<td>{title}</td>
				<td className="bold">{dateBidded}</td>
        {this.renderBtnByStatus()}
				<td className="actions">
					<Link to={"/listing-details/" + listing_id} className="link-color-eye"><i className="fa fa-eye" aria-hidden="true"></i></Link>
					<i className="fa fa-pencil" aria-hidden="true"></i>
				</td>
			</tr>
		)
	}
}

export default BidItem
