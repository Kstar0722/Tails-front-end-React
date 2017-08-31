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
            animal_id: -1,
            animal_types: [],
            breed: "",
            height: "",
            weight: "",
            special_notes: "",
            name: "",
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
    }

    componentWillMount() {
        const { animalInfos } = this.props
        const selectedAnimals = animalInfos.selectedAnimals
        this.setState({ selectedAnimals })
        this.setState({ animal_types: animalInfos.data }) 
        const currentAnimal = selectedAnimals[0]
        this.setState({ animal_id: currentAnimal.id })
        this.setState({ breed: currentAnimal.breed })
        this.setState({ name: currentAnimal.name })
        this.setState({ impagePreview: currentAnimal.data[0].url })
        this.getImageSize(currentAnimal.data[0].url)        
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

    getImageSize(image) {
        let img = new Image();
        img.src = image;
        img.onload = () => this.setState({dimensions: {
            width: img.width,
            height: img.height
        }})
    }

    setAnimalProperty(field, value) {
        const { selectedAnimals, animal_id } = this.state
        let currentAnimal = _.find(selectedAnimals, item => item.id == animal_id)
        this.setState({[field]: value.target.value})
        currentAnimal[field] = value.target.value
        console.log(currentAnimal)
    }

    onDrop(files) {
        console.log(files)
        this.setState({ files });
        this.setState({ impagePreview: files[0].preview})
    }

    toggleModal(){
        this.setState({ isOpen: !this.state.isOpen });  
    }

    currentSelectedAnimal(val) {
        this.setState({ animal_id: val.id })
        this.setState({ breed: val.breed })
        this.setState({ height: val.height })
        this.setState({ weight: val.weight })
        this.setState({ special_notes: val.special_notes })
        this.setState({ name: val.name })
        this.setState({ impagePreview: val.data[0].url })
        this.getImageSize(val.data[0].url)
    }

	render() {
        const {
            animal_id,
            animal_types,
            name,
            breed, 
            height, 
            weight, 
            special_notes, 
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
                                                    className= {
                                                        value.id == animal_id 
                                                        ? "selected-animal animal-name"
                                                        : "animal-name"
                                                    }  
                                                    key={value.id}
                                                    onClick={this.currentSelectedAnimal.bind(this, value)}>
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
                                                name="breed"
                                                value={breed}
                                                onChange={this.setAnimalProperty.bind(this, "breed")}>
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
                                                name="height"
                                                value={height}
                                                onChange={this.setAnimalProperty.bind(this, "height")} />
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <label>Weight of Animal</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="weight"
                                                value={weight}
                                                onChange={this.setAnimalProperty.bind(this, "weight")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Special Notes for Animal</label>
                                    <textarea
                                        rows="3"
                                        className="form-control"
                                        name="special_notes"
                                        value={special_notes}
                                        onChange={this.setAnimalProperty.bind(this, "special_notes")} />  
                                </div>
                                <div className="form-group">
                                    <label>Images of this Animal</label>
                                    <Dropzone onDrop={this.onDrop.bind(this)} className={impagePreview ? "file-drag-drop no-dash" : "file-drag-drop"  }>
                                        {
                                            impagePreview
                                                ? <img 
                                                    src={impagePreview}
                                                    className="image-preview img-responsive img-thumbnail"/>
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
