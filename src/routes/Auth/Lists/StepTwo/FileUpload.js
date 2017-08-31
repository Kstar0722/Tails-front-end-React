import Dropzone from 'react-dropzone'
import _ from 'lodash'
import uploadBtnImage from 'assets/upload.png'
import cameraImage from 'assets/camera.png'

export default class FileUpload extends React.Component {
	
	constructor(props) {
        super(props)
    }

    onDrop(files) {
        this.props.onDrop(files)
    }

	render() {
        const {
            impagePreview
        } = this.props
        
		return (
            <div className="form-group">
                <label>Images of this Animal</label>
                <Dropzone onDrop={this.onDrop.bind(this)} className={impagePreview ? "file-drag-drop no-dash" : "file-drag-drop"  }>
                    {
                        impagePreview
                            ? <img 
                                src={impagePreview}
                                className="image-preview img-responsive img-thumbnail"/>
                            : <div className="upload-section">
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
