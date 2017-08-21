import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'

class StepTwo extends React.Component {
	
	constructor(props) {
        super(props)

        this.state = {
            breed_animal: "",
            height_animal: "",
            weight_animal: "",
            notes_animal: ""
        }        
    }

    setAnimalProperty(field, value) {
        this.setState({[field]: value.target.value})
    }

	render() {
        const { breed_animal, height_animal, weight_animal, notes_animal } = this.state
        console.log(this.state)
		return (
			<div className="create-list">
                <div className="container">
                    <StepHistory currentState="stepTwo"/>
                    <div className="step-two">
                        <div className="comment">
                            Tell us a little about your animals            
                        </div>
                        <div className="dashboard">
                            <div className="left-side-bar">
                                <ul>
                                    <li className="animal-name">
                                        Lucy
                                    </li>
                                    <li className="animal-name">
                                        Animal2
                                    </li>                                    
                                    <button className="btn btn-add-animal">New Animal</button>
                                    
                                </ul>
                            </div>
                            <div className="main-body">
                                <div className="form-group">
                                    <label>Breed of Animal</label>
                                    <input type="text" 
                                        className="form-control"
                                        name="breed_animal"
                                        value={breed_animal}
                                        onChange={this.setAnimalProperty.bind(this, "breed_animal")}/>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Height of Animal</label>
                                            <input type="number"
                                                className="form-control"
                                                name="height_animal"
                                                value={height_animal}
                                                onChange={this.setAnimalProperty.bind(this, "height_animal")} />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Weight of Animal</label>
                                            <input type="number"
                                                className="form-control"
                                                name="weight_animal"
                                                value={weight_animal}
                                                onChange={this.setAnimalProperty.bind(this, "weight_animal")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Special Notes for Animal</label>
                                    <textarea rows="3"
                                        className="form-control"
                                        name="notes_animal"
                                        value={notes_animal}
                                        onChange={this.setAnimalProperty.bind(this, "notes_animal")} />  
                                </div>
                                <div className="form-group">
                                    <label>Images of this Animal</label>
                                    <input type="file" name="animal_image" />
                                </div>
                            </div>
                        </div>
                    </div>                
                </div> 
            </div>
		)
	}
}

export default StepTwo