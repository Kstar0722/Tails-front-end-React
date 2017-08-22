import { connect } from 'react-redux'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'

export default class StepFour extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            budget: "",
            summary: ""
        }
    }

    setValue = (field, value) => {
        console.log(field)
        console.log(value)
    }

    render() {
        const {
            title,
            budget,
            summary
        } = this.state

        return (
            <div className="create-list">
                <div className="container">
                    <StepHistory currentState="stetFour"/>
                    <div className="step-four">
                        <div className="comment">
                            Tell us a little more about your listing
                        </div>
                        <div className="main-content">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-8 col-12">
                                        <label>Listing Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={title}
                                            onChange={this.setValue.bind(this, 'title')}/>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <label>Budget</label>
                                        <select
                                            className="form-control"
                                            name="budget"
                                            value={budget}
                                            onChange={this.setValue.bind(this, 'budget')}>
                                            <option value="-1">-- Please Select --</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Summary of Listing</label>
                                <textarea
                                    rows="4"
                                    className="form-control"
                                    name="summary"
                                    value={summary}
                                    onChange={this.setValue.bind(this, 'summary')} />
                            </div>                            
                        </div>
                        <NextStep nextStep="/step-four"/>
                    </div>
                </div>
            </div>

        )
    }
}