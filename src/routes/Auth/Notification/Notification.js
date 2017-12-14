import React, { Component } from 'react'
import './Notification.scss'
import { connect } from 'react-redux'
import moment from 'moment'
import { approveBid } from 'actions/notifications_bid'
import { Link } from 'react-router'
import Payment from 'components/pay_bid/Payment'
import NotificationContent from './NotificationContent'

class Notification extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: false,
    }
    this.approve = this.approve.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  approve (id) {
    this.props.approveBid(id)
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }))
  }

  render () {
    return (
      <div className='container'>
        <div className='notification'>
          {this.props.notifications.map((notification, index) => {
              if (notification.id == this.props.params.id) {
                return <NotificationContent
                  notification={notification}
                  key={index}
                  handleClick={this.handleClick}
                  approveBid={this.approve}
                  isToggleOn={this.state.isToggleOn}/>
              }
              return null
            },
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications_bid.data,
})
export default connect(mapStateToProps, { approveBid })(Notification)
