import './Header.scss'
import TextLogo from 'components/logo/TextLogo'
import ImgLogo from 'components/logo/ImageLogo'
import Login from 'routes/NoAuth/Login/Login'
import { getListings } from 'actions/listing'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import user from 'auth/user'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      login: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      login: this.state.login,
    })

  }

  render () {
    return (
      <section id="header" className="d-flex align-items-center">
        <div className="container">
          <div
            className="header-content d-flex flex-row flex-wrap justify-content-between align-items-center">
            <ImgLogo/>
            <nav className="hide-on-mobile">
              {user.authorized ? <ul
                  className="d-flex flex-row flex-wrap align-items-center justify-content-flex-end pull-right">
                  <li className="extra-right-margin"><Link to='/listings'>Browse Listings</Link></li>
                  {/* <li><Link to='#'>My Listings</Link></li> */}
                  <li className="extra-right-margin"><Link to='/messages'>Messages</Link></li>
                  <Login/>
                </ul>
                : <ul
                  className="d-flex flex-row flex-wrap align-items-center justify-content-flex-end pull-right">
                  <li className="extra-right-margin"><Link to='/how-it-works'>How it Works</Link></li>
                  <li className="extra-right-margin"><Link to='/faq'>FAQ</Link></li>
                  <li className="extra-right-margin"><Link to='/support'>Support</Link></li>
                  <Login/>
                </ul>
              }
            </nav>
          </div>
          <nav className="mobile-nav">
            {user.authorized ? <ul
              className="d-flex flex-row flex-wrap align-items-center justify-content-flex-end pull-right">
              <li></li>
              <li><Link to='/listings'>Browse Listings</Link></li>
              {/* <li><Link to='#'>My Listings</Link></li> */}
              <li><Link to='/messages'>Messages</Link></li>
              <Login/>
            </ul> : <ul
              className="d-flex flex-row flex-wrap align-items-center justify-content-flex-end pull-right">
              <li><Link to='/how-it-works'>How it Works</Link></li>
              <li><Link to='/faq'>FAQ</Link></li>
              <li><Link to='/support'>Support</Link></li>
              <Login/>
            </ul>
            }
          </nav>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile.data,
  listings: state.listing,
})

const mapDispatchToProps = dispatch => ({
  getListings: () => dispatch(getListings()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
