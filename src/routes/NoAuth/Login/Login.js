import './Login.scss'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import renderField from '../../../components/renderField'
import {login, logout} from '../../../actions/auth'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap'
import user from 'auth/user'
import { browserHistory } from 'react-router'

const fields = ['email', 'password']

class Login extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
			auth: user.authorized,
			dropdownOpen: false
		}

    	this.toggle = this.toggle.bind(this)
		this.logout = this.logout.bind(this)
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
		dispatch(login(values.email, values.password))
		this.setState({
			modal: !this.props.auth.authorized,
			auth: user.authorized
		});
	}
	
	forgotPassword() {
		
	}

	goSignUp() {
		this.setState({
			modal: false
		});
		browserHistory.push('/sign-up');
	}

	toggle(type) {
		this.setState({
			[type]: !this.state[type]
		});
	}

	logout() {
		user.logout()
		this.props.dispatch(logout())
		this.setState({
			modal: false,
			auth: false
		});
		browserHistory.push('/');
	}

  	render() {
  		const {handleSubmit, fields: {email, password}, submitting, token, loginActive} = this.props
		const styles = this.getStyles()
		if(!this.props.auth.authorized){
			return (
				<li className="sign-in" onClick={this.toggle.bind(this, 'modal')}>
					<a>Sign In</a>
					<Modal isOpen={this.state.modal} toggle={this.toggle.bind(this, 'modal')} className={'modal-sign-in'}>
						<ModalHeader toggle={this.toggle.bind(this, 'modal')}>Login</ModalHeader>
						<ModalBody>
							<div className="form-wrap">
								<form onSubmit={handleSubmit(this.validateAndSignInUser.bind(this))}>
									<Field
										name="email"
										type="email"
										component={renderField}
										dispayLabel={true}
										label="Email"
										placeholder="Email"
										style={styles.input}/>
									<Field 
										name="password"
										type="password"
										component={renderField}
										dispayLabel={true}
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
									<div className="forgot-container">
										<button className="forgot-password" onClick={this.forgotPassword.bind(this)}>Forgot password</button>
										<button className="forgot-password" onClick={this.goSignUp.bind(this)}>Sign Up</button>
									</div>
								</form>
							</div> 
						</ModalBody>
					</Modal>
				</li>
			);
		} else {
			return <li>
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this, 'dropdownOpen')}>
					<div
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded={this.state.dropdownOpen}
						className="menu-profile"
					>
					 {this.props.profile.avatar ? <img src={this.props.profile.avatar} width="60" className="rounded-circle"/> : null}
					 <Link to='/profile'>{this.props.profile.first_name} {this.props.profile.last_name}</Link>
					</div>
					<DropdownMenu right>
						<DropdownItem>Logout</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</li>
		}
  	}
}

Login.propTypes = {
  isOpen:  PropTypes.bool,
  // boolean to control the state of the popover
  toggle:  PropTypes.func,
  // callback for toggling isOpen in the controlling component
  size: PropTypes.string,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  keyboard: PropTypes.bool,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
}

Login = connect(
  state => ({
	auth: state.auth,
	profile: state.profile.data
  }),
  {}
)(Login)

Login = reduxForm({
	form: 'login',
	fields,
})(Login)

export default Login