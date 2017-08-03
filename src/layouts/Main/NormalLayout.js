import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './NormalLayout.scss'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

export const PageLayout = ({ children }) => (
  <div className='root'>
	  <Header />
	    {children}  
    <Footer />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
