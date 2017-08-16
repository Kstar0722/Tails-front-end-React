import { Alert, AlertList, AlertContainer } from "react-bs-notifier"
import {connect} from 'react-redux'
import React, { Component } from 'react'
import classNames from 'classnames'
import Notifications from 'react-notification-system-redux'

class Notification extends Component {
  constructor(props) {
    super(props);
    
    this.clearNotification = this.clearNotification.bind(this)
  }

  componentWillMount() {
    
  }

  clearNotification(){
      this.props.dispatch({type: 'CLEAR_NOTIFICATION'})
  }

  render() {

    const style = {
      NotificationItem: { 
        DefaultStyle: { 
          margin: '10px 5px 2px 1px'
        },
      }
    };
        
    return (
            <div>
                <Notifications
                    notifications={this.props.notifications}
                    style={style}
                />
            </div>
        ) 
  }
}

export default connect(
  state => ({
	notifications: state.notifications,
  }),
  (dispatch) => ({
   dispatch
    })
)(Notification);