import './Logo.scss'

import { browserHistory } from 'react-router'

class TextLogo extends React.Component {
	constructor(props) {
		super(props);

		this.toHome = this.toHome.bind(this);
	}

	toHome() {
		browserHistory.push('/');
	}

	render() {
		return (
			<div id="logo">
				<p onClick={this.toHome}><span>Tails</span>Transport</p>
			</div>
		)
	}
}

export default TextLogo