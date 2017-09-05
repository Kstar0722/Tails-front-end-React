import { FaPlus, FaPencil } from 'react-icons/lib/fa'

export default class Left extends React.Component {
	
	constructor(props) {
        super(props)
    }

    currentSelectedAnimal(value) {
        this.props.currentSelectedAnimal(value)
    }

    toggleModal(){
        this.props.toggleModal()
    }

	render() {
        const { selectedAnimals, animal_id } = this.props
        console.log(selectedAnimals)
		return (                           
            <ul>
                {
                    selectedAnimals.length > 0
                    ? selectedAnimals.map((value) =>
                            <li 
                                className="animal-name"
                                // className= {
                                //     value.id == animal_id 
                                //     ? "selected-animal animal-name"
                                //     : "animal-name"
                                // }  
                                //key={value.id}
                                onClick={this.currentSelectedAnimal.bind(this, value)}>
                                {value.name} <FaPencil/>
                            </li>                                        
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