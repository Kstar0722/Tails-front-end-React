import './signup.scss'
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import {register} from '../../../../actions/auth'
import renderField, { validateEmail, minLength } from '../../../../components/renderField'
import classNames from 'classnames'
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
		this.state = {
			showForm: true,
			btn_ship: false,
			btn_carrier: false
		}
		this.showForm = this.showForm.bind(this)
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

	showForm(btn){
		let state = {showForm: false, }
		if(btn === 'btn_ship'){
			state.btn_ship = true
			state.btn_carrier = false
		} else {
			state.btn_ship = false
			state.btn_carrier = true
		}
		this.setState(state)
	}

	onSignUpUser(values, dispatch) {
		dispatch(register(values.firstName, values.lastName, values.email, values.password))
	}

	render() {
		const {handleSubmit, fields: {firstName, lastName, email, password}, submitting, token, loginActive} = this.props
  		const styles = this.getStyles()
		return (
			<section id="signup-wrap">
				<div className="container">
					<div className="signup-box">
						<div className="label-wrap-signup">
							<h2>Sign Up</h2>
							<p>I want to ...</p>
						</div>
						<div className="btn-group" role="group" aria-label="...">
							<button type="button" className={classNames("btn btn-ship", { active: this.state.btn_ship })} onClick={this.showForm.bind(this, 'btn_ship')}>Ship</button>
							<button type="button" className={classNames("btn btn-carrier", { active: this.state.btn_carrier })} onClick={this.showForm.bind(this, 'btn_carrier')}>Be a Carrier</button>
						</div>
						<div className={classNames('form-wrap', { hidden: this.state.showForm })}>
							<form onSubmit={handleSubmit(this.onSignUpUser)}>
								<Field
									className="form-group label-floating is-empty is-focused"
									name="firstName"
									type="name"
									component={renderField}
									label="Your Name"
									dispayLabel={true}
									placeholder1="Your Name"
									validate={[minLength(3)]}
									style={styles.input}/>
								<Field
									className="form-group label-floating is-empty"
									name="email"
									type="email"
									component={renderField}
									label="Email"
									dispayLabel={true}
									placeholder1="Your Email"
									validate={[validateEmail]}
									style={styles.input}/>
								<Field
									name="password"
									type="password"
									component={renderField}
									label="Password"
									placeholder="Your Password"
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
										className="btn btn-success btn-submit"
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
