import { IndexLink, Link, Location } from 'react-router'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {connect} from 'react-redux'
import './NormalLayout.scss'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
import Notification from 'components/Notification'

export const PageLayout = ({ children, location }) => (
  <div className='root'>
    <Notification />
    <div className={ classNames('main-wrap', {gray: location.pathname == '/sign-up'}) }>
	    <Header />
	    {children}  
    </div>
    <Footer />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default connect(
  state => ({
	  location: state.location,
  }),
  {}
)(PageLayout)
