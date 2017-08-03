import './EditProfile.scss'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import EditForm from './EditForm/EditForm'

class EditProfile extends React.Component {
	constructor(props) {
		super(props)
		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {
		return (

			<section id="profile">
				<div className="container">
					<h1>Setting</h1>
					<div className="profile-edit">
						<Nav tabs>
						<NavItem>
							<NavLink className={classnames({ active: this.state.activeTab === '1' })}
								onClick={() => { this.toggle('1'); }}
							>
								My Profile
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => { this.toggle('2'); }}
							>
								Billing Setting
							</NavLink>
						</NavItem>
						</Nav>
						<TabContent activeTab={this.state.activeTab}>
						<TabPane tabId="1">
							<EditForm/>
						</TabPane>
						<TabPane tabId="2">
							Billing setting
						</TabPane>
						</TabContent>
					</div>
				</div>
			</section>
		)
	}
}

export default EditProfile