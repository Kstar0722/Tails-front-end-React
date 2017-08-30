import { connect } from 'react-redux'
import { Link } from 'react-router'
import Dropzone from 'react-dropzone'
import _ from 'lodash'
import { FaPlus, FaPencil } from 'react-icons/lib/fa'
import Measure from 'react-measure'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import ModalAnimals from '../ModalAnimals'
import uploadBtnImage from 'assets/upload.png'
import cameraImage from 'assets/camera.png'
import '../lists.scss'
var Isvg = require('react-inlinesvg')

class StepTwo extends React.Component {
	
	constructor(props) {
        super(props)

        this.state = {
            animal_types: [],
            animal_breed: "",
            animal_height: "",
            animal_weight: "",
            animal_notes: "",
            animal_name: "",
            animal_breed: "test1",
            files: [],
            impagePreview: null,
            showPreview: true,
            isOpen: false,
            selectedAnimals: [],
            dimensions: {
                width: -1,
                height: -1
            }
        }
        
        this.selectAnimal = this.selectAnimal.bind(this)
    }

    componentWillMount() {
        const { animalInfos } = this.props
        const selectedAnimals = animalInfos.selectedAnimals
        console.log(selectedAnimals)
        this.setState({ selectedAnimals })
        this.setState({ animal_types: animalInfos.data }) 
        const currentAnimal = selectedAnimals[0]
        this.setState({ animal_type: currentAnimal.breed })
        this.setState({ animal_height: currentAnimal.height })
        this.setState({ animal_weight: currentAnimal.weight })
        this.setState({ animal_notes: currentAnimal.special_notes })
        this.setState({ animal_name: currentAnimal.name })
        this.setState({ impagePreview: currentAnimal.data[0].url })
    }

    componentDidMount() {
        const { impagePreview } = this.state
        let img = new Image();
        img.src = impagePreview;
        this.setState({dimensions: {
            width: img.width,
            height: img.height
        }})
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

    selectAnimal(val) {
        console.log(val)
        this.setState({ animal_type: val.breed })
        this.setState({ animal_height: val.height })
        this.setState({ animal_weight: val.weight })
        this.setState({ animal_notes: val.special_notes })
        this.setState({ animal_name: val.name })
        this.setState({ impagePreview: val.data[0].url })
    }

	render() {
        const {
            animal_types,
            animal_name,
            animal_type, 
            animal_height, 
            animal_weight, 
            animal_notes, 
            showPreview, 
            isOpen, 
            impagePreview,
            selectedAnimals,
            animal_breed,
            dimensions
        } = this.state
        
		return (
			<div className="create-list">
                <div className="container">
                    <StepHistory currentState="stepTwo"/>
                    <ModalAnimals 
                        animals={animal_types}
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
                                    {
                                        selectedAnimals.length > 0
                                        ? selectedAnimals.map((value) =>
                                                <li 
                                                    className="animal-name"
                                                    key={value.id}
                                                    onClick={this.selectAnimal.bind(this, value)}>
                                                    {value.name} <FaPencil/>
                                                </li>                                        
                                            )
                                        : null
                                    }
                                    <div>
                                        <button
                                            className="btn btn-add-animal"
                                            onClick={this.toggleModal.bind(this)}
                                        ><FaPlus/> New Animal</button>
                                    </div>                                   
                                </ul>                                
                            </div>
                            <div className="main-body col-sm-8 col-12">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <label>Animal Type</label>
                                            <select
                                                className="form-control"
                                                name="animal_type"
                                                value={animal_type}
                                                onChange={this.setAnimalProperty.bind(this, "animal_type")}>
                                                {
                                                _.map(animal_types, (item) => 
                                                        <option value={item.breed} key={item.id}>{item.breed}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                        <label>Breed of Animal</label>
                                        <select
                                            className="form-control"
                                            name="animal_breed"
                                            value={animal_breed}
                                            onChange={this.setAnimalProperty.bind(this, "animal_breed")}>
                                            <option value="test1">TEST1</option>
                                            <option value="test2">TEST2</option>
                                            <option value="test3">TEST3</option>
                                        </select>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <label>Height of Animal</label>
                                            <input 
                                                type="number"
                                                className="form-control"
                                                name="animal_height"
                                                value={animal_height}
                                                onChange={this.setAnimalProperty.bind(this, "animal_height")} />
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <label>Weight of Animal</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="animal_weight"
                                                value={animal_weight}
                                                onChange={this.setAnimalProperty.bind(this, "animal_weight")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Special Notes for Animal</label>
                                    <textarea
                                        rows="3"
                                        className="form-control"
                                        name="animal_notes"
                                        value={animal_notes}
                                        onChange={this.setAnimalProperty.bind(this, "animal_notes")} />  
                                </div>
                                <div className="form-group">
                                    <label>Images of this Animal</label>
                                    <Dropzone onDrop={this.onDrop.bind(this)} className={impagePreview ? "file-drag-drop no-dash" : "file-drag-drop"  }>
                                        {
                                            impagePreview
                                                ? <img 
                                                    src={impagePreview}
                                                    className="image-preview img-responsive img-thumbnail"
                                                    width={dimensions.width}
                                                    height={dimensions.height}/>
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

const mapStateToProps = state => ({
    animalInfos: state.animalsReducer
})
  
export default connect(mapStateToProps)(StepTwo)
