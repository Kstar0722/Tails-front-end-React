import React, { Component } from 'react'
import './Notification.scss'
import { connect } from 'react-redux'
import moment from 'moment'
import { approveBid } from 'actions/notifications_bid'

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
    return (
      <div className="container">
        <div className="Notificaton">
          {this.props.notifications.map((notification, index) => {
              if (notification.id != this.props.params.id) {
                return null
              }
              return <div key={index}>
                <h3 className="titleNotification"> {notification.user.first_name} has ofer the
                  job {notification.title}</h3>
                <p>This shipment must be picked up by  {moment(new Date(notification.created_at)).format('MMMM Do YYYY')} and dropper off
                  by {moment(new Date(notification.updated_at)).format('MMMM Do YYYY')}</p>
                <p>The client has proposed this shipment for {notification.budget} </p>
                <b>Other Notes:</b>
                <p>{notification.my_bid[0].description}</p>
                <p>Please ready the full terms here</p>
                <input onClick={this.handleClick} type="checkbox" />
                <a>I agree to the full terms</a>
                <div className="button_accept">
                  <button onClick={this.approve.bind(this, notification.my_bid[0].id)}
                          disabled={notification.my_bid[0].details.approved_by_bidder || this.state.isToggleOn == false  }>I accept this shipment
                  </button>
                </div>
              </div>
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
