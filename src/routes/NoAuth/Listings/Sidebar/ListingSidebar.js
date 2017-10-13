import './ListingSidebar.scss'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'assets/DatePicker.scss';
import { connect } from 'react-redux'
import { getAllListings } from '../../../../actions/listing'

class ListingSidebar extends React.Component {
	constructor(props) {
    super(props)
    this.state = ({
      from_drop_off_date: null,
      to_drop_off_date: null,
      from_pick_up_date: null,
      to_pick_up_date: null,
      animals_count: 0,
      pick_up_state: '',
      delivery_state: ''
    })
	}

  onChangePickUpState(event) {
    this.setState({
      pick_up_state: event.target.value
    }, this.filterListings)
  }

  onChangeDeliveryState(event) {
    this.setState({
      delivery_state: event.target.value
    }, this.filterListings)
  }

  onChangeNumberAnimals(event) {
    this.setState({
      animals_count: event.target.value
    }, this.filterListings)
  }

  onChangeFromDrop(date) {
    this.setState({
      from_drop_off_date:date
    }, this.filterListings)
  }

  onChangeToDrop(date) {
    this.setState({
      to_drop_off_date:date
    }, this.filterListings)
  }

  onChangeFromPick(date) {
    this.setState({
      from_pick_up_date: date
    }, this.filterListings)
  }

  onChangeToPick(date){
    this.setState({
      to_pick_up_date: date
    }, this.filterListings)
  }

  filterListings(){
    const filter = {}

    if (this.state.animals_count > 0) {
      filter.animals_count = this.state.animals_count
    }

    if (this.pick_up_state != '') {
      filter.pick_up_state = this.state.pick_up_state
    }

    if (this.delivery_state != '') {
      filter.delivery_state = this.state.delivery_state
    }

    if (this.state.to_pick_up_date && this.state.from_pick_up_date) {
      filter.desired_pick_up_date = {
        lte: moment(this.state.to_pick_up_date).format('YYYY-MM-DD'),
        gte: moment(this.state.from_pick_up_date).format('YYYY-MM-DD')
      }
    }

    if (this.state.to_drop_off_date && this.state.from_drop_off_date) {
      filter.desired_delivery_date = {
        lte: moment(this.state.to_drop_off_date).format('YYYY-MM-DD'),
        gte: moment(this.state.from_drop_off_date).format('YYYY-MM-DD')
      }
    }

    this.props.getAllListings({ filter })
  }

	render() {
		return (
      <div id="filters" className="">
        <div className="filters-toggle">Filters</div>
        <div className="filters-body">
          <div className="filter">
            <label className="filter-label">Price</label>
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
            </div>
          <div className="filter">
            <label className="filter-label">Pickup State</label>
            <label className="select select-state">
              <select onChange={this.onChangePickUpState.bind(this)} value={ (this.state.pick_up_state == '') ? "Any State" : this.state.pick_up_state}>
                  <option value="Any State">Any State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
            </label>
          </div>
          <div className="filter">
            <label className="filter-label">Destination State</label>
            <label className="select select-state">
                <select onChange={this.onChangeDeliveryState.bind(this)} value={ (this.state.delivery_state == '') ? "Any State" : this.state.delivery_state}>
                    <option value="Any State">Any State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </label>
          </div>
          <div className="filter">
            <label className="filter-label">Number of animals</label>
            <label className="select select-number">
                <select onChange={this.onChangeNumberAnimals.bind(this)} value={ (this.state.animals_count == 0) ? "Any" : this.state.animals_count}>
                    <option value="0">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
          </div>
          <div className="filter">
            <label className="filter-label">Animal Type</label>
            <ul className="check-list">
                <li><label><input type="checkbox" checked /><span>Dog</span></label></li>
                <li><label><input type="checkbox" /><span>Horse</span></label></li>
                <li><label><input type="checkbox" checked /><span>Cow</span></label></li>
                <li><label><input type="checkbox" /><span>Goat</span></label></li>
                <li><label><input type="checkbox" /><span>Cat</span></label></li>
                <li><label><input type="checkbox" /><span>Bird</span></label></li>
                <li><label><input type="checkbox" /><span>Other</span></label></li>
            </ul>
          </div>
          <div className="filter">
            <label className="filter-label">Pickup Dates Range</label>

            <div className="input-group">
              <div className = "col-lg-5 datepicker">
                <DatePicker
                    selected={this.state.from_pick_up_date}
                    onChange={this.onChangeFromPick.bind(this)}
                />
              </div>

              <em>to</em>
              <div className = "col-lg-5 datepicker">
                <DatePicker
                  selected={this.state.to_pick_up_date}
                  onChange={this.onChangeToPick.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="filter">
            <label className="filter-label">Dropoff Dates Range</label>

            <div className="input-group">
              <div className = "col-lg-5 datepicker">
                <DatePicker
                  selected={this.state.from_drop_off_date}
                  onChange={this.onChangeFromDrop.bind(this)}
                />
              </div>

              <em>to</em>
              <div className = "col-lg-5 datepicker">
                <DatePicker
                  selected={this.state.to_drop_off_date}
                  onChange={this.onChangeToDrop.bind(this)}
                />
              </div>
            </div>
            </div>
        </div>
      </div>
		)
	}
}

export default connect(null, { getAllListings } )(ListingSidebar)
