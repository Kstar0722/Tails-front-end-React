import { connect } from 'react-redux'
import { Link } from 'react-router';
import Dropzone from 'react-dropzone'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import ModalAnimals from '../ModalAnimals'
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
            impagePreview: null,
            showPreview: true,
            isOpen: false
        }        
    }

    setAnimalProperty(field, value) {
        this.setState({[field]: value.target.value})
    }

    onDrop(files) {
        console.log(files)
        this.setState({ files });
        this.setState({ impagePreview: files[0].preview})
    }

    toggleModal(){
        this.setState({ isOpen: !this.state.isOpen });  
    }

	render() {
        const { 
            breed_animal, 
            height_animal, 
            weight_animal, 
            notes_animal, 
            showPreview, 
            isOpen, 
            impagePreview
        } = this.state
        
		return (
			<div className="create-list">
                <div className="container">
                    <StepHistory currentState="stepTwo"/>
                    <ModalAnimals 
                        show={isOpen}
                        onClose={this.toggleModal.bind(this)} />
                    {
                        isOpen
                            ? <div className="overlay-section" onClick={this.toggleModal.bind(this)}></div>
                            : null
                    }
                    <div className="step-two">
                        <div className="comment">
                            Tell us a little about your animals            
                        </div>
                        <div className="dashboard row">
                            <div className="left-side-bar col-sm-4 col-12">
                                <ul>
                                    <li className="animal-name">
                                        Lucy <FaPencil/>
                                    </li>
                                    <li className="animal-name">
                                        Animal2 <FaPencil/>
                                    </li>                                    
                                    <button
                                        className="btn btn-add-animal"
                                        onClick={this.toggleModal.bind(this)}
                                    ><FaPlus/> New Animal</button>
                                    
                                </ul>
                            </div>
                            <div className="main-body col-sm-8 col-12">
                                <div className="form-group">
                                    <label>Breed of Animal</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="breed_animal"
                                        value={breed_animal}
                                        onChange={this.setAnimalProperty.bind(this, "breed_animal")}/>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <label>Height of Animal</label>
                                            <input 
                                                type="number"
                                                className="form-control"
                                                name="height_animal"
                                                value={height_animal}
                                                onChange={this.setAnimalProperty.bind(this, "height_animal")} />
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <label>Weight of Animal</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="weight_animal"
                                                value={weight_animal}
                                                onChange={this.setAnimalProperty.bind(this, "weight_animal")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Special Notes for Animal</label>
                                    <textarea
                                        rows="3"
                                        className="form-control"
                                        name="notes_animal"
                                        value={notes_animal}
                                        onChange={this.setAnimalProperty.bind(this, "notes_animal")} />  
                                </div>
                                <div className="form-group">
                                    <label>Images of this Animal</label>
                                    <Dropzone onDrop={this.onDrop.bind(this)} className="file-drag-drop">
                                        {
                                            impagePreview
                                                ? <img src={impagePreview} className="image-preview"/>
                                                : <div className="upload-section">
                                                    <img src={uploadBtnImage} className="upload-icon"/>
                                                        <div>
                                                            <p className="file-upload-title">drag & drop <br/> Image or.</p>                                        
                                                            <button className="btn btn-file-upload">Choose files</button>
                                                        </div>
                                                    <img src={cameraImage} className="upload-icon"/>
                                                </div>
                                        }
                                    </Dropzone>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <Link className="btn btn-prev" to="/step-one">prev</Link>
                            <Link className="btn btn-next" to="/step-three">next</Link>
                        </div>
                    </div>                
                </div> 
            </div>
		)
	}
}

export default StepTwo