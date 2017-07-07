import './Auth.scss'

class Auth extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="authorized-wrap">
				{this.props.children}
			</div>
		)
	}
}

export default Auth