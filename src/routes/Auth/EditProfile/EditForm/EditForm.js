import './EditForm.scss'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {validationFields} from 'lib/helper'
import renderField from 'components/fieldForm'
import checkboxField from 'components/checkboxField'
import {updateProfile} from 'actions/profile'
import EditAvatar from './EditImage/EditAvatar'
import EditImage from './EditImage/EditImage'
import config from 'config'

const validate = values => {
	let errors = {}
  let fields = [
    {name: 'first_name', rules: ['required']},
    {name: 'last_name', rules: ['required']},
    {name: 'email', rules: ['required', 'email']}
  ];
	errors = validationFields(fields, values);
	if(values.password){
		if(values.password_reset !== values.confirm_password)
			errors.confirm_password = 'Password do not match';
	}
	console.log('error',errors)
	return errors;
};

class EditForm extends React.Component {
	constructor(props) {
		super(props)
	}


	submit(values){
		console.log(values)
		this.props.updateProfile(values)
	}

	render() {
		const {handleSubmit, submitting, profileUpdate} = this.props
		return (
			<form onSubmit={handleSubmit(this.submit.bind(this))} className="form-profile">
				<div className="row">
					<div className="col-6">
						<div className="row">
						 <Field name="avatar_new" image={profileUpdate.avatar} component={EditAvatar} label={"Profile Image"}/>       
						 <Field name="cover_photo_new" image={profileUpdate.cover_photo} component={EditImage} label={"Cover Photo"}/> 
						</div>       
					</div>
					<div className="col-6">
						<Field name="first_name" type="text" component={renderField} label="First Name"/>
						<Field name="last_name" type="text" component={renderField} label="Last Name"/>
						<Field name="email" type="text" component={renderField} label="Email"/>
						<Field name="password_reset" type="password" component={renderField} label="Password"/>
						<Field name="confirm_password" type="password" component={renderField} label="Confirm Password"/>
						<div className="form-group">
							<label>Connect your Facebook.com Account</label>
							{this.props.initialValues.facebook_id ? 
							<a href={'https://www.facebook.com/' + this.props.initialValues.facebook_id} className="facebook-account">Account Facebook</a> :
							<a className='btn btn-primary facebook-connect' href={config.endpoints.url + '/auth/facebook?token=' + window.localStorage.getItem('authToken')}>
								<i className="fa fa-facebook" aria-hidden="true"></i> Connect Facebook
							</a>}
						</div>
						<label>Primery account type</label>
						<div className="row">
							<div className="col-6">
								<Field name="be_a_cerrier" component={checkboxField} label="I need things shipped"/>
							</div>
							<div className="col-6">
								<Field name="ship" component={checkboxField} label="I want to ship"/>
							</div>
						</div>						
					</div>
				</div>
				<div className="row justify-content-center">	
					<button type="submit" className="btn btn-primary save-profile" disabled={submitting}>Save</button>
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
		profileUpdate: state.profile.data
  }),
  {updateProfile}
)(EditForm)

export default EditForm