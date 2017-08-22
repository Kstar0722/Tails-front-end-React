import { connect } from 'react-redux'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'

export default class StepThree extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            address: "",
            state: -1,
            city: "",
            postCode: "",
            address1: "",
            state1: -1,
            city1: "",
            postCode1: ""
        }
    }

    setValue = (field, value) => {
        console.log(field)
        console.log(value)
    }

    render() {
        const {
            address,
            state,
            city,
            postCode,
            address1,
            state1,
            city1,
            postCode1
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
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={address}
                                    onChange={this .setValue.bind(this, 'address')}/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up State</label>
                                        <select
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            value={state}
                                            onChange={this.setValue.bind(this, 'state')}>
                                            <option value="-1">-- Please Select --</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            value={city}
                                            onChange={this.setValue.bind(this, 'city')}/>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Pick up Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="postCode"
                                            value={postCode}
                                            onChange={this.setValue.bind(this, 'postCode')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Destination Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address1"
                                    value={address1}
                                    onChange={this.setValue.bind(this, 'address1')}/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <label>Destination State</label>
                                        <select
                                            className="form-control"
                                            id="state1"
                                            name="state1"
                                            value={state1}
                                            onChange={this.setValue.bind(this, 'state1')}>
                                            <option value="-1">-- Please Select --</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Destination City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city1"
                                            value={city1}
                                            onChange={this.setValue.bind(this, 'city1')}/>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <label>Destination Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="postCode1"
                                            value={postCode1}
                                            onChange={this.setValue.bind(this, 'postCode1')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NextStep nextStep="/step-four"/>
                    </div>
                </div>
            </div>

        )
    }
}