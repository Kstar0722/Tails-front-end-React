import { FaClose, FaPlus } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import './lists.scss'
import animal_image  from 'assets/animal.png'
import dog_image  from 'assets/dog.png'
import pig_image  from 'assets/pig.png'

export default class ModalAnimals extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isSelected: false
        }
    }

    selectImg() {
        const { isSelected } = this.state
        const id = 1
        this.setState({isSelected: !isSelected})
        //this.props.selectAnimal(1)
    }

    render() {
        const { animalIds, show } = this.props
        const { isSelected } = this.state  
        
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="step-one modal">
                <FaClose onClick={this.props.onClose} className="btn-close" />
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
            </div>             
                       
        )
    }
}