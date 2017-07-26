import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogInForm from './LogInForm';

// import { loginUser } from '../actions/authActions';

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentWillMount() {
	    this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleSubmit(values) {
		console.log(values)
		// let { dispatch, history } = this.props
		// const {email, password} = values
		// dispatch(loginUser.request(email, password, history));
	}

  	render() {
  		let pending = false
		return (
			<div className="login-container">
				<LogInForm
					onSubmit={this.handleSubmit}
					isFetching={pending}
				/>	
			</div>
		);
  	}
}

const mapStateToProps = state => ({
	// token: tokenSelector(state),
	// pending: tokenPendingSelector(state)
})

export default connect(mapStateToProps)(Login);
