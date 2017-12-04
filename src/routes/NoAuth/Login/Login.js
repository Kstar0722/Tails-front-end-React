import './Login.scss'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import LogOutImg from 'assets/logout.png'
import arrowDown from 'assets/arrow_down.png'
import { Link } from 'react-router'
import renderField from '../../../components/renderField'
import {login, logout} from '../../../actions/auth'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover, PopoverTitle, PopoverContent  } from 'reactstrap'
import user from 'auth/user'
import { browserHistory } from 'react-router'
import AvatarEditor from 'react-avatar-editor'
import Notification from '../../../components/Notification/Notification'
import DefaultAvatar from 'assets/default_avatar.png'


const fields = ['email', 'password']

class Login extends Component {

	constructor(props) {
		super(props)
		this.state = {
			modal: false,
			auth: user.authorized,
			popoverOpen: false,
			profileImage: "",
			scale:1,
			dropdownOpen: false
		}

    	this.toggle = this.toggle.bind(this)
		this.logout = this.logout.bind(this)
		this.toggleDrop = this.toggleDrop.bind(this)
	}

	toggleDrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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

	goForgotPassword() {

		this.setState({
			modal: false
		});
		browserHistory.push('/forgot-password');
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
	goProfile(){
		browserHistory.push('/profile');
		this.setState({
			popoverOpen: false
		});
	}
	logout() {
		this.setState({
			popoverOpen: false
		});
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
		const userid = localStorage.getItem("userId");
		const userimg = localStorage.getItem("user_img");
		const zoom_amount = localStorage.getItem("zoom_amount")
		const first_name = localStorage.getItem("first_name");
		const last_name = localStorage.getItem("last_name");
		if(userid == undefined){
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

								</form>
								<div className="forgot-container">
									<a className="forgot-password" onClick={this.goForgotPassword.bind(this)}>Forgot password</a>
									<a className="sign-up" onClick={this.goSignUp.bind(this)}>Sign Up</a>
								</div>
							</div>
						</ModalBody>
					</Modal>
				</li>
			);
		} else {
			return <li className='style-li header-menu-profile'>
				<div className="avatar-wrap d-flex flex-row flex-wrap justify-content-between align-items-center">
					<img key={this.props.profile.avatar} className="styleImgAvatarLogin" src={this.props.profile.avatar ? this.props.profile.avatar : DefaultAvatar} alt=''/>
					{/*<AvatarEditor*/}
						{/*ref={this.setEditorRef}*/}
						{/*image={this.props.profile.avatar ? this.props.profile.avatar : userimg}*/}
						{/*width={60}*/}
						{/*height={60}*/}
						{/*border={0}*/}
						{/*position={{x:0.5,y:0.5}}*/}
						{/*disableDrop={true}*/}
						{/*color={[255, 255, 255, 0.6]} // RGBA*/}
						{/*scale={this.props.profile.zoom_amount? this.props.profile.zoom_amount : zoom_amount}*/}
					{/*/>*/}
					<Link to='/profile'>{this.props.profile.first_name ? this.props.profile.first_name : first_name} {this.props.profile.last_name ? this.props.profile.last_name : last_name}</Link>
					<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop}>
						<DropdownToggle
							tag="span"
							onClick={this.toggleDrop}
							data-toggle="dropdown"
							aria-expanded={this.state.dropdownOpen}
						>
							<img width='20' src = {arrowDown}></img>
						</DropdownToggle>
						<DropdownMenu right>
							<div className="afte-rec"></div>
							<div className="dropdown-item-menu">
								<Link to='/profile' style={{"padding-left": "45px"}}>My profile</Link>
							</div>
							<div onClick={this.logout.bind(this)} className="dropdown-item-menu"><img width="35" src={LogOutImg}/><a>Log Out</a></div>
						</DropdownMenu>
					</Dropdown>
					<Notification/>
				</div>
				{/* <img src={this.props.profile.avatar ? this.props.profile.avatar : userimg }  width="60" className="rounded-circle"/> */}


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

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  // For Dropdown usage inside a Nav
  nav: PropTypes.bool,
  tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  // For DropdownToggle usage inside a Nav
  nav: PropTypes.bool,
  // Defaults to Button component
  tag: PropTypes.any
};

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool, // default: true,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool // default: true
};

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
