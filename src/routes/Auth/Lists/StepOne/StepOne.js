import { connect } from 'react-redux'
import _ from 'lodash'
import { getAnimalsIds, selectAnimal } from './Actions/getAnimals'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'
var Isvg = require('react-inlinesvg')

class StepOne extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            disabled: true
        }        
    }

    componentWillMount() {
        this.props.getAnimalsIds()
    }

    componentDidMount() {
        this.checkSelectedAnimals() 
    }

    checkSelectedAnimals() {
        const { animalInfos } = this.props
        if(animalInfos.selectedAnimals.length > 0) {
            this.setState({ disabled: false })
        }
    }

    selectImg(val) {
        const { disabled } = this.state
        const { animalInfos } = this.props
        const index = _.findIndex(animalInfos.selectedAnimals, item => item.id == val.id)
        if(index == -1) {
            this.setState({ disabled: false })
            this.props.selectAnimal(val, true)
        } else {
            this.props.selectAnimal(val, false)
        }

        if(animalInfos.selectedAnimals.length == 0) {
            this.setState({ disabled: true })
        }
    }

    render() {
        const { animalInfos } = this.props
        const { selectedAnimal, disabled } = this.state
        
        if(animalInfos.loaded) {
            return (
                <div className="create-list">
                    <div className="container">
                        <StepHistory currentState="stepOne"/>
                        <div className="step-one">
                            <div className="comment">
                                What kind of animals do you need shipped ?                
                            </div>                           
                            <div className="animal-list row">
                                {                                    
                                    _.orderBy(animalInfos.data, 'name').map((val, index) =>                                        
                                        <div className="animal-item col-md-2 col-sm-4" key={val.id}>
                                            <div 
                                                className={
                                                    animalInfos.selectedAnimals.length > 0 && _.find(animalInfos.selectedAnimals, item => item.id == val.id)
                                                    ? "select-animal-image animal-image"
                                                    : "animal-image"                                          
                                                }
                                                onClick={()=>this.selectImg(val)}>
                                                <Isvg 
                                                    src={val.data[0].url}
                                                    className="img-responsive"/>                                                
                                            </div>
                                            <div className="animal-name">{val.name}</div>
                                        </div>
                                    )
                                }
                            </div>
                            <NextStep nextStep="/step-two" disabled={disabled}/>
                        </div>                
                    </div> 
                </div>                           
            )
        }
        else {
            return null
        }     
        
    }
}

const mapStateToProps = state => ({
    animalInfos: state.animalsReducer
})

const mapDispatchToProps = dispatch => ({
    getAnimalsIds: () => dispatch(getAnimalsIds()),
    selectAnimal: (value, flag) => dispatch(selectAnimal(value, flag))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(StepOne)