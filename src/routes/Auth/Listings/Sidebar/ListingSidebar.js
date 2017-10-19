import './ListingSidebar.scss'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'assets/DatePicker.scss';
import { connect } from 'react-redux'
import { getAllListings, setFilter } from '../../../../actions/listing'
import InputRange from 'react-input-range'
import { setCurrentPage } from '../../../../actions/pagination'

class ListingSidebar extends React.Component {
	constructor(props) {
    super(props)
    this.state = ({
      price: { min: 1, max: 1000 },
      from_drop_off_date: null,
      to_drop_off_date: null,
      from_pick_up_date: null,
      to_pick_up_date: null,
      animals_count: 0,
      pick_up_state: 'Any State',
      delivery_state: 'Any State',
      status: 'open',
      animal_type: {
        Dog: false,
        Horse: false,
        Cow: false,
        Goat: false,
        Cat: false,
        Bird: false
      }
    })
	}

  onChangePickUpState(event) {
    this.setState({ pick_up_state: event.target.value }, this.filterListings)
  }

  onChangeDeliveryState(event) {
    this.setState({ delivery_state: event.target.value }, this.filterListings)
  }

  onChangeNumberAnimals(event) {
    this.setState({ animals_count: event.target.value }, this.filterListings)
  }

  onChangeFromDrop(date) {
    this.setState({ from_drop_off_date: date }, this.filterListings)
  }

  onChangeToDrop(date) {
    this.setState({ to_drop_off_date: date }, this.filterListings)
  }

  onChangeFromPick(date) {
    this.setState({ from_pick_up_date: date }, this.filterListings)
  }

  onChangeToPick(date){
    this.setState({ to_pick_up_date: date }, this.filterListings)
  }

  handleAnimalType(type) {
    this.setState({ animal_type: Object.assign({}, this.state.animal_type, { [type]: !this.state.animal_type[type] }) }, this.filterListings)
  }

  onChangePrice(value) {
    this.setState({ price: value })
  }

  filterListings(){
    const filter = {}

    filter.status = this.state.status

    const price = {}
    if (this.state.price.min != 1) price.gte = this.state.price.min
    if (this.state.price.max != 1000) price.lte = this.state.price.max
    if (Object.keys(price).length) filter['budget'] = price

    if (this.state.animals_count > 0) {
      filter.animals_count = this.state.animals_count
    }

    if (this.state.pick_up_state != 'Any State') {
      filter.pick_up_state = this.state.pick_up_state
    }

    if (this.state.delivery_state != 'Any State') {
      filter.delivery_state = this.state.delivery_state
    }

    const types = this.state.animal_type
    let values = Object.keys(types).filter(type => types[type]).join(',')

    if (values.length) filter.breeds = values

    const desired_pick_up_date = {}
    if (this.state.to_pick_up_date) desired_pick_up_date.lte = moment(this.state.to_pick_up_date).endOf('day').toJSON();
    if (this.state.from_pick_up_date) desired_pick_up_date.gte = moment(this.state.from_pick_up_date).startOf('day').toJSON();
    if (Object.keys(desired_pick_up_date).length) filter['desired_pick_up_date'] = desired_pick_up_date

    const desired_delivery_date = {}
    if (this.state.to_drop_off_date) desired_delivery_date.lte = moment(this.state.to_drop_off_date).endOf('day').toJSON();
    if (this.state.from_drop_off_date) desired_delivery_date.gte = moment(this.state.from_drop_off_date).startOf('day').toJSON();
    if (Object.keys(desired_delivery_date).length) filter['desired_delivery_date'] = desired_delivery_date;

    // console.log('filter', filter);

    this.props.setCurrentPage(1)
    this.props.setFilter({ filter })
    this.props.getAllListings({
      filter: filter,
      include_bid_counts: 1,
      include: ['animals'],
      page: {
        size: this.props.pagination.defaultPageSize
      }
    })
  }

	render() {

		return (
      <div id="filters" className="">
        <div className="filters-toggle">Filters</div>
        <div className="filters-body">
          <div className="filter">
            <label className="filter-label price">Price</label>
            <InputRange
              maxValue={1000}
              minValue={1}
              value={this.state.price}
              onChange={value => this.onChangePrice(value)}
              onChangeComplete={value => this.filterListings()} />
            <div id="price-slider" data-from="0" data-to="5000" data-currency="$"></div>
            </div>
          <div className="filter">
            <label className="filter-label">Pickup State</label>
            <label className="select select-state">
              <select onChange={this.onChangePickUpState.bind(this)} value={ this.state.pick_up_state }>
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
                <select onChange={this.onChangeDeliveryState.bind(this)} value={ this.state.delivery_state }>
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
                <li><label><input type="checkbox" checked={ this.state.animal_type.Dog } onChange={this.handleAnimalType.bind(this, 'Dog')} /><span>Dog</span></label></li>
                <li><label><input type="checkbox" checked={ this.state.animal_type.Horse } onChange={this.handleAnimalType.bind(this, 'Horse')} /><span>Horse</span></label></li>
                <li><label><input type="checkbox" checked={ this.state.animal_type.Cow } onChange={this.handleAnimalType.bind(this, 'Cow')} /><span>Cow</span></label></li>
                <li><label><input type="checkbox" checked={ this.state.animal_type.Goat } onChange={this.handleAnimalType.bind(this, 'Goat')} /><span>Goat</span></label></li>
                <li><label><input type="checkbox" checked={ this.state.animal_type.Cat } onChange={this.handleAnimalType.bind(this, 'Cat')} /><span>Cat</span></label></li>
                <li><label><input type="checkbox" checked={ this.state.animal_type.Bird } onChange={this.handleAnimalType.bind(this, 'Bird')} /><span>Bird</span></label></li>
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

const mapStateToProps = (state) => ({
  pagination: state.pagination
})

export default connect(mapStateToProps, { getAllListings, setFilter, setCurrentPage } )(ListingSidebar)
