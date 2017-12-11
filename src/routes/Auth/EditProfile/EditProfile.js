import './EditProfile.scss'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap'
import classnames from 'classnames'
import EditForm from './EditForm/EditForm'
import StripeForm from './StripeForm/StripeForm'
import MyCards from './EditCard/MyCards'

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
    }
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render () {
    return (

      <section id="profile">

        <div className="container">
          <h1 className="profile-setting">Setting</h1>
          <div className="profile-edit">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({active: this.state.activeTab === '1'})}
                  onClick={() => { this.toggle('1') }}
                >
                  My Profile
                </NavLink>
              </NavItem>

              {/*<NavItem>*/}
              {/*<NavLink*/}
              {/*className={classnames({ active: this.state.activeTab === '2' })}*/}
              {/*onClick={() => { this.toggle('2'); }}*/}
              {/*>*/}
              {/*Billing Setting*/}
              {/*</NavLink>*/}
              {/*</NavItem>*/}
              <NavItem>
                <NavLink
                  className={classnames({active: this.state.activeTab === '3'})}
                  onClick={() => { this.toggle('3') }}
                >
                  Payout Settings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({active: this.state.activeTab === '3'})}
                  onClick={() => { this.toggle('4') }}
                >
                  Payment methods
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <EditForm/>
              </TabPane>
              {/*<TabPane tabId="2">*/}
              {/*Billing setting*/}
              {/*</TabPane>*/}
              <TabPane tabId="3">
                <div>
                  {<StripeForm/>}
                </div>
              </TabPane>
              <TabPane tabId="4">
                <div>
                  {<MyCards/>}
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </section>
    )
  }
}

export default EditProfile
