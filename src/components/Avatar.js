import './Avatar.scss'
import AvatarEditor from 'react-avatar-editor'
import DefaultAvatar from 'assets/default_avatar.png'

class Avatar extends React.Component {
  constructor (props) {
    super(props)

    // The state is just temporary until we pull that data from an API
    this.state = {
      fName: 'Firstname',
      lName: 'Lastname',
      image: null,
    }
  }

  render () {

    if (this.props.type == 'large') {
      return (
        <div
          className="avatar-wrap d-flex flex-row flex-wrap justify-content-between align-items-center">
          <img key={this.props.profile.avatar} className="styleImgAvatar"
               src={this.props.profile.avatar
                 ? this.props.profile.avatar
                 : DefaultAvatar} alt=''/>
          {/*<AvatarEditor*/}
          {/*ref={this.setEditorRef}*/}
          {/*image={this.props.profile.avatar ? this.props.profile.avatar : "https://placeholdit.co//i/175x175?"}*/}
          {/*width={175}*/}
          {/*height={175}*/}
          {/*position={{x:0.5,y:0.5}}*/}
          {/*border={0}*/}
          {/*color={[255, 255, 255, 0.6]} // RGBA*/}
          {/*scale={this.props.profile.zoom_amount}	*/}
          {/*/>*/}
          <h2>{this.props.profile.first_name} {this.props.profile.last_name}</h2>

        </div>
      )
    }
    else {
      return null
    }
  }
}

export default ReactRedux.connect(
  (state) => { return {profile: state.profile.data}}, {})(Avatar)
