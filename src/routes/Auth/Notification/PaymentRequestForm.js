import React from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';
import { connect } from 'react-redux';
import { PayBid } from 'actions/listing_bids';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error_cart: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(ev){
    ev.preventDefault();
    this.setState({
      error_cart: null
    })
    let {user} = this.props;
    this.props.stripe.createToken({name: user.first_name + ' ' + user.last_name}).then(({token}) => {
      console.log('Received Stripe token:', token);
      if(token.id){
        this.props.PayBid(this.props.bid.id, token.id).then(() => {
          this.props.toggle();
        })
      } else {
        this.setState({error_cart: 'Something went wrong. Repeat again!'})
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
				<CardElement style={{base: {fontSize: '18px'}}} />

				<hr/>
				<button className='btn btn-create-listing block-btn blue'>Pay</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.profile.data
})

const mapDispatchToProps = dispatch => ({
  PayBid: (bid_id, token) => dispatch(PayBid(bid_id, token))
})

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm));