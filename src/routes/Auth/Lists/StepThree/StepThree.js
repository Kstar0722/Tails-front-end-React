import { connect } from 'react-redux'
import { Link } from 'react-router'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import { setAnimalShipInfo } from './Actions/shipInfo'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import '../lists.scss'
import { browserHistory } from 'react-router'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class StepThree extends React.Component {

    constructor(props) {
        super(props)
        var updateVal = this.props.location.state
        if(updateVal == undefined)
        {
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
        }else{
            this.state = {
            pick_up_address: updateVal.pick_up_address,
            pick_up_state: updateVal.pick_up_state,
            pick_up_city: updateVal.pick_up_city,
            pick_up_zip: updateVal.pick_up_zip,
            delivery_address: updateVal.delivery_address,
            delivery_state: updateVal.delivery_state,
            delivery_city: updateVal.delivery_city,
            delivery_zip: updateVal.delivery_zip,
            disabled: false
            }
        }

        this.onPickChange = (pick_up_address) => {
            
            if(pick_up_address.split(", ").length >= 4)
            {
                this.fullAddressChange(pick_up_address, 1)
            }else{
                this.setState({["pick_up_address"]: pick_up_address })
            }
            const self = this
            setTimeout(function(){
                self.validate()
            }, 100)
        }
        this.onDeliveryChange = (delivery_address) => {
            
            if(delivery_address.split(", ").length >= 4)
            {
                this.fullAddressChange(delivery_address, 2)
            }else{
                this.setState({["delivery_address"]: delivery_address })
            }
            
            const self = this
            setTimeout(function(){
                self.validate()
            }, 100)
        }
    }

    fullAddressChange(address ,index) {
      
        let geocoder = new google.maps.Geocoder();
        let self = this;
         geocoder.geocode({'address': address}, function(results, status) {
             console.log(results)
          if (status === 'OK') {
            let postal_code = "";
            let streetNum = "";
            let route = "";
            let city = "";
            let state = "";
            let resultComponents = results[0].address_components;
            console.log(resultComponents)
            for (let i = 0; i < resultComponents.length; i++) {
                if (resultComponents[i].types.indexOf('postal_code') > -1) {
                   postal_code = resultComponents[i].long_name;
                }else if (resultComponents[i].types.indexOf('street_number') > -1) {
                   streetNum = resultComponents[i].long_name;
                }else if (resultComponents[i].types.indexOf('route') > -1) {
                   route = resultComponents[i].long_name;
                }else if (resultComponents[i].types.indexOf('locality') > -1) {
                   city = resultComponents[i].long_name;
                }else if (resultComponents[i].types.indexOf('administrative_area_level_1') > -1) {
                   state = resultComponents[i].short_name;
                }
            }
            if (index == 1)
            {
                self.setState({
                    pick_up_city: city,
                    pick_up_state: state,
                    pick_up_address: streetNum + " " + route,
                    pick_up_zip: postal_code,
                    disabled: false
                })
            }else{
                self.setState({
                    delivery_city: city,
                    delivery_state: state,
                    delivery_address: streetNum + " " + route,
                    delivery_zip: postal_code,
                    disabled: false
                })
            }
            
            
            
          }else{
              if(index == 1)
                {   
                    self.setState({
                        pick_up_city: "",
                        pick_up_state: "",
                        pick_up_zip: "",
                        disabled: true
                    })
                }else{
                     self.setState({
                        delivery_city: "",
                        delivery_state: "",
                        delivery_zip: "",
                        disabled: true
                    })
                }
          
          }
        });
        
    }

    gotoFourStep(){
        this.props.setAnimalShipInfo("pick_up_address", this.state.pick_up_address)
        this.props.setAnimalShipInfo("pick_up_state", this.state.pick_up_state)
        this.props.setAnimalShipInfo("pick_up_city", this.state.pick_up_city)
        this.props.setAnimalShipInfo("pick_up_zip", this.state.pick_up_zip)

        this.props.setAnimalShipInfo("delivery_address", this.state.delivery_address)
        this.props.setAnimalShipInfo("delivery_state", this.state.delivery_state)
        this.props.setAnimalShipInfo("delivery_city", this.state.delivery_city)
        this.props.setAnimalShipInfo("delivery_zip", this.state.delivery_zip)

        if(document.getElementById("btn-next").className == "btn btn-next disabled")
        {
            return
        }
        browserHistory.push({
			pathname: '/step-four',
			state: this.props.location.state
		});
    }
    setValue = (field, value) => {
        console.log([field])
        console.log(value.target.value)
        this.setState({[field]: value.target.value})
        const self = this
        setTimeout(function(){
            self.validate()
        }, 100)
    }
    cityMethod(e) {
        const re = /[a-zA-z:]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
        }
    }
    postalCodeMethod(e) {
        const re = /[0-9:]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
        }
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
          onChange: this.onPickChange,
        }
        const inputProps1 = {
            value: this.state.delivery_address,
            onChange: this.onDeliveryChange,
            
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
                                            onKeyPress={(e) => this.cityMethod(e)}
                                            onChange={this.setValue.bind(this, 'pick_up_city')}/>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pick_up_zip"
                                            value={pick_up_zip}
                                            onKeyPress={(e) => this.postalCodeMethod(e)}
                                            onChange={this.setValue.bind(this, 'pick_up_zip')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Destination Address</label>
                                 <PlacesAutocomplete
                                  inputProps={inputProps1}
                                  classNames={cssClasses}
                                  name="delivery_address"
                                />
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
                                            onKeyPress={(e) => this.cityMethod(e)}
                                            onChange={this.setValue.bind(this, 'delivery_city')}/>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Destination Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="delivery_zip"
                                            value={delivery_zip}
                                            onKeyPress={(e) => this.postalCodeMethod(e)}
                                            onChange={this.setValue.bind(this, 'delivery_zip')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <Link className="btn btn-prev" to="/step-two">prev</Link>
                            <button id = "btn-next" className= {disabled ? "btn btn-next disabled" : "btn btn-next"} onClick = {this.gotoFourStep.bind(this)}>next</button>
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
