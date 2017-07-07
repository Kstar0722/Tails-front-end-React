import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './AuthorizedLayout.scss'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

export const AuthorizedLayout = ({ children }) => (
  <div className='root'>
	<Header />
	    {children}
    <Footer />
  </div>
)
AuthorizedLayout.propTypes = {
  children: PropTypes.node,
}

export default AuthorizedLayout
