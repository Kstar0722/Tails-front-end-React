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
        this.setState({
            scale: 1
        })
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
        this.props.action(scale)
        this.setState({ scale })
        this.onSave();
    }

    onSave(){
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
        if(nextProps.scale != this.props.scale){
            if (nextProps.scale){
                this.setState({scale: nextProps.scale})
            }
        }
    }

    componentWillMount() {
        if(this.props.image)
            this.setState({
                image: this.props.image
        })
        if(this.props.scale)
        {
            this.setState({
                scale: this.props.scale
            })
        }
	}

    setEditorRef = (editor) => this.editor = editor

	render() {
		return (
			<div className="col-12">
				<div className="row image-edit">
					<div className="col-12">
						<div className="row">
							<div className="col-12">
								<label>Cover Photo</label>
								<div className="justify-content-left align-self-center">
                                    <AvatarEditor
                                        ref={this.setEditorRef}
                                        image={this.state.image ? this.state.image : ""}
                                        width={470}
                                        height={175}
                                        border={0}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                        scale={this.state.scale}
                                        rotate={0}
                                        crossOrigin="anonymous"
                                        borderRadius={0}
                                        disableDrop={true}
                                        onImageReady={this.onLoad}
                                        onPositionChange={this.onLoad}
                                        onSave={this.onLoad}
                                    />
                                </div>
							</div>
						</div>

						<div className="row col-12">
							
								<div className="col justify-content-center align-self-center">
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
                                <div className="col justify-content-center align-self-center">
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
			</div>
		)
	}
}

export default EditImage
