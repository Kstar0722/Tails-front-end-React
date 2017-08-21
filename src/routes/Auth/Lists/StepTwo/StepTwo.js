import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import { FaPlus, FaPencil } from 'react-icons/lib/fa'
import uploadBtnImage from 'assets/upload.png'
import cameraImage from 'assets/camera.png'
import '../lists.scss'

class StepTwo extends React.Component {
	
	constructor(props) {
        super(props)

        this.state = {
            breed_animal: "",
            height_animal: "",
            weight_animal: "",
            notes_animal: "",
            files: [],
            showPreview: true
        }        
    }

    setAnimalProperty(field, value) {
        this.setState({[field]: value.target.value})
    }

    onDrop(files) {
        console.log(files)
        this.setState({
            files
        });
    }

	render() {
        const { breed_animal, height_animal, weight_animal, notes_animal , showPreview} = this.state
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
                                        Lucy <FaPencil/>
                                    </li>
                                    <li className="animal-name">
                                        Animal2 <FaPencil/>
                                    </li>                                    
                                    <button className="btn btn-add-animal"><FaPlus/> New Animal</button>
                                    
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
                                    <Dropzone onDrop={this.onDrop.bind(this)} className="file-drag-drop">
                                        <img src={uploadBtnImage}/>
                                        <div>
                                            <p className="file-upload-title">drag & drop <br/> Image or.</p>                                        
                                            <button className="btn btn-file-upload">Choose files</button>
                                        </div>
                                        <img src={cameraImage}/>
                                    </Dropzone>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <button className="btn btn-prev">prev</button>
                            <button className="btn btn-next">next</button>
                        </div>
                    </div>                
                </div> 
            </div>
		)
	}
}

export default StepTwo