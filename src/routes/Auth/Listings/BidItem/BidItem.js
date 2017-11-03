import './BidItem.scss'
import { Button } from 'reactstrap'
import { Component } from 'react'
import { getCountTransferedBids, getBidsByListingID, updateStatusBid } from '../../../../actions/bids'
import { getConversations } from '../../../../actions/conversations'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'

class BidItem extends Component  {

  constructor(props){
    super(props)

    this.state = {
      more: false
    }

    this.onClickAwardJob = this.onClickAwardJob.bind(this)
    this.Conversations = this.Conversations.bind(this)
  }

  onClickReadMore(user_id) {
    this.props.getCountTransferedBids({ filter: { user_id } })
    this.setState({ more: true })
  }

  onClickAwardJob() {
    this.props.updateStatusBid({

      listing_id: this.props.listing_id,
      bid_id: this.props.bid_id

    })
  }

  renderBtnByStatus(){
    console.log('status', this.props.status)
    switch (this.props.status){
      case "accepted": return <div className="accepted">Offer sent</div>
        break
      case "rejected": return <div className="rejected">Rejected</div>
        break
      default: return <Button onClick={this.onClickAwardJob}>Award Job</Button>
    }
  }
  Conversations(){
    this.props.getConversations(this.props.listing_id, this.props.user_id)
  }
  render(){
    if (!this.state.more) {
      return(
        <div className="list-item">
          <div className="top-part">
            <div className="image-holder-min text-center">
              <img src={this.props.avatar} className="main-image" />
            </div>

            <div className="right-content-holder">
              <div className="row">
                <div className="col-lg-10"><h3>{this.props.title}</h3></div>
                <div className="col-lg-2"><h3>$ {this.props.cost}</h3></div>
              </div>

              <div className="row">
                <div className="col-md-12 listing-excerpt" style={{overflow: 'overflow'}}>
                  <p>{this.props.description.substr(0,400)}</p>
                </div>
              </div>
              <div className="row">
                   <Button  onClick={this.Conversations}>Message User</Button>
                {this.renderBtnByStatus()}
              </div>
              {/*<div className="row">*/}
                {/*<div className="col-md-12 read-more" onClick={this.onClickReadMore.bind(this, this.props.user_id)} >... read more</div>*/}
              {/*</div>*/}

            </div>
          </div>

        </div>
      )
    } else {
      return(
        <div className="list-item">
          <div className="top-part">
            <div className="image-holder-max text-center">
              <img src={this.props.avatar} className="main-image" />
              <div>Member Since: { (this.props.bidder_details.hasOwnProperty(this.props.user_id)) ? moment(this.props.bidder_details[this.props.user_id].created_at).format('YYYY') : '' }</div>
              <div>{ (this.props.bidder_details.hasOwnProperty(this.props.user_id))  ? this.props.bidder_details[this.props.user_id].transfered : '' } Shipments</div>
            </div>

            <div className="right-content-holder">
              <div className="row">
                <div className="col-lg-10"><h3>{this.props.title}</h3></div>
                <div className="col-lg-2"><h3>$ {this.props.cost}</h3></div>
              </div>

              <div className="row">
                <div className="col-md-12 listing-excerpt">
                  <p>{this.props.description}</p>
                </div>
              </div>

              <div className="row">
                <Link to='messages'><Button>Message User</Button></Link>

                {this.renderBtnByStatus()}

              </div>

            </div>
          </div>

        </div>
      )
    }
  }
}

const mapstateToProps = (state) => ({
  bidder_details: state.bid.bidder_details
})

export default connect(mapstateToProps, { getCountTransferedBids, updateStatusBid, getBidsByListingID ,getConversations})(BidItem)
