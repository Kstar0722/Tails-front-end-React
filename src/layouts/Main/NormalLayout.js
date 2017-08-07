import { IndexLink, Link, Location } from 'react-router'
import PropTypes from 'prop-types'
import './NormalLayout.scss'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

export const PageLayout = ({ children }) => (
  <div className='root'>
    <div className={ 'main-wrap' }>
	  <Header />
	    {children}  
    </div>
    <Footer />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
