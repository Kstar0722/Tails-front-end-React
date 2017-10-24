import './EditImage.scss'
import AvatarEditor from 'react-avatar-editor'
import DefaultAvatar from 'assets/default_avatar.png'

class EditAvatar extends React.Component {
	constructor(props) {
		super(props)
          this.state = {
                image: DefaultAvatar,
                scale: 1,
				originalImage: DefaultAvatar,
				newImage: "",
				xPosition: 0.5,
				yPosition: 0.5
			}
		
        this.onLoad = this.onLoad.bind(this);
    }

    handleNewImage = (e) => {
		this.setState({
			scale:1
		})
		let file = e.target.files[0];
        let _this = this;
        let reader = new FileReader();
        reader.onloadend = function() {
			_this.setState({ image: reader.result })
			_this.setState({ originalImage: reader.result })
            _this.props.input.onChange(reader.result)
        }
        reader.readAsDataURL(file)
	}

	handleScale = (e) => {
		const scale = parseFloat(e.target.value)
		this.props.action(scale)
        this.setState({ scale })
        this.onSave();
    }

    onSave(){

    }

    onLoad(info){
		console.log(info)
		this.setState({
			xPosition: info.x,
			yPosition: info.y
		})
        this.onSave()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.image != this.props.image){
            if (nextProps.image){
                this.setState({image: nextProps.image})
            }
		}
		if(nextProps.scale != this.props.scale){
            if (nextProps.scale){
                this.setState({scale: nextProps.scale})
            }
        }
    }

    componentWillMount() {
		
		if(this.props.image)
            this.setState({ image: this.props.image })
        if(this.props.originalImage) {
            this.setState({ originalImage: this.props.originalImage })
		}
		if(this.props.scale)
		{
			this.setState({scale: this.props.scale})
		}
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
					<div className="col justify-content-center align-self-center bottom-style">
						<label>Profile Image</label>
						<div className="justify-content-left align-self-center">
							{console.log('Img=====>',this.state.image)}
							<AvatarEditor
							ref={this.setEditorRef}
							image={this.state.image ? this.state.image : this.state.originalImage}
							width={175}
							height={175}
							border={0}
							color={[255, 255, 255, 0.6]} // RGBA
							scale={this.state.scale}
							rotate={0}
							crossOrigin="anonymous"
							borderRadius={100}
							onImageReady={this.onLoad}
							onPositionChange={this.onLoad}
							position={{ x: this.state.xPosition, y: this.state.yPosition }}
							onSave={this.onLoad}
						/>
						</div>
					</div>
					<div className="col justify-content-left align-self-center">
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
								value={this.state.scale}
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
