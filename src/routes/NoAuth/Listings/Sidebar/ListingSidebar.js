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
                                <option value="Idaho">Idaho</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Idaho">Idaho</option>
                            </select>
                        </label>
                    </div>
                    <div className="filter">
                        <label className="filter-label">Destination State</label>
                        <label className="select select-state">
                            <select>
                                <option value="Any State">Any State</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Idaho">Idaho</option>
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
