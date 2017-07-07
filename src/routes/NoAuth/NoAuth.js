import './NoAuth.scss'

class NoAuth extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="unauthorized-wrap">
				{this.props.children}
			</div>
		)
	}
}

export default NoAuth