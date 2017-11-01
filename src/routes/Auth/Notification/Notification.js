import React, { Component } from 'react'
import './Notification.scss'
import { connect } from 'react-redux'
import moment from 'moment'
import { approveBid } from 'actions/notifications_bid'
import { Link } from 'react-router'
import Payment from './Payment';

class Notification extends Component {
  constructor (props) {

    super(props)
    this.state = {
      isToggleOn: false
    }
    this.approve = this.approve.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }

  approve (id) {
    this.props.approveBid(id)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render () {
    console.log('notifications=========>',this.props.notifications)
    return (
      <div className="container">
        <div className="Notificaton">
          {this.props.notifications.map((notification, index) => {
              if (notification.id == this.props.params.id) {
                if(notification.notification_type == "offer_sent"){
                  return<div key={index}>
                    <h3 className="titleNotification"> {notification.listing.user.first_name} has ofer the
                      job {notification.title}</h3>
                    <p>This shipment must be picked up by  {moment(new Date(notification.bid.created_at)).format('MMMM Do YYYY')} and dropped off
                      by {moment(new Date(notification.bid.updated_at)).format('MMMM Do YYYY')}</p>
                    <p>The client has proposed this shipment for {notification.bid.budget} </p>
                    <b>Other Notes:</b>
                    <p>{notification.bid.description}</p>
                    <p>Please ready the full terms here</p>
                    <input onClick={this.handleClick} type="checkbox" />
                    <a>I agree to the full terms</a>
                    <div className="button_accept">
                      <Link to='profile'> <button onClick={this.approve.bind(this, notification.bid.id)}
                                                  disabled={ !(!notification.bid.details || !notification.bid.details.approved_by_bidder) || this.state.isToggleOn == false  }>I accept this shipment
                      </button></Link>
                    </div>
                  </div>
                }
              }
            if (notification.id == this.props.params.id) {
              if(notification.notification_type == "pending_peyment"){
                return<div key={index}>
                  <h3 className="titleNotification"> {notification.bid.user.first_name} has ofer the
                    job {notification.title}</h3>
                  <p>This shipment must be picked up by  {moment(new Date(notification.bid.created_at)).format('MMMM Do YYYY')} and dropped off
                    by {moment(new Date(notification.bid.updated_at)).format('MMMM Do YYYY')}</p>
                  <p>The client has proposed this shipment for {notification.bid.budget} </p>
                  <b>Other Notes:</b>
                  <p>{notification.bid.description}</p>
                  <p>Please ready the full terms here</p>
                  <div className="button_accept">
                    <Payment bid={{id: notification.bid.id}}/>
                  </div>
                </div>
              }
            } return null
            }
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications_bid.data,
})
export default ReactRedux.connect(mapStateToProps, {approveBid})(Notification)
