import { connect } from 'react-redux'
import { Link } from 'react-router'
import Dropzone from 'react-dropzone'
import _ from 'lodash'
import { FaPlus, FaPencil } from 'react-icons/lib/fa'
import Measure from 'react-measure'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import ModalAnimals from '../ModalAnimals'
import Left from './Left'
import Right from './Right'
import uploadBtnImage from 'assets/upload.png'
import cameraImage from 'assets/camera.png'
import '../lists.scss'
var Isvg = require('react-inlinesvg')

class StepTwo extends React.Component {
	
	constructor(props) {
        super(props)
        console.log(this.props.animalInfos.selectedAnimals[0].data[0].url)
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
        this.setState({ impagePreview: "" })
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
        this.setState({[field]: value.target.value})
        let currentAnimal = _.find(selectedAnimals, item => item.id == animal_id)
        currentAnimal[field] = value.target.value
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
        this.setState({ impagePreview: ""})
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
                                <Left 
                                    selectedAnimals={selectedAnimals}
                                    currentSelectedAnimal={this.currentSelectedAnimal.bind(this)}
                                    toggleModal={this.toggleModal.bind(this)}
                                    animal_id={animal_id}  />                           
                            </div>
                            <Right 
                                animal_types={animal_types}
                                name={name}
                                breed={breed}
                                height={height}
                                weight={weight}
                                special_notes={special_notes}
                                impagePreview={impagePreview}
                                setAnimalProperty={this.setAnimalProperty.bind(this)}
                                onDrop={this.onDrop.bind(this)}
                            />
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
