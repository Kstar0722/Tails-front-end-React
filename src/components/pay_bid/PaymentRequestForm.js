import React from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { PayBid } from 'actions/listing_bids'
import { browserHistory } from 'react-router'

class CheckoutForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error_cart: null,
      card: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.selectCard = this.selectCard.bind(this)
  }

  handleSubmit (ev) {
    ev.preventDefault()
    this.setState({
      error_cart: null,
    })
    let {user} = this.props

    console.log('this.state', this.state)

    if (this.state.card == 'new') {
      this.props.stripe.createToken(
        {name: user.first_name + ' ' + user.last_name}).
        then(({token, error}) => {
          console.log('token', token)
          console.log('createToken error', error)
          if (token.id) {
            this.props.PayBid(this.props.bid.id, token.id, true).then(() => {
              this.props.toggle()
              browserHistory.push('/profile')
            }).catch(err => {
              console.log('err action', err)
              this.setState({error_cart: 'Something went wrong. Repeat again!'})
            })
          } else {
            this.setState({error_cart: 'Something went wrong. Repeat again!'})
          }
        })
    } else {
      this.props.PayBid(this.props.bid.id, this.state.card, false).then(() => {
        this.props.toggle()
        browserHistory.push('/profile')
      }).catch(err => {
        console.log('err action', err)
        this.setState({error_cart: 'Something went wrong. Repeat again!'})
      })
    }
  }

  selectCard (e) {
    this.setState({
      card: e.target.value,
    })
  }

  render () {
    let {user} = this.props

    let cards = user.cards ? (user.cards.cards &&
      Array.isArray(user.cards.cards)) ? user.cards.cards : [] : []
    return (
      <form onSubmit={this.handleSubmit} className='pay-bid'>
        <label>Pay with</label>
        <select className="form-control select-card" onChange={this.selectCard}>
          <option value="">Select card...</option>
          <option value="new">Add card</option>
          {cards.map(card => <option value={card.id}>**** ****
            **** {card.last4} ({card.brand})</option>)}
        </select>

        {this.state.card == 'new' ?
          <CardElement style={{base: {fontSize: '18px'}}}/> : null}
        {this.state.error_cart ?
          <p className='error-message'>{this.state.error_cart}</p> : null}
        <hr/>
        <button className='btn btn-create-listing block-btn blue'>Pay</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.profile.data,
})

const mapDispatchToProps = dispatch => ({
  PayBid: (bid_id, token, new_card) => dispatch(
    PayBid(bid_id, token, new_card)),
})

export default injectStripe(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutForm))
