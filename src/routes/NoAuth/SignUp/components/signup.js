import './signup.scss'
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import {register} from '../../../../actions/auth'
import renderField, { validateEmail, minLength } from '../../../../components/renderField'
const fields = ['firstName', 'lastName', 'email', 'password']

function validate(values) {
	var errors = {}
	var hasErrors = false
	if(!values.firstName || values.firstName.trim() === '') {
		errors.firstName = 'Enter First Name'
		hasErrors = true
	}
	if(!values.lastName || values.lastName.trim() === '') {
		errors.lastName = 'Enter Last Name'
		hasErrors = true
	}
	if(!values.password || values.password.trim() === '') {
		errors.password = 'Enter Password'
		hasErrors = true
	}
	if(!values.email || values.email.trim() === '') {
		errors.email = 'Enter Email'
		hasErrors = true
	}
	if(!values.confirmpassword || values.confirmpassword.trim() === '') {
		errors.confirmpassword = 'Enter confirmPass'
		hasErrors = true
	}
	if(values.password !== values.confirmpassword) {
		errors.confirmpassword = 'Dont match password'
		hasErrors = true
	}
	return hasErrors && errors
}

class signup extends Component {
	constructor(props) {
		super(props);
		
	}

	getStyles() {
		return {
			input: {
				width: '100%'
			},
			button: {
				width: '100%'
			}
		}
	}

	onSignUpUser(values, dispatch) {
		dispatch(register(values.firstName, values.lastName, values.email, values.password))
	}

	render() {
		const {handleSubmit, fields: {firstName, lastName, email, password}, submitting, token, loginActive} = this.props
  		const styles = this.getStyles()
		return (
			<section id="login-wrap">
				<div className="container">
					<div className="login-box">
						<div className="top-wrap">
							<p>Sign Up</p>
							<Link to="/" className="btn">X</Link>
						</div>
						<div className="form-wrap">
							<form onSubmit={handleSubmit(this.onSignUpUser)}>
								<Field
									name="firstName"
									type="name"
									component={renderField}
									label="First Name"
									placeholder="First Name"
									validate={[minLength(3)]}
									style={styles.input}/>
								<Field
									name="lastName"
									type="name"
									component={renderField}
									label="Last Name"
									placeholder="Last Name"
									validate={[minLength(3)]}
									style={styles.input}/>
								<Field
									name="email"
									type="email"
									component={renderField}
									label="Email"
									placeholder="Email"
									validate={[validateEmail]}
									style={styles.input}/>
								<Field 
									name="password"
									type="password"
									component={renderField}
									label="Password"
									placeholder="Password"
									style={styles.input}/>
								<Field 
									name="confirmpassword"
									type="password"
									component={renderField}
									label="Confirm Password"
									placeholder="Confirm Password"
									style={styles.input}/>
								<div style={styles.button}>
									<button
										type="submit"
										className="btn btn-success"
										disabled={submitting}>
										Sign Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>	
		)
	}
}

export default reduxForm({
	form: 'signup',
	fields,
	validate
})(signup)