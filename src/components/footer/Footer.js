import './Footer.scss'

// import ImageLogo from 'components/logo/ImageLogo'

import TextLogo from 'components/logo/TextLogo'

import { Link } from 'react-router'

class Footer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="footer" className="d-flex align-items-center">
				<div className="container">
					<div className="footer-content d-flex flex-row flex-wrap justify-content-between align-items-center">
					<TextLogo color="white"/>
						<nav className="hide-on-mobile">
							<ul className="d-flex flex-row flex-wrap align-items-center justify-content-around">
								<li><Link to='/browse-jobs'>Browse Jobs</Link></li>
								<li><Link to='/how-it-works'>How it Works</Link></li>
								<li><Link to='/faq'>FAQ</Link></li>
								<li><Link to='/support'>Support</Link></li>
								<li className="sign-up"><Link className="hover-slide" to="/sign-up">Sign Up</Link></li>
							</ul>
						</nav>
					</div>
					<nav className="mobile-nav">
						<ul className="d-flex flex-row flex-wrap align-items-center justify-content-around">
							<li><Link to='/browse-jobs'>Browse Jobs</Link></li>
							<li><Link to='/how-it-works'>How it Works</Link></li>
							<li><Link to='/faq'>FAQ</Link></li>
							<li><Link to='/support'>Support</Link></li>
							<li className="sign-up"><Link to="/sign-up">Sign Up</Link></li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}

export default Footer