import { connect } from 'react-redux'
import { Link } from 'react-router'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import { setAnimalShipInfo } from './Actions/shipInfo'
import '../lists.scss'
import { browserHistory } from 'react-router'
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
            disabled: true
            }
        }
    }
    gotoFourStep(){
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
        console.log(field)
        console.log(value)
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
                                <input
                                    id = "pick-address"
                                    type="text"
                                    className="form-control"
                                    name="pick_up_address"
                                    value={pick_up_address}
                                    onChange={this.setValue.bind(this, 'pick_up_address')}
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
