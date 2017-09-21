
import './Listings.scss'
import moment from 'moment'
import { browserHistory } from 'react-router'
import ListingItem from './components/ListingItem'
import Modal from 'react-modal'

// import ReviewItem from "./ReviewItem"
// import StepThree 

let deletedID;

class Listings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			listingDatas: [],
			deleteModal: false,
		}
	}

	componentWillMount() {
		const { listings } = this.props
	}

	getListings() {		
		const listings = []
		this.props.listings.data.map((listing, i) => {
			listings.push(this.renderListings(
				listing.id,
				listing.title,
				listing.budget,
				moment(new Date(listing.created_at)).format('MM/DD/YYYY'),
				{delete: this.delete.bind(this, listing.id)},
				{review: this.review.bind(this, listing.id)},
				{editStep: this.editStep.bind(this, listing.id)}
			));
		})

		return listings
	}
	getIndex(value, arr, prop) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i][prop] === value) {
				return i;
			}
		}
		return -1;
	}

	editStep(id){
		var index = this.getIndex(id, this.props.listings.data, "id")
		var val = this.props.listings.data[index]

		browserHistory.push({
			pathname: '/step-three',
			state: val
		});
	}

	review(id)
	{
		var index = this.getIndex(id, this.props.listings.data, "id")
		var val = this.props.listings.data[index]
		browserHistory.push({
			pathname: '/profile/item-review',
			state: val
		});
	}
	delete(id){
		this.setState({
			deleteModal: true
		})
		deletedID = id
	}
	deleteItemFlagFun(flag)
	{
		this.setState({
			deleteModal:false,
		})
		if(flag)
		{
			this.props.deleteListing(deletedID);
		}
	}

	// This will be called for each listing based on how many there are
	renderListings(id, title, budget, date, optionActions, showActions, editStapActions) {
		return (
			<ListingItem
				key={id}
				id={id}
				title={title}
				budget={budget}
				dateCreated={date}
				optionActions={optionActions}
				showActions = {showActions}
				editStapActions = {editStapActions}
			/>
		)
	}
	render() {
		return (
			this.state.deleteModal?
			<Modal isOpen={this.state.deleteModal}>
				<div id="modal">
					<div id ="heading-modal">
						<button type="button" onClick={this.deleteItemFlagFun.bind(this, false)} className="close">X</button>
						<p id="headtitle">Tails Transport</p>
						
					</div>	
					<div id="body-modal">
						<p id="body-text">Are you sure you want to delete this item?</p>
					</div>
					<div id="btn-modal">
						<button id="btn-ok" onClick={this.deleteItemFlagFun.bind(this, true)}  >OK</button>
						<button id="btn-cancel" onClick={this.deleteItemFlagFun.bind(this, false)} >Cancel</button>
					</div>
				</div>
				
			</Modal>:
			
			<table className="listings table table-bordered table-striped">
				<thead>
					<tr>
						<th>Title</th>
						<th>Budget</th>
						<th>Date</th>
						<th>Action</th>
					</tr>					
				</thead>
				<tbody>
					{this.getListings()}
				</tbody>
			</table>
			
		)
	}
}
export default Listings