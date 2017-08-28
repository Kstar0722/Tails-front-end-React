import { connect } from 'react-redux'
import _ from 'lodash'
import { getAnimalsIds, selectAnimal } from './Actions/getAnimals'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'


class StepOne extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isSelected: false,
            selectedAnimal: [],
            disabled: true
        }
    }

    componentWillMount() {
        this.props.getAnimalsIds()
    }

    componentDidMount() {
        const { animalInfos, selectedAnimal } = this.props
        //this.setState({ selectedAnimal: animalInfos.selectedAnimals})
    }

    selectImg(val) {
        const { isSelected, selectedAnimal, disabled } = this.state
        const item = {
            id: val.id,
            value: !isSelected 
        }
        this.props.selectAnimal(val)
        const index = _.findIndex(selectedAnimal, item => item.id == val.id)
        if(index == -1) {
            selectedAnimal.push(item)
            this.setState({ disabled: false })
            //this.props.selectAnimal(val)
        } else {
            selectedAnimal.splice(index, 1)
        }
        this.setState({ isSelected: !isSelected })
        this.setState({ selectedAnimal })
        if(selectedAnimal.length == 0) {
            this.setState({ disabled: true })
        }
    }

    render() {
        const { animalInfos } = this.props
        const { selectedAnimal, isSelected, disabled } = this.state
        console.log(selectedAnimal)
        if(animalInfos.loaded) {
            return (
                <div className="create-list">
                    <div className="container">
                        <StepHistory currentState="stepOne"/>
                        <div className="step-one">
                            <div className="comment">
                                What kind of animals do you need shipped ?                
                            </div>
                            <div className="animal-list">
                                <div className="row">
                                    {
                                        animalInfos.data.map((val, index) =>                                        
                                            <div className="col-sm-3" key={val.id}>
                                                <div className="animal-item">
                                                    <img 
                                                        src={val.data[0].url}
                                                        className={
                                                            selectedAnimal.length > 0 && _.find(selectedAnimal, item => item.id == val.id && item.value == true)
                                                            ? "select-animal-image img-responsive"
                                                            : "animal-image img-responsive"                                          
                                                        }
                                                        onClick={()=>this.selectImg(val)}/>
                                                    <div className="animal-name">{val.name}</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>                        
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
    selectAnimal: (value) => dispatch(selectAnimal(value))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(StepOne)