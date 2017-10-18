import React, { Component } from 'react'
import './Notification.scss'
import { connect } from 'react-redux'
import { approveBid } from 'actions/notifications_bid'

class Notification extends Component {
  constructor (props) {

    super(props)
    this.state = {
        isChecked: ''
    }
    this.approve = this.approve.bind(this)
    this.isChecked = this.isChecked.bind(this)
  }

  approve (id) {
    this.props.approveBid(id)
  }

  isChecked (this_true) {
    console.log('param',this_true)
    this.setState({
      isChecked: {this_true}
    })
  }

  render () {
    console.log('params', this.props.params)
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
                <p>This shipment must be picked up by {notification.created_at} and dropper off
                  by {notification.update_at}</p>
                <p>The client has proposed this shipment for {notification.budget} </p>
                <b>Other Notes:</b>
                <p>Please ready the full terms here</p>
                <input onClick={this.isChecked.bind(this,'this_true')} type="checkbox"/>
                <a>I agree to the full terms</a>
                <div className="button_accept">
                  {console.log('fdghhhhhhhhhh',this.state.isChecked)}
                  <button onClick={this.approve.bind(this, notification.my_bid[0].id)}
                          disabled={notification.my_bid[0].details.approved_by_bidder || !this.state.isChecked }>I accept this shipment
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
