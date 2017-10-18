import React, { Component } from 'react'
import {Link} from 'react-router'
import './Notification.scss'
import { connect } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverTitle,
  PopoverContent
} from 'reactstrap'
import FaIconNotification from 'react-icons/lib/fa/bell-o'
import { getNotification } from 'actions/notifications_bid'

class Notification extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popoverOpen: false,
    }

    this.toggle = this.toggle.bind(this)
    this.onclose = this.onclose.bind(this)
  }

  toggle (type) {
    this.setState({
      [type]: !this.state[type]
    })
  }

  componentWillMount () {
    console.log('componentWillMount 123', this.props.user.id)
    if(this.props.user.id) {
      this.props.getNotification(
        {
          filter: {
            status: 'accepted',
            user_id: this.props.user.id
          },
          include: ['user']
        }
      )
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.user.id != nextProps.user.id) {
      this.props.getNotification(
        {
          filter: {
            status: 'accepted',
            user_id: nextProps.user.id
          },
          include: ['user']
        }
      )
    }
  }
  onclose(){
    this.setState({
      popoverOpen: false
    })
  }

  render () {
    let count = 0;
    this.props.notifications.map(notification => {
      if(!notification.my_bid[0].details.approved_by_bidder){
        count++;
      }
    })
    return (
      <div>
        <div className="dropmenu">
          <a id="Popover2" className="NotificationBell"
             onClick={this.toggle.bind(this, 'popoverOpen')}><FaIconNotification/></a>
          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover2"
                   toggle={this.toggle.bind(this, 'popoverOpen')}>
            <PopoverContent>
              {this.props.notifications.map((notification, index) => {
                if(!notification.my_bid[0].details.approved_by_bidder){
                  return <li key={index}>
                    <Link onClick={this.onclose}  to={`/notification/${notification.id}` }>{notification.user.first_name} has offered a shipment to you. Click here to accept</Link>
                  </li>
                }
              }

              )}
            </PopoverContent>
          </Popover>
          <label className="labelCount" style={{background: count > 0 ? '#27d6ff' : 'black' }}>{count}</label>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getNotification: (filter) => dispatch(getNotification(filter)),
})

const mapStateToProps = (state) => ({
  notifications: state.notifications_bid.data,
  user : state.profile.data
})
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Notification)
