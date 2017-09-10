
import moment from 'moment'
import { browserHistory } from 'react-router'
import ListingItem from './components/ListingItem'
// import ReviewItem from "./ReviewItem"
// import StepThree 

class Listings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			listingDatas: []
		}
		console.log(this.props)
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
		this.props.deleteListing(id);
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