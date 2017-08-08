import './EditImage.scss'
import AvatarEditor from 'react-avatar-editor'
import DefaultCover from 'assets/stock-banner.png'

class EditImage extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            image: '',
            scale: 1
        }
        this.onLoad = this.onLoad.bind(this);
    }
    
    handleNewImage = (e) => {
        let file = e.target.files[0];
        let _this = this;
        let reader = new FileReader();
        reader.onloadend = function() {
            _this.setState({ image: reader.result })
            _this.props.input.onChange(reader.result)
        }
        reader.readAsDataURL(file)
	}
	
	handleScale = (e) => {
        const scale = parseFloat(e.target.value)
        this.setState({ scale })
        this.onSave();
    }

    onSave(){
        let input = this.props.input;
        if (this.editor) {
            console.log('this.editor',this.editor)
            const canvasScaled = this.editor.getImageScaledToCanvas()
            input.onChange(canvasScaled.toDataURL())
        }
    }

    onLoad(info){
        this.onSave()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.image != this.props.image){
            if (nextProps.image){
                this.setState({image: nextProps.image})
            }
        }
    }

    componentWillMount() {
        if(this.props.image)
            this.setState({
                image: this.props.image
            })
	}

    setEditorRef = (editor) => this.editor = editor

	render() {
		return (
			<div className="row image-edit">
                
                <div className="col-12">
                    <label>Cover Photo</label>
                    {this.state.image == '' ?
                        <div className="row justify-content-center align-self-center not-cover-photo"><p>Cover photo</p></div> : 
                        <div className="cover-photo" style={{backgroundImage: "url(" + this.state.image + ")"}}></div>
                    }
                </div>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <label className="btn btn-primary new_file"> 
                            Upload New images
                            <input
                                style={{display: 'none'}}
                                name='newImage'
                                type='file'
                                onChange={this.handleNewImage}
                            />
                        </label>
                    </div>
                </div>
            </div>
		)
	}
}

export default EditImage