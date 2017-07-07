import './Logo.scss'

import { withRouter } from 'react-router'

class TextLogo extends React.Component {
	constructor(props) {
		super(props)
	}

	toHome() {
		this.props.router.push('/');
	}

	render() {
		return (
			<div id="logo">
				<p onClick={this.toHome.bind(this)}><span>Tails</span>Transport</p>
			</div>
		)
	}
}

export default TextLogo