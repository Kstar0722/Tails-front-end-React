import { connect } from 'react-redux'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'

class StepFour extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            budget: "",
            summary: "",
            disabled: true
        }
    }

    setValue = (field, value) => {
        this.setState({ [field]: value.target.value})
        if(!_.isNil(this.state.title) && !_.isNil(this.state.budget) &&!_.isNil(this.state.summary)) {
            this.setState({ disabled: false })
        }

    }

    componentWillMount() {
        const { listing } = this.props
        this.setState({ title: listing.data.title})
        this.setState({ budget: listing.data.budget})
        if(!_.isNil(listing.data.other_notes))
            this.setState({ summary: listing.data.other_notes})
    }

    render() {
        const {
            title,
            budget,
            summary,
            disabled
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
                                            <option value="20.00"> 20 </option>
                                            <option value="30.00"> 30 </option>
                                            <option value="40.00"> 40 </option>
                                            <option value="200.00"> 200 </option>
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
                        <NextStep nextStep="/profile" disabled={disabled}/>
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

export default connect(mapStateToProps)(StepFour)