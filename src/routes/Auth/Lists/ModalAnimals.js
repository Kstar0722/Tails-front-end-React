import { FaClose, FaPlus } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { selectAnimal } from './StepOne/Actions/getAnimals'
import './lists.scss'
var Isvg = require('react-inlinesvg')
import config from 'config'

class ModalAnimals extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            disabled: true,
            animals: config.animals.map((animal, index) => {
                return Object.assign({}, animal, {id: index + 1, height: '', weight: '', special_notes: null, impagePreview: [] });
            })
        }
    }

    componentWillMount() {
        const { animalInfos } = this.props
    }
    selectImg(val) {
        val.impagePreview = []
        const { animalInfos } = this.props
        this.props.selectAnimal(val, true)
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
                        this.state.animals.map((val, index) =>                                        
                            <div className="animal-item col-sm-4" key={val.id}>
                                <div  className="animal-image"
                                    onClick={()=>this.selectImg(val)}>
                                    <Isvg
                                                    src={val.url}
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