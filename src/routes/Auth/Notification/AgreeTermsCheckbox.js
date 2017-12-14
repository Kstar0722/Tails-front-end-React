import PropTypes from 'prop-types'

const AgreeTermsCheckbox = ({ notificationType, handleClick }) => {
  return (
    <span>
      <p>Please ready the full terms here</p>
      {notificationType === 'offer_sent' ? (
        <input onClick={handleClick} type='checkbox'/>) : null}
    </span>
  )
}

AgreeTermsCheckbox.propTypes = {
  notificationType: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default AgreeTermsCheckbox
