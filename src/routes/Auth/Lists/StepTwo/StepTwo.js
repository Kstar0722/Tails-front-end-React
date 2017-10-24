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
import { browserHistory } from 'react-router'
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
            impagePreview: [],
            isOpen: false,
            selectedAnimals: [],
            activeAnimalItem: -1,
            dimensions: {
                width: -1,
                height: -1
            }
        }
    //this.props = this.props.location.state
 
    }

    componentWillMount() {
        
        const { animalInfos } = this.props
        const selectedAnimals = animalInfos.selectedAnimals
        this.setState({ selectedAnimals })
        this.setState({ animal_types: animalInfos.data }) 
        
        const currentAnimal = selectedAnimals[0]
        if(currentAnimal == undefined){
            browserHistory.push({
                pathname: '/step-one',
            });
            return;
        }

        console.log('currentAnimal++++++++', currentAnimal)

        this.setState({ activeAnimalItem: 0 })
        this.setState({ animal_id: currentAnimal.id })
        this.setState({ breed: currentAnimal.breed })
        this.setState({ name: currentAnimal.name })
        this.setState({ height: currentAnimal.height })
        this.setState({ weight: currentAnimal.weight })
        this.setState({ special_notes: currentAnimal.special_notes })
        this.setState({ impagePreview: currentAnimal.impagePreview })
        this.getImageSize(currentAnimal.url)        
    }

    // componentDidMount() {
    //     const { impagePreview } = this.state
    //     let img = new Image();
    //     img.src = impagePreview;
    //     this.setState({dimensions: {
    //         width: img.width,
    //         height: img.height
    //     }})
    // }

    componentWillReceiveProps(nextProps){
        const { animalInfos } = nextProps
        const selectedAnimals = animalInfos.selectedAnimals
        this.setState({ selectedAnimals })
        this.setState({ animal_types: animalInfos.data }) 
        
        

        
        if(selectedAnimals.length == 0){
            browserHistory.push({
                pathname: '/step-one',
            });
            return;
        }

        const currentAnimal = selectedAnimals[selectedAnimals.length-1];

        this.setState({ activeAnimalItem: selectedAnimals.length-1 })
        this.setState({ animal_id: currentAnimal.id })
        this.setState({ breed: currentAnimal.breed })
        this.setState({ name: currentAnimal.name })
        this.setState({ height: currentAnimal.height })
        this.setState({ weight: currentAnimal.weight })
        this.setState({ special_notes: currentAnimal.special_notes })
        this.setState({ impagePreview: currentAnimal.impagePreview })
        this.getImageSize(currentAnimal.url) 
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

        this.setState({ files });
        
        
        var impagePreview = this.state.impagePreview.slice()


        let _this = this;
        let reader = new FileReader();
        reader.onloadend = function() {
            impagePreview.push(reader.result)
            _this.setState({ impagePreview: impagePreview })
        }
        reader.readAsDataURL(files[0])
        const { selectedAnimals, animal_id } = this.state
        let currentAnimal = _.find(selectedAnimals, item => item.id == animal_id)
        currentAnimal["impagePreview"] = impagePreview
    }
    animalImageDel(val)
    {
        const { selectedAnimals, animal_id } = this.state
        let imageTemp = [];
        for(let i = 0 ; i < this.state.impagePreview.length; i ++)
        {
            if(i == val)
            {
                continue;
            }
            imageTemp.push(this.state.impagePreview[i])
        }
        this.setState({
            impagePreview: imageTemp
        })

        let currentAnimal = _.find(selectedAnimals, item => item.id == animal_id)
        currentAnimal["impagePreview"] = imageTemp
    }
    toggleModal(){
        this.setState({ isOpen: !this.state.isOpen });  
    }

    currentSelectedAnimal(val, index = -1) {

        this.setState({ animal_id: val.id })
        this.setState({ activeAnimalItem: index })
        this.setState({ breed: val.breed })
        this.setState({ height: val.height })
        this.setState({ weight: val.weight })
        this.setState({ special_notes: val.special_notes })
        this.setState({ name: val.name })
        this.setState({ impagePreview: val.impagePreview})
        this.getImageSize(val.url)
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
            dimensions,
            activeAnimalItem
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
                                animal_id={animal_id}
                                activeAnimalItem={activeAnimalItem}
                                />                           
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
                                animalImageDel={this.animalImageDel.bind(this)}
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
