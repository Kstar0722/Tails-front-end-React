import './HomeView.scss'

import Banner from './parts/Banner'

import swirly from '../assets/page-background.png'
import trailer from '../assets/trailer.png'
import drivers from '../assets/drivers.png'
import jockies from '../assets/jockies.png'

class HomeView extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="home-wrap">
				<Banner />
				<div className="page-content" style={{backgroundImage: 'url('+swirly+')'}}>
					<div className="container-fluid">
						<div className="box-wrap">
							<ul className="d-flex flex-row justify-content-around align-items-start flex-wrap">
								<li>
									<p className="step">1</p>
									<p className="header">Quickly post where & when you need your animal(s).</p>
									<p className="sub-header">Whether it’s across town or across the country, we’ll help you get the right help.</p>
								</li>
								<li>
									<p className="step">2</p>
									<p className="header">Our extensive animal-loving community will bid on your job.</p>
									<p className="sub-header">Know who’s bidding via an extensive rating and profile system.</p>
								</li>
								<li>
									<p className="step">3</p>
									<p className="header">Pay the lowest price, safely and securely through our service.</p>
									<p className="sub-header">We use an escrow system to help ensure both parties are satisfied.</p>
								</li>
							</ul>
						</div>
						<div className="big-text">
							<p className="to-go">Get them <span>where you need to go</span></p>
							<p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
							Optio doloremque corporis eius. Natus quibusdam impedit cumque voluptatibus in non quo! 
							Consectetur, sit itaque cumque illo modi voluptate ipsa temporibus perspiciatis.</p>
							<button className="solid-button orange">Get Started</button>
						</div>
						<div className="trailer-wrap d-flex flex-column align-items-center justify-content-start">
							<img src={trailer} alt=""/>
							<div className="circle-wrap">
								<div className="circle g1"></div>
								<div className="circle g2"></div>
								<div className="circle g3"></div>
							</div>
						</div>
					</div>
					<div className="quarters-wrap">
						<div className="flex-row">
							<div className="half hide-on-mobile" style={{backgroundImage: 'url('+jockies+')'}}></div>
							<div className="half">
								<div className="more-info">
									<p className="header">Reliable transportation</p>
									<p className="desc">Lorem ipsum dolor sit amet, 
									consectetur adipisicing elit. Explicabo nam, vel 
									molestiae pariatur quas, magnam soluta. Alias 
									excepturi maiores eveniet accusamus in, optio 
									accusantium molestiae dignissimos distinctio architecto asperiores sapiente.</p>
									<button className="border-button orange">For Animal Owners</button>
								</div>
							</div>
						</div>
						<div className="flex-row">
							<div className="half">
								<div className="more-info">
									<p className="header">Earn extra cash</p>
									<p className="desc">Lorem ipsum dolor sit amet, 
									consectetur adipisicing elit. Explicabo nam, vel 
									molestiae pariatur quas, magnam soluta. Alias 
									excepturi maiores eveniet accusamus in, optio 
									accusantium molestiae dignissimos distinctio architecto asperiores sapiente.</p>
									<button className="border-button orange">For Transporters</button>
								</div>
							</div>
							<div className="half img-right hide-on-mobile" style={{backgroundImage: 'url('+drivers+')'}}></div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default HomeView
