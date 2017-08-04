import './EditForm.scss'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {validationFields} from 'lib/helper'
import renderField from 'components/fieldForm'
import {updateProfile} from 'actions/profile'
import EditAvatar from './EditImage/EditAvatar'
import editImage from './EditImage/EditImage'

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
						 <Field name="cover_photo_new" image={profileUpdate.cover_photo} component={editImage} label={"Cover Photo"}/> 
						</div>       
					</div>
					<div className="col-6">
						<Field name="first_name" type="text" component={renderField} label="First Name"/>
						<Field name="last_name" type="text" component={renderField} label="Last Name"/>
						<Field name="email" type="text" component={renderField} label="Email"/>
						<Field name="password_reset" type="password" component={renderField} label="Password"/>
						<Field name="confirm_password" type="password" component={renderField} label="Confirm Password"/>
					</div>
				</div>
				<div className="row justify-content-center">	
					<div className="col-12 ">
						<button type="submit" className="btn btn-primary" disabled={submitting}>Save</button>
					</div>
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