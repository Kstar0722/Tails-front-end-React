import './BidItem.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {StripeProvider} from 'react-stripe-elements';
import Checkout from './Checkout'

class Payment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      modal: false
		};
		
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

	render() {
	
		return (
			<span>
				<Button color="danger" onClick={this.toggle}>Pay</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Payment</ModalHeader>
          <ModalBody>
            <StripeProvider apiKey="pk_test_qTO5U0NlOMwzO99Db9XSBZPJ">
              <Checkout bid={this.props.bid} toggle={this.toggle}/>
            </StripeProvider>
          </ModalBody>
        </Modal>
			</span>
		)
	}
}

export default Payment
