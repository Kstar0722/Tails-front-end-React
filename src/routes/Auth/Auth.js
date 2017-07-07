// Received functions and props from the Authorized container

import './Auth.scss'

// This will check to see if the user is authenticated, and then display the 
// back end side of the website if they are

class Auth extends React.Component {
	constructor(props) {
		super(props)
	}

	// Functions to check authentication - Set to false right now, 
	// to test if the container works as planned
	getAuthToken() {
		return false;
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
			this.props.goToLoginPage();
			return null;
		}
	}
}

export default Auth