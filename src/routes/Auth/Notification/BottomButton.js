import Payment from 'components/pay_bid/Payment'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const BottomButton = ({ notification, approveBid, isToggleOn }) => {
  return (
    <div className='button_accept'>
      {notification.notification_type === 'offer_sent' ? (
          <Link to='profile'>
            <button
              onClick={() => approveBid(notification.bid.id)}
              disabled={!(!notification.bid.details ||
                !notification.bid.details.approved_by_bidder) ||
              isToggleOn == false}>
              I accept this shipment
            </button>
          </Link>
        )
        : (
          <div className='button_accept'>
            <Payment
              bid={{ id: notification.bid.id }}
              cost={notification.bid.cost}/>
          </div>
        )}
    </div>
  )
}
BottomButton.propTypes = {
  notification: PropTypes.object.isRequired,
  approveBid: PropTypes.func.isRequired,
  isToggleOn: PropTypes.any.isRequired,
}
export default BottomButton
