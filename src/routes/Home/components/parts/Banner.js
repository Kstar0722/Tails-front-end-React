import './Banner.scss'

import horsey from 'assets/horse-banner.png'

class Banner extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="banner" style={{ "backgroundImage": 'linear-gradient(rgba(0, 0, 0, .6), rgba(0,0,0,.3), rgba(0,0,0,.5)), url(' + horsey + ')' }}>
				<div className="container">
					<div className="banner-content">
						<p className="title">Animal Transport <span className="little-italic">for all</span></p>
						<div className="yellow-bar"></div>
						<p className="motto">We make transporting livestock cheap and easy by helping people directly connect with trailer owners.</p>
						<div className="button-wrap d-flex flex-row flex-wrap justify-content-center align-items-center">
							<button className="solid-button blue">Get Started</button>
							<button className="border-button white"><i className="fa fa-play" aria-hidden="true"></i>Watch Video</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Banner