import './ListingSidebar.scss'

class ListingSidebar extends React.Component {
	constructor(props) {
		super(props)
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
                            <select>
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
                            <select>
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
                            <select>
                                <option value="Any">Any</option>
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
                            <label className="select">
                                <select>
                                    <option value="Any">Any</option>
                                    <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                    <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                    <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                    <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                </select>
                            </label>
                            <em>to</em>
                            <label className="select">
                                <select>
                                    <option value="Any">Any</option>
                                    <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                    <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                    <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                    <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="filter">
                        <label className="filter-label">Dropoff Dates Range</label>

                        <div className="input-group">
                            <label className="select">
                                <select>
                                    <option value="Any">Any</option>
                                    <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                    <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                    <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                    <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                </select>
                            </label>
                            <em>to</em>
                            <label className="select">
                                <select>
                                    <option value="Any">Any</option>
                                    <option value="7 / 10 / 2017">7 / 10 / 2017</option>
                                    <option value="8 / 10 / 2017">8 / 10 / 2017</option>
                                    <option value="9 / 10 / 2017">9 / 10 / 2017</option>
                                    <option value="10 / 10 / 2017">10 / 10 / 2017</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default ListingSidebar
