import { FaPlus, FaPencil } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { selectAnimal } from '../StepOne/Actions/getAnimals'
class Left extends React.Component {
	
	constructor(props) {
        super(props)
    }

    currentSelectedAnimal(value) {
        this.props.currentSelectedAnimal(value)
    }

    toggleModal(){
        this.props.toggleModal()
    }
    currentDeletedAnimal(value)
    {
        this.props.selectAnimal(value, false)
    }

	render() {
        const { selectedAnimals, animal_id } = this.props
        return (                           
            <ul>
                {
                    selectedAnimals.length > 0
                    ? selectedAnimals.map((value) =>
                            <div className = "animal-item">
                                <button type="button" className="close" onClick={this.currentDeletedAnimal.bind(this, value)}>X</button>
                                <li key={value.animal_id}
                                className="animal-name"
                                onClick={this.currentSelectedAnimal.bind(this, value)}>
                                
                                {value.name} <FaPencil/>
                            </li>     
                            </div>
                                               
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
        
		)
	}
}

const mapStateToProps = state => ({
    animalInfos: state.animalsReducer
})

const mapDispatchToProps = dispatch => ({
    selectAnimal: (value, flag) => dispatch(selectAnimal(value, flag))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Left)