import './EditForm.scss'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validationFields } from 'lib/helper'
import renderField from 'components/fieldForm'
import checkboxField from 'components/checkboxField'
import { updateProfile } from 'actions/profile'
import EditAvatar from './EditImage/EditAvatar'
import EditImage from './EditImage/EditImage'
import config from 'config'
import ProWheel from 'components/ProWheel'

const validate = values => {
  let errors = {}
  let fields = [
    {name: 'first_name', rules: ['required']},
    {name: 'last_name', rules: ['required']},
    {name: 'email', rules: ['required', 'email']},
  ]
  errors = validationFields(fields, values)
  if (values.password) {
    if (values.password_reset !== values.confirm_password)
      errors.confirm_password = 'Password do not match'
  }
  //console.log('error',errors)
  return errors
}

class EditForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      saveWaitFlag: false,
      zoom_amount: 1,
      cover_zoom_amount: 1,
    }
    this.profileImageScale = this.profileImageScale.bind(this)
    this.coverphotoScale = this.coverphotoScale.bind(this)
  }

  submit (values) {

    this.setState({
      saveWaitFlag: true,
    })

    values.zoom_amount = this.state.zoom_amount
    values.cover_zoom_amount = this.state.cover_zoom_amount
    let self = this
    var flag = this.props.updateProfile(values).then(function () {
      self.setState({
        saveWaitFlag: false,
      })
    })

  }

  profileImageScale (scale) {

    if (scale) {
      this.setState({
        zoom_amount: scale,
      })
    }
  }

  coverphotoScale (scale) {
    if (scale) {
      this.setState({
        cover_zoom_amount: scale,
      })
    }
  }

  render () {
    const {handleSubmit, submitting, profileUpdate} = this.props
    //	console.log("profileUpdate==========dddddddd==>", this.props)
    localStorage.setItem('user_img', this.props.profileUpdate.avatar)
    localStorage.setItem('first_name', this.props.profileUpdate.first_name)
    localStorage.setItem('last_name', this.props.profileUpdate.last_name)
    return (
      this.state.saveWaitFlag ? <ProWheel/> :
        <form onSubmit={handleSubmit(this.submit.bind(this))}
              className="form-profile">
          <div className="row">
            <div className="col justify-content-center align-self-center">
              <div className="row">
                <Field
                  action={this.profileImageScale}
                  name="avatar_new"
                  image={profileUpdate.avatar_original}
                  scale={profileUpdate.zoom_amount}
                  originalImage={profileUpdate.avatar_original}
                  position_x={profileUpdate.position_x}
                  position_y={profileUpdate.position_y}
                  component={EditAvatar}
                  label={'Profile Image'}
                  rootChange={this.props.change}
                />
                <Field
                  action={this.coverphotoScale}
                  name="cover_photo_new"
                  scale={profileUpdate.cover_zoom_amount}
                  image={profileUpdate.cover_photo}
                  component={EditImage}
                  label={'Cover Photo'}
                  rootChange={this.props.change}/>
              </div>
            </div>
            <div className="col justify-content-center align-self-center">
              <Field name="first_name" type="text" component={renderField}
                     label="First Name"/>
              <Field name="last_name" type="text" component={renderField}
                     label="Last Name"/>
              <Field name="email" type="text" component={renderField}
                     label="Email"/>
              <Field name="password_reset" type="password"
                     component={renderField} label="Password"/>
              <Field name="confirm_password" type="password"
                     component={renderField} label="Confirm Password"/>
              {/*<div className="form-group">*/}
                {/*<label>Connect your Facebook.com Account</label>*/}
                {/*{this.props.initialValues.facebook_id ? <a*/}
                    {/*href={'https://www.facebook.com/' +*/}
                    {/*this.props.initialValues.facebook_id}*/}
                    {/*className="facebook-account">Account Facebook</a> :*/}
                  {/*<a className='btn btn-primary facebook-connect'*/}
                     {/*href={config.endpoints.url + '/auth/facebook?token=' +*/}
                     {/*window.localStorage.getItem('authToken')}>*/}
                    {/*<i className="fa fa-facebook" aria-hidden="true"></i>*/}
                    {/*Connect Facebook*/}
                  {/*</a>}*/}
              {/*</div>*/}
              <label>Primery account type</label>
              <div className="row">
                <div className="col-6">
                  <Field name="be_a_carrier" component={checkboxField}
                         label="I need things shipped"/>
                </div>
                <div className="col-6">
                  <Field name="ship" component={checkboxField}
                         label="I want to ship"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn save-profile block-btn blue"
                    disabled={submitting}>Save
            </button>
          </div>
        </form>
    )
  }
}

EditForm = reduxForm({
  form: 'editProfile',
  enableReinitialize: true,
  validate,
})(EditForm)

EditForm = connect(
  state => ({
    initialValues: state.profile.data,
    profileUpdate: state.profile.data,
  }),
  {updateProfile},
)(EditForm)

export default EditForm
