import { connect } from 'react-redux'
import { Link } from 'react-router'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import { createListings, updateListings } from '../Actions/listing'
import '../lists.scss'

class StepFour extends React.Component {

    constructor(props) {
        super(props)
        var updateVal = this.props.location.state

        if(updateVal == undefined)
        {
            this.state = {
            title: "",
            budget: "",
            summary: "",
            disabled: true
            }
        }else{
            this.state = {
                title: updateVal.title,
                budget: updateVal.budget,
                summary: updateVal.other_notes,
                disabled: false
            }
        }
    }

    setValue = (field, value) => {
        this.setState({ [field]: value.target.value})
        const self = this
        setTimeout(function(){
            self.validate()
        }, 100)
    }
    
    validate() {
        const {
            title,
            budget,
            summary
        } = this.state
 
        if( title == "" || 
            budget == "" ||
            summary == "" ) {
            this.setState({ disabled: false})
        } else {
            this.setState({ disabled: false})
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
        if(this.props.location.state == undefined)
        {
            this.props.createListings(value)
        }else{
            var id = this.props.location.state.id
            this.props.updateListings(id, value)
        }
        
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
                    <StepHistory currentState="stepFour"/>
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="budget"
                                            value={budget}
                                            onChange={this.setValue.bind(this, 'budget')}/>
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
                        <div className="btn-section">
                            <Link className="btn btn-prev" to="/step-three">prev</Link>
                            <button                            
                                className={disabled ? "btn btn-next disabled" : "btn btn-next"  }
                                onClick={() => this.saveAll()}
                                disabled={disabled}
                            >Next</button>
                        </div>
                        
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
    createListings: (value) => dispatch(createListings(value)),
    updateListings: (id, value) => dispatch(updateListings(id ,value))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(StepFour)