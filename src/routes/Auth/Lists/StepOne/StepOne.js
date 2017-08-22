import { connect } from 'react-redux'
import { getAnimalsIds, selectAnimal } from './Actions/getAnimals'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'
import animal_image  from 'assets/animal.png'
import dog_image  from 'assets/dog.png'
import pig_image  from 'assets/pig.png'
class StepOne extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isSelected: false
        }
    }

    componentWillMount() {
        this.props.getAnimalsIds()
    }

    componentDidMount() {
        const { animalIds } = this.props
    }

    selectImg() {
        const { isSelected } = this.state
        const id = 1
        this.setState({isSelected: !isSelected})
        this.props.selectAnimal(1)
    }

    render() {
        const { animalIds } = this.props
        const { isSelected } = this.state        
        return (
            <div className="create-list">
                <div className="container">
                    <StepHistory />
                    <div className="step-one">
                        <div className="comment">
                            What kind of animals do you need shipped ?                
                        </div>
                        <div className="animal-list">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={dog_image} className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={pig_image}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Pig</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={animal_image}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={animal_image}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <NextStep nextStep="/step-two"/>
                    </div>                
                </div> 
            </div>
                       
        )
    }
}

const mapStateToProps = state => ({
    animalIds: state.animalIdsReducer
})

const mapDispatchToProps = dispatch => ({
    getAnimalsIds: () => dispatch(getAnimalsIds()),
    selectAnimal: (id) => dispatch(selectAnimal(id))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(StepOne)