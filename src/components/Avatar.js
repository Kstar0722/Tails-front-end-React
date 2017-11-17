import './Avatar.scss'

class Avatar extends React.Component {
	constructor(props) {
		super(props);

		// The state is just temporary until we pull that data from an API
		this.state = {
			fName: "Firstname",
			lName: "Lastname",
			image: null
		}
	}

	render() {

		if (this.props.type == "large") {
			return (
				<div className="avatar-wrap d-flex flex-row flex-wrap justify-content-between align-items-center">
					<img src="https://placeholdit.co//i/175x175?" />
					<h2>{this.state.fName} {this.state.lName}</h2>
				</div>
			)
		}
		else {
			return null;
		}
	}
}

export default Avatar