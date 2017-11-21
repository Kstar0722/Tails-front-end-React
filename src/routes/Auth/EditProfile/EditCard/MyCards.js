import './MyCards.scss'
import { connect } from 'react-redux'

class MyCards extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		};
	}
  
	render() {
    let {profileUpdate} = this.props;
    let cards = profileUpdate.cards ? (profileUpdate.cards.cards && Array.isArray(profileUpdate.cards.cards)) ? profileUpdate.cards.cards : [] : [];
		return (
		  <div className="my-cc">
        <div className="container">
            <div className="row justify-content-center">
                {/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
                  {cards.map(card => 
                    <div className="item">
                        <div className="item-account"> 
                            <span>xxxx</span>
                            <span>xxxx</span>
                            <span>xxxx</span>
                            <span>{card.last4}</span>
                        </div>
                        <div className="item-validity">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                   
                                </div>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <div className="item-valid clearfix">
                                        <h5>EXPIRES END</h5>
                                        <span>{card.exp_month}/{card.exp_year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-cc-type clearfix">
                            <span className='card-brand'>{card.brand}</span>
                        </div>
                    </div>
                  )}
                {/* </div> */}
            </div>
        </div>
    </div>
		)
	}
}

MyCards = connect(
	state => ({
			profileUpdate: state.profile.data
	}),
	{}
)(MyCards)

export default MyCards