import './Listings.scss'
import moment from 'moment'

import ListingItem from './components/ListingItem'

class Listings extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			listingDatas: []
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
				{delete: this.delete.bind(this, listing.id)}
			));
		})

		return listings
	}

	delete(id){
		this.props.deleteListing(id)
	}

	// This will be called for each listing based on how many there are
	renderListings(id, title, budget, date, optionActions) {
		return (
			<ListingItem
				id={id}
				title={title}
				budget={budget}
				dateCreated={date}
				optionActions={optionActions}
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