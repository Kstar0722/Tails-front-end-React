import Dropzone from 'react-dropzone'
import _ from 'lodash'
import FileUpload from './FileUpload'
export default class Right extends React.Component {
	
	constructor(props) {
        super(props)
    }

    setAnimalProperty(field, value) {
        this.props.setAnimalProperty(field, value)
    }

	render() {
        const {
            animal_types,
            name,
            breed, 
            height, 
            weight, 
            special_notes, 
            showPreview,
            impagePreview,
            animal_breed
        } = this.props
		return (
            <div className="main-body col-sm-8 col-12">
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <label>Animal Type</label>
                            <select
                                className="form-control"
                                name="breed"
                                value={breed}
                                onChange={this.setAnimalProperty.bind(this, "breed")}>
                                {
                                _.map(animal_types, (item) => 
                                        <option 
                                           // key={item.id}
                                            value={item.breed}>{item.breed}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-sm-6 col-12">
                        <label>Breed of Animal</label>
                        <select
                            className="form-control"
                            name="animal_breed"
                            value={animal_breed}
                            onChange={this.setAnimalProperty.bind(this, "animal_breed")}>
                            <option value="test1">TEST1</option>
                            <option value="test2">TEST2</option>
                            <option value="test3">TEST3</option>
                        </select>
                    </div>
                    </div>
                    
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <label>Height of Animal(Feet)</label>
                            <input 
                                type="number"
                                className="form-control"
                                name="height"
                                value={height}
                                onChange={this.setAnimalProperty.bind(this, "height")} />
                        </div>
                        <div className="col-sm-6 col-12">
                            <label>Weight of Animal(Lbs)</label>
                            <input
                                type="number"
                                className="form-control"
                                name="weight"
                                value={weight}
                                onChange={this.setAnimalProperty.bind(this, "weight")} />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Special Notes for Animal</label>
                    <textarea
                        rows="3"
                        className="form-control"
                        name="special_notes"
                        value={special_notes}
                        onChange={this.setAnimalProperty.bind(this, "special_notes")} />  
                </div>
                <FileUpload
                    onDrop={this.props.onDrop}
                    animalImageDel={this.props.animalImageDel}
                    impagePreview={impagePreview} />
            </div>
		)
	}
}
