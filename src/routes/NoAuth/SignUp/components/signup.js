import './signup.scss'

class signup extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<section id="signup-process">
				<div className="container">
					<div className="step-1">
						<div className="step-title">
							<h1>Sign Up</h1>
						</div>
						<div className="step-description">
							<p>I want to...</p>
						</div>
						<div className="buttons-wrap">
							<button className="orange">Ship</button>
							<button>Be a Carrier</button>
						</div>
					</div>
					<div className="step-2">
						<form>
							<label className="has-float-label">
								<input type="name" placeholder="Your Name"/>
								<span>Your Name</span>
							</label>

							<label className="has-float-label">
								<input type="email" placeholder="email@example.com"/>
								<span>Your Email</span>
							</label>

							<label className="has-float-label">
								<input type="password" placeholder="••••••••"/>
								<span>Your Password</span>
							</label>

							<label className="has-float-label">
								<input type="password" placeholder="••••••••"/>
								<span>Confirm Password</span>
							</label>

							<button>Sign up</button>
						</form>
					</div>
				</div>
			</section>
		)
	}
}

export default signup;