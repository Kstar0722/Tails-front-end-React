import './Header.scss'
import TextLogo from 'components/logo/TextLogo'

import { Link } from 'react-router'

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="header" className="d-flex align-items-center">
				<div className="container">
					<div className="header-content d-flex flex-row flex-wrap justify-content-between align-items-center">
						<TextLogo />
						<nav className="hide-on-mobile">
							<ul className="d-flex flex-row flex-wrap align-items-center justify-content-around">
								<li><Link to='/browse-jobs'>Browse Jobs</Link></li>
								<li><Link to='/how-it-works'>How it Works</Link></li>
								<li><Link to='/faq'>FAQ</Link></li>
								<li><Link to='/support'>Support</Link></li>
								<li className="sign-in"><Link className="hover-slide" to="/sign-in">Sign In</Link></li>
							</ul>
						</nav>
					</div>
					<nav className="mobile-nav">
						<ul className="d-flex flex-row flex-wrap align-items-center justify-content-around">
							<li><Link to='/browse-jobs'>Browse Jobs</Link></li>
							<li><Link to='/how-it-works'>How it Works</Link></li>
							<li><Link to='/faq'>FAQ</Link></li>
							<li><Link to='/support'>Support</Link></li>
							<li className="sign-in"><Link to="/sign-in">Sign In</Link></li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}

export default Header