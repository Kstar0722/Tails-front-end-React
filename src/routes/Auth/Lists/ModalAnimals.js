import { FaClose, FaPlus } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { selectAnimal } from './StepOne/Actions/getAnimals'
import './lists.scss'
var Isvg = require('react-inlinesvg')

class ModalAnimals extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { animalInfos } = this.props
    }
    selectImg(val) {
        const { animalInfos } = this.props
        this.props.selectAnimal(val, true)
        // const index = _.findIndex(animalInfos.selectedAnimals, item => item.id == val.id)
        // if(index == -1) {
        //     this.props.selectAnimal(val, true)
        // } else {
        //     this.props.selectAnimal(val, false)
        // }
        this.props.onClose()
    }

    render() {
        const { show, animals, animalInfos } = this.props
       
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="step-one modal">
                <FaClose onClick={this.props.onClose} className="btn-close" />
                <div className="animal-list row">
                    {
                        animals.map((val, index) =>                                        
                            <div className="animal-item col-sm-4" key={val.id}>
                                <div  className="animal-image"
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