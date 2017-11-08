import React from 'react';
import './AddBidModal.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addBid, getBidsByListingID } from "../../../../actions/bids";

class AddBidModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      visibleButton: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });

  }

  handleSubmit = (e) => {
    e.preventDefault()

    const bid = this.props.addBidForm.values
    bid.listing_id = this.props.id

    this.props.addBid(bid).then(() => {
        this.toggle();
    })
  }

  render() {
    let {user, bids, stripe} = this.props;
    let visibleBt = true;
    bids.map(bid => {
      if(user.id == bid.user_id){
        visibleBt=false;
      }
    })

    let charges_enabled = false;

    if(stripe.charges_enabled){
      charges_enabled=true
    }

    return (
      <div>
        { visibleBt ? charges_enabled ? <Button color="danger" onClick={this.toggle}><span className="bid-now-btn">BID NOW</span></Button> : 'You must complete your payout info before bidding' : '' }
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form onSubmit={this.handleSubmit} className="form-add-bid" >
            <ModalHeader toggle={this.toggle}>{this.props.title} - $ {this.props.budget} Budget</ModalHeader>
            <ModalBody>
              <div>
                <label>Bid Description</label>
                <div className="group-add-bid">
                  <Field
                    name="description"
                    component="textarea"
                    required />
                </div>
              </div>
              <div>
                <label>Proposed Amount</label>
                <div className="group-add-bid">
                  <Field
                    name="cost"
                    component="input"
                    type="number"
                    required />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Submit</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

AddBidModal = reduxForm({
  form: 'addBidForm'
})(AddBidModal)

const mapStateToProps = state => ({
  addBidForm: state.form.addBidForm,
  bids: state.bid.data ? Array.isArray(state.bid.data) ? state.bid.data : [] : [],
  user: state.profile.data,
  stripe: state.profile.stripe
})

export default connect(mapStateToProps, { addBid, getBidsByListingID } )(AddBidModal);
