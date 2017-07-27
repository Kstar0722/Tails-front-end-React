import './Login.scss'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import renderField from '../../../components/renderField'
import {login} from '../../../actions/auth'
export const fields = ['email', 'password']

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentWillMount() {

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

	validateAndSignInUser(values, dispatch) {
		console.log(values)
		// dispatch(login(values.email, values.password))
	}
	
  	render() {
  		const {handleSubmit, fields: {email, password}, submitting, token, loginActive} = this.props
  		const styles = this.getStyles()
		return (
			<section id="login-wrap">
				<div className="container">
					<div className="login-box">
						<div className="top-wrap">
							<p>Login</p>
							<Link to="/" className="btn">X</Link>
						</div>
						<div className="form-wrap">
							<form onSubmit={handleSubmit(this.validateAndSignInUser)}>
								<Field
									name="email"
									type="email"
									component={renderField}
									label="Email"
									placeholder="Email"
									style={styles.input}/>
								<Field 
									name="password"
									type="password"
									component={renderField}
									label="Password"
									placeholder="Password"
									style={styles.input}/>
								<div style={styles.button}>
									<button
										type="submit"
										className="btn btn-success"
										disabled={submitting}>
										Login
									</button>
								</div>
								<label htmlFor=""><input type="checkbox"/>Remember Me</label>
								<button className="forgot-password" onClick={this.props.toForgot}>Forgot your password?</button>
							</form>
						</div>
					</div>
				</div>
			</section>	
		);
  	}
}

const mapStateToProps = state => ({
	// token: tokenSelector(state),
	// pending: tokenPendingSelector(state)
})

export default reduxForm({
	form: 'login',
	fields,
})(Login)