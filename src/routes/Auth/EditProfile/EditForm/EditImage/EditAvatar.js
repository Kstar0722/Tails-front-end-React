import './EditImage.scss'
import AvatarEditor from 'react-avatar-editor'
import DefaultAvatar from 'assets/default_avatar.png'

class EditAvatar extends React.Component {
	constructor(props) {
        super(props)
          this.state = {
                image: DefaultAvatar,
                scale: 1,
                originalImage: DefaultAvatar
            }
        this.onLoad = this.onLoad.bind(this);
    }

    handleNewImage = (e) => {
        this.setState({ image: e.target.files[0] })
        this.setState({ originalImage: e.target.files[0] })
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.onload = function(base64) {
            localStorage["file"] = base64
        }
        reader.readAsDataURL(file)
        // this.onSave();
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
            this.setState({ image: this.props.image })
        if(this.props.originalImage) {
            this.setState({ originalImage: this.props.originalImage })
        }
       // this.getPhoto()
	}

    setEditorRef = (editor) => this.editor = editor

    getPhoto() {
        var base64 = localStorage["file"]
        const base64Parts = base64.split(",")
        const fileFormat = base64Parts[0].split(";")[1]
        const fileContent = base64Parts[1]
        const file = new File([fileContent], "file name here", {type: fileFormat})
    }
	render() {
		return (
			<div className="col-12">
				<div className="row image-edit">
					<div className="col justify-content-center align-self-center">
						<label>Profile Image</label>
						<div className="justify-content-left align-self-center">
						<AvatarEditor
							ref={this.setEditorRef}
							image={this.props.image ? this.props.image : this.state.originalImage}
							width={175}
							height={175}
							border={0}
							color={[255, 255, 255, 0.6]} // RGBA
							scale={this.state.scale}
							rotate={0}
							crossOrigin="anonymous"
							borderRadius={100}
							disableDrop={true}
							onImageReady={this.onLoad}
							onPositionChange={this.onLoad}
							onSave={this.onLoad}
						/>
						</div>
					</div>
					<div className="col justify-content-center align-self-center">
						<div className="row justify-content-center align-self-center">
							<label className="btn btn-primary new_file">
								Upload New images
								<input
								style={{display: 'none'}}
								name='newImage'
								type='file'
								onChange={this.handleNewImage}
								/>
							</label>

							<input
								name='scale'
								type='range'
								onChange={this.handleScale}
								min='1'
								max='2'
								step='0.01'
								defaultValue='1'
							/>
							<p>Zoom Image</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EditAvatar
