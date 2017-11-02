import CheckoutForm from './PaymentRequestForm'
import {Elements} from 'react-stripe-elements';
class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <Elements>
          <CheckoutForm bid={this.props.bid} toggle={this.props.toggle}/>
        </Elements>
      </div>
    )
  }
}

export default Checkout;