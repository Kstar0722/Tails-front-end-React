import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router'
import './Listings.scss'
// import { getListings } from 'actions/listing'
class ReviewItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = this.props.location.state;
    }
    
    render() {
		return (
			 <div className="create-list">
                <div className="container">
                    
                    <div className="step-view">
                        
                        <Link className="close" to="/Profile">x</Link>
                        <div className="comment">
                           {this.state.title}
                        </div>
                        <div className="main-content">
                            <div className="form-group">
                                <label>Budget</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="delivery_address"
                                    value={this.state.budget}
                                  />
                            </div>
                            <div className="form-group">
                                <label>Pick up Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="pick_up_address"
                                    value={this.state.pick_up_address}
                                    />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up State</label>
                                        <select
                                            className="form-control"
                                            name="pick_up_state"
                                            value={this.state.pick_up_state}>
                                            <option value="-1">-- Please Select --</option>
                                            <option value="cal">California</option>
                                            <option value="ny">New York</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pick_up_city"
                                            value={this.state.pick_up_city}
                                            />
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pick_up_zip"
                                            value={this.state.pick_up_zip}
                                           />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Destination Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="delivery_address"
                                    value={this.state.delivery_address}
                                  />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <label>Destination State</label>
                                        <select
                                            className="form-control"
                                            name="delivery_state"
                                            value={this.state.delivery_state}
                                            >
                                            <option value="-1">-- Please Select --</option>
                                            <option value="cal">California</option>
                                            <option value="ny">New York</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Destination City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="delivery_city"
                                            value={this.state.delivery_city}
                                           />
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Destination Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="delivery_zip"
                                            value={this.state.delivery_zip}
                                           />
                                    </div>
                                </div>
                            </div>
                             <div className="form-group">
                                <label>Summary of Listing</label>
                                <textarea
                                    
                                    className="form-control"
                                    name="delivery_address"
                                    value={this.state.other_notes}
                                />
                            </div>
                        </div>
                       </div >
                </div>
            </div>
		)
	}
}

export default ReviewItem