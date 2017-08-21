import { connect } from 'react-redux'
import { getAnimalsIds, selectAnimal } from './Actions/getAnimals'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'

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
        const imageUrl = 'https://s3-us-west-2.amazonaws.com/tails-images/befeadd4cc282b9e6c6fcc7ebddc393e0daae84c.jpg?1502913370653'
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
                                        <img src={imageUrl} className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={imageUrl}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={imageUrl}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={imageUrl}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
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