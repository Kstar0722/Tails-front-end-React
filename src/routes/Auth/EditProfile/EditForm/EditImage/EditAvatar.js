import './EditImage.scss'
import AvatarEditor from 'react-avatar-editor'

class EditAvatar extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            image: './assets/default_avatar.png',
            scale: 1
        }
        this.onLoad = this.onLoad.bind(this);
    }
    
    handleNewImage = (e) => {
        this.setState({ image: e.target.files[0] })
        this.onSave();
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

    setEditorRef = (editor) => this.editor = editor

	render() {
		return (
			<div className="row avatar-edit">
                <div className="col justify-content-center align-self-center">
                <AvatarEditor
                    ref={this.setEditorRef}
                    image={this.state.image}
                    width={175}
                    height={175}
                    border={0}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={this.state.scale}
                    rotate={0}
                    borderRadius={100}
                    disableDrop={true}
                    onImageReady={this.onLoad}							
                    onPositionChange={this.onLoad}
                    onSave={this.onLoad}													 
                />
                </div>
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
		)
	}
}

export default EditAvatar