import './ForgotPassword.scss'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import renderField from '../../../components/renderField'
import {login, forgotpass} from 'actions/auth'

const fields = ['email', 'password']

class ForgotPassword extends Component {

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

	onForgotPassword(values, dispatch) {
		dispatch(forgotpass(values.email))
	}

  	render() {
  		const {handleSubmit, fields: {email, password}, submitting, token, loginActive} = this.props
  		const styles = this.getStyles()
		return (
			<section id="forgot-wrap">
				<div className="container">
					<div className="login-box">
						<div className="login-header">
							<div className="label-wrap">
								<p>Forgot Password</p>
							</div>
							<div className="close-wrap">
								<Link to="/" className="btn close">X</Link>
							</div>
						</div>
						<div className="form-wrap">
							<form onSubmit={handleSubmit(this.onForgotPassword)}>
								<Field
									name="email"
									type="email"
									component={renderField}
									label="Email"
									placeholder="Email"
									style={styles.input}/>
								<div style={styles.button}>
									<button
										type="submit"
										className="btn btn-success"
										disabled={submitting}>
										Send
									</button>
								</div>
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
	form: 'forgot',
	fields,
})(ForgotPassword)
