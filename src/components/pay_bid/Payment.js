import './Payment.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { StripeProvider } from 'react-stripe-elements'
import Checkout from './Checkout'
import config from 'config'

class Payment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render () {

    return (
      <span>
        <Button color="danger" onClick={this.toggle}>Pay</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader
            toggle={this.toggle}>Payment ${this.props.cost}</ModalHeader>
          <ModalBody>
            <StripeProvider apiKey={config.stripe.public_key}>
              <Checkout bid={this.props.bid} toggle={this.toggle}/>
            </StripeProvider>
          </ModalBody>
        </Modal>
      </span>
    )
  }
}

export default Payment
