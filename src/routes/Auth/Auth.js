// Received functions and props from the Authorized container

import './Auth.scss'
import user from 'auth/user'
import { connect } from 'react-redux'
import { getProfile } from 'actions/profile'
import { browserHistory } from 'react-router'
import socket from 'auth/socket'

// This will check to see if the user is authenticated, and then display the
// back end side of the website if they are

class Auth extends React.Component {
	constructor(props) {
		super(props)
		this.getAuthToken = this.getAuthToken.bind(this)
		if(user.authorized) {
			socket.connect();
		}
	}

	// Functions to check authentication - Set to false right now,
	// to test if the container works as planned
	getAuthToken() {
		if(user.authorized){
			if(parseInt(user.id) != parseInt(this.props.profile.data.id)){
				this.props.getProfile(user.id)
			}
			return true;
		} else {
			return false;
		}
	}

	goToHome(){
		browserHistory.push('/');
	}

	render() {
		if(this.getAuthToken()) {
			return (
				<div className="authorized-wrap">
					{this.props.children}
				</div>
			)
		}
		else {
			this.goToHome();
			return null;
		}
	}
}

export default connect((state) => {return state}, { getProfile })(Auth)
