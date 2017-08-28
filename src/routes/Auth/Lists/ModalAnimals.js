import { FaClose, FaPlus } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { selectAnimal } from './StepOne/Actions/getAnimals'
import './lists.scss'

class ModalAnimals extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isSelected: false,
            selectedAnimal: []
        }
    }

    componentWillMount() {
        const { animalInfos } = this.props
        animalInfos.selectedAnimals
    }

    selectImg(val) {
        const { selectedAnimal, disabled } = this.state
        const item = {
            id: val.id,
            value: true
        }
        const index = _.findIndex(selectedAnimal, item => item.id == val.id)
        if(index == -1) {
            selectedAnimal.push(item)
            this.props.selectAnimal(val, true)
        } else {
            selectedAnimal.splice(index, 1)
            this.props.selectAnimal(val, false)
        }

        this.setState({ selectedAnimal })
        this.props.onClose()
    }

    render() {
        const { show, animals, animalInfos } = this.props
        const { isSelected, selectedAnimal } = this.state  
       
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="step-one modal">
                <FaClose onClick={this.props.onClose} className="btn-close" />
                <div className="animal-list">
                    <div className="row">
                        {
                            animals.map((val, index) =>                                        
                                <div className="col-sm-3" key={val.id}>
                                    <div className="animal-item">
                                        <img 
                                            src={val.data[0].url}
                                            className={
                                                animalInfos.selectedAnimals.length > 0 && _.find(animalInfos.selectedAnimals, item => item.id == val.id)
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
            </div>             
                       
        )
    }
}

const mapStateToProps = state => ({
    animalInfos: state.animalsReducer
})

const mapDispatchToProps = dispatch => ({
    selectAnimal: (value, flag) => dispatch(selectAnimal(value, flag))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ModalAnimals)