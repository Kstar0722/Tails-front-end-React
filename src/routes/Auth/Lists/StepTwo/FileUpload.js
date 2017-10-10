import Dropzone from 'react-dropzone'
import _ from 'lodash'
import uploadBtnImage from 'assets/upload.png'
import cameraImage from 'assets/camera.png'
import "./FileUpload.scss"

export default class FileUpload extends React.Component {

	constructor(props) {
        super(props)
    }

    onDrop(files) {
        this.props.onDrop(files)
    }
    animalImageDel(val)
    {
        this.props.animalImageDel(val)
    }
	render() {
        const {
            impagePreview
        } = this.props
        console.log(impagePreview)
        let imagesShow = [];
        if(impagePreview != undefined)
        {
            for(let i = 0; i < impagePreview.length; i ++)
            {
                imagesShow.push(<div className = "img-show col-sm-3"><button type="button" onClick={this.animalImageDel.bind(this, i)} className="close">X</button><img src={impagePreview[i]} className="image-preview img-responsive img-thumbnail"/></div>);
            }
        }
       
		return (
            <div className="form-group">
                <label>Images of this Animal</label>
                <div className = "animal-img col-sm-12 row">{imagesShow}</div> 
                <Dropzone onDrop={this.onDrop.bind(this)} className={"file-drag-drop"}>
                    {
                        <div className="upload-section">
                            <img src={uploadBtnImage} className="upload-icon"/>
                                <div>
                                    <p className="file-upload-title">drag & drop <br/> Image or.</p>
                                    <button className="btn btn-file-upload">Choose files</button>
                                </div>
                            <img src={cameraImage} className="upload-icon"/>
                        </div>
                    }
                </Dropzone>
            </div>
		)
	}
}
