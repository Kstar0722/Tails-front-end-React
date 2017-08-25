import { connect } from 'react-redux'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import { createListings } from '../Actions/listing'
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

    saveAll = () => {
        const { animalShipReducer, animalInfos } = this.props
        const value = {
            title: this.state.title,
            pick_up_address: animalShipReducer.shipInfo.pick_up_address,
            pick_up_city: animalShipReducer.shipInfo.pick_up_city,
            pick_up_state: animalShipReducer.shipInfo.pick_up_state,
            pick_up_zip: animalShipReducer.shipInfo.pick_up_zip,           
            delivery_address: animalShipReducer.shipInfo.delivery_address,
            delivery_city: animalShipReducer.shipInfo.delivery_city,
            delivery_state: animalShipReducer.shipInfo.delivery_state,
            delivery_zip: animalShipReducer.shipInfo.delivery_zip,            
            other_notes: this.state.summary,        
            budget: this.state.budget
        }
        this.props.createListings(value)
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
                                            <option value="200.00"> 50 </option>
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
                        <button 
                            className="btn btn-next"
                            onClick={() => this.saveAll()}
                        >Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    animalInfos: state.animalsReducer,
    listing: state.listing,
    animalShipReducer: state.animalShipReducer
})

const mapDispatchToProps = dispatch => ({
    createListings: (value) => dispatch(createListings(value))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(StepFour)