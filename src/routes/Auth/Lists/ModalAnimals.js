import { FaClose, FaPlus } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import './lists.scss'

export default class ModalAnimals extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isSelected: false,
            selectedAnimal: []
        }
    }

    selectImg(val) {
        const { isSelected, selectedAnimal } = this.state
        const item = {
            id: val.id,
            value: !isSelected 
        }
        // this.props.selectAnimal(val)
        const index = _.findIndex(selectedAnimal, item => item.id == val.id)
        if(index == -1) {
            selectedAnimal.push(item)
           // this.props.selectAnimal(val)
        } else {
            selectedAnimal.splice(index, 1)
        }
        this.setState({ isSelected: !isSelected })
        this.setState({ selectedAnimal })
        this.props.onClose()
    }

    render() {
        const { show, animals } = this.props
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
            </div>             
                       
        )
    }
}