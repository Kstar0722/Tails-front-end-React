import './EditForm.scss'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {validationFields} from 'lib/helper'
import renderField from 'components/fieldForm'
import {updateProfile} from 'actions/profile'

const validate = values => {
  let fields = [
    {name: 'first_name', rules: ['required']},
    {name: 'last_name', rules: ['required']},
    {name: 'email', rules: ['required', 'email']}
  ];
  return validationFields(fields, values);
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
		const {handleSubmit, submitting} = this.props
		return (
			<form onSubmit={handleSubmit(this.submit.bind(this))} className="form-profile">
				<div className="row">
					
					<div className="col-6">
						
					</div>
					<div className="col-6">
						<Field name="first_name" type="text" component={renderField} label="First Name"/>
						<Field name="last_name" type="text" component={renderField} label="Last Name"/>
						<Field name="email" type="text" component={renderField} label="Email"/>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<Field name="password_reset" type="password" component={renderField} label="Password"/>
					</div>
					<div className="col-6">
						<Field name="confirm_password" type="password" component={renderField} label="Confirm Password"/>
					</div>
				</div>
				<div className="row">	
					<div className="col-12 justify-content-md-center">
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
    initialValues: state.profile.data
  }),
  {updateProfile}
)(EditForm)

export default EditForm