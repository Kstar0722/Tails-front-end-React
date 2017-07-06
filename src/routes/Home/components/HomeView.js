import './HomeView.scss'

import Banner from './parts/Banner'

class HomeView extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="home-wrap">
				<Banner />
				<div className="page-content">
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
					</div>
				</div>
			</section>
		)
	}
}

export default HomeView
