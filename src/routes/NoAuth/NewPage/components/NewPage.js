import './NewPage.scss'

class NewPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="signup" className="signup-wrap">
				<div className="container">
					<div className="title">
						<h1>Sign Up</h1>
						<p>I want to...</p>
					</div>

					<div className="signup-buttons-group">
						<button className="button-ship">Ship</button>
						<button className="button-carrier">Be a Carrier</button>
					</div>
				</div>
			</div>
		)
	}
}

export default NewPage