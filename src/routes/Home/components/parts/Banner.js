import './Banner.scss'

import horsey from 'assets/horse-banner.png'

import BannerVid from 'assets/stock-semi.mp4'

class Banner extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="banner" >
				<video src={BannerVid} className="banner-video" type="video/mp4" autoPlay muted loop playsInline></video>
				<div className="vignette"></div>
				<div className="container">
					<div className="banner-content">
						<p className="title">Animal Transport <span className="little-italic">for all</span></p>
						<div className="yellow-bar"></div>
						<p className="motto">We make transporting livestock cheap and easy by helping people directly connect with trailer owners.</p>
						<div className="button-wrap d-flex flex-row flex-wrap justify-content-center align-items-center">
							<button className="solid-button blue">Get Started</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Banner