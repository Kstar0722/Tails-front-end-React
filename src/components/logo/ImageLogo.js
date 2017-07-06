import './Logo.scss'
import logoImage from 'assets/tails-logo.png'


class ImageLogo extends React.Component {
	constructor(props) {
		super(props) 
	}

	render() {
		return (
			<div id="image-logo" className="d-flex flex-row flex-wrap align-items-center justify-content-start">
				<img src={logoImage} alt=""/>
				<p><span>Tails</span>Trailering</p>
			</div>
		)
	}
}
export default ImageLogo