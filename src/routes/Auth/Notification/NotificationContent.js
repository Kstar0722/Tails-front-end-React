import moment from 'moment/moment'
import PropTypes from 'prop-types'
import AgreeTermsCheckbox from './AgreeTermsCheckbox'
import BottomButton from './BottomButton'

const NotificationContent = ({ notification, index, handleClick, approveBid, isToggleOn }) => {
  const { listing, bid } = notification
  const formatCreatedAt = moment(new Date(notification.listing.desired_pick_up_date))
    .format('MMMM Do YYYY')
  const formatUpdatedAt = moment(new Date(notification.listing.desired_delivery_date))
    .format('MMMM Do YYYY')
  const firstName = notification.notification_type === 'offer_sent'
    ? listing.user.first_name
    : bid.user.first_name
  return (
    <div key={index}>
      <h3 className='titleNotification'>
        {firstName} has offer the job {notification.title}
      </h3>
      <p>This shipment must be picked up by {formatCreatedAt} and
        dropped off by {formatUpdatedAt}
      </p>
      <p>The client has proposed this shipment
        for ${bid.cost} </p>
      <b>Other Notes:</b>
      <p>{bid.description}</p>
      <AgreeTermsCheckbox
        notificationType={notification.notification_type}
        handleClick={handleClick}/>
      <BottomButton notification={notification} approveBid={approveBid}/>
    </div>
  )
}
NotificationContent.propTypes = {
  notification: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  approveBid: PropTypes.func.isRequired,
  isToggleOn: PropTypes.any.isRequired
}

export default NotificationContent
