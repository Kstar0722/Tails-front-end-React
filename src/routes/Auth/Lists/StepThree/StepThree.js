import { connect } from 'react-redux'
import { Link } from 'react-router'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import { setAnimalShipInfo } from './Actions/shipInfo'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import '../lists.scss'

class StepThree extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pick_up_address: "",
            pick_up_state: -1,
            pick_up_city: "",
            pick_up_zip: "",
            delivery_address: "",
            delivery_state: -1,
            delivery_city: "",
            delivery_zip: "",
            disabled: true
        }

        this.onChange = (pick_up_address) => this.setState({ pick_up_address })
    }

    setValue = (field, value) => {
        this.setState({[field]: value.target.value})
        this.props.setAnimalShipInfo(field, value.target.value)
        const self = this
        setTimeout(function(){
            self.validate()
        }, 100)
    }

    validate() {
        const {
            pick_up_address,
            pick_up_state,
            pick_up_city,
            pick_up_zip,
            delivery_address,
            delivery_state,
            delivery_city,
            delivery_zip
        } = this.state

        if( pick_up_address == "" ||
            pick_up_state == -1 ||
            pick_up_city == "" ||
            pick_up_zip == "" ||
            delivery_address == "" ||
            delivery_state == -1 ||
            delivery_city == "" ||
            delivery_zip == "" ) {
            this.setState({ disabled: true})
        } else {
            this.setState({ disabled: false})
        }
    }

    render() {
        const {
            pick_up_address,
            pick_up_state,
            pick_up_city,
            pick_up_zip,
            delivery_address,
            delivery_state,
            delivery_city,
            delivery_zip,
            disabled
        } = this.state

        const inputProps = {
          value: this.state.pick_up_address,
          onChange: this.onChange,
        }

        const cssClasses = {
          input: 'form-control'
        }

        return (
            <div className="create-list">
                <div className="container">
                    <StepHistory currentState="stepThree"/>
                    <div className="step-three">
                        <div className="comment">
                            Where is it coming from and Where is it going ?
                        </div>
                        <div className="main-content">
                            <div className="form-group">
                                <label>Pick up Address</label>
                                <PlacesAutocomplete
                                  inputProps={inputProps}
                                  classNames={cssClasses}
                                  name="pick_up_address"
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up State</label>
                                        <select
                                            className="form-control"
                                            name="pick_up_state"
                                            value={pick_up_state}
                                            onChange={this.setValue.bind(this, 'pick_up_state')}>
                                            <option value="-1">-- Please Select --</option>
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
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pick_up_city"
                                            value={pick_up_city}
                                            onChange={this.setValue.bind(this, 'pick_up_city')}/>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pick_up_zip"
                                            value={pick_up_zip}
                                            onChange={this.setValue.bind(this, 'pick_up_zip')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Destination Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="delivery_address"
                                    value={delivery_address}
                                    onChange={this.setValue.bind(this, 'delivery_address')}/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <label>Destination State</label>
                                        <select
                                            className="form-control"
                                            name="delivery_state"
                                            value={delivery_state}
                                            onChange={this.setValue.bind(this, 'delivery_state')}>
                                            <option value="-1">-- Please Select --</option>
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
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Destination City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="delivery_city"
                                            value={delivery_city}
                                            onChange={this.setValue.bind(this, 'delivery_city')}/>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Destination Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="delivery_zip"
                                            value={delivery_zip}
                                            onChange={this.setValue.bind(this, 'delivery_zip')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <Link className="btn btn-prev" to="/step-two">prev</Link>
                            <Link className= {disabled ? "btn btn-next disabled" : "btn btn-next"} to="/step-four">next</Link>
                        </div>
                        {/*<div className="footer">
                            <NextStep nextStep="/step-two"/>
                            <NextStep nextStep="/step-four" disabled={disabled}/>
                            </div>*/}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    animalInfos: state.animalsReducer,
    listing: state.listing
})

const mapDispatchToProps = dispatch => ({
    setAnimalShipInfo: (field, value) => dispatch(setAnimalShipInfo(field, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepThree)
