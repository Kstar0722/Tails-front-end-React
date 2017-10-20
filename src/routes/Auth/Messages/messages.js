import './Messages.scss'
import { Link } from 'react-router';
import ConversationItem from './components/ConversationItem'
import apiService from '../../../lib/api'
import user from 'auth/user'

class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			conversations: [],
			messages: [],
			selected: null
		};
	}

	selectConversation(conversation) {
		this.setState({
			selected: conversation,
			messages: []
		});
		apiService.find('messages', {
			filter: {
				conversation_id: 1
			}
		}).then(res => {
			this.setState({
				messages: res.data
			});
		});
	}

	componentDidMount() {
		apiService.find('conversations', {
			include: ['users', 'listing']
		}).then(res => {
			this.setState({
				conversations: res.data
			});
			if(res.data.length > 0) {
				this.selectConversation(res.data[0]);
			}
		}).catch(function(error) {
			console.error(error)
		});
	}

	render() {
  	const { conversations } = this.props
		return (
            <div className="container">
        		<div id="messages">
        			<div className="messages-top">
        				<div className="wrap">
        					<h2>Messages</h2>
        				</div>
        			</div>

        			<div className="messages-main">
        				<div className="wrap">
        					<aside className="side">
        						<div className="title">
        							<h4>Recent{/*<span className="count">2</span>*/}</h4>
        						</div>
        						<div className="scroller">
											<ul className="messages-list">
												{this.state.conversations.map(conversation =>
													<ConversationItem key={conversation.id} conversation={conversation} Messages={this} selectEvent={this.selectConversation}/>
												)}
											</ul>
        						</div>
        					</aside>

        					{this.state.selected ? (
										<div className="chat">
											<div className="chat-top">
												<div className="wrap">
													<div className="user">
														<h4 className="name">{this.state.selected.listing.title}</h4>
													</div>

													<div className="buttons">
														<Link to={`/listing-details/${this.state.selected.listing.id}`} className="btn-outline">Go to Listing</Link>
														{/*<a href="#" className="btn">View Profile</a>*/}
													</div>
												</div>
											</div>

											<div className="chat-window">
					                <div className="scroller">
					                    <ul className="chat-messages">
																	{this.state.messages.map(message =>
																			<li className={message.user_id == user.id ? 'me' : ''}><p>{message.message}</p></li>
																	)}
					                    </ul>
					                </div>
					            </div>

											<div className="write-message">
												<div className="wrap">
													<input type="text" className="field-message" placeholder="Type your message..." />
													<div className="buttons">
														<button className="btn-send"><i className="btm bt-paper-plane"></i></button>
													</div>
												</div>
											</div>
										</div>
									) : (
										<div className="chat no-message">
											<div className="overlay">
												<div className="text">
													<h2>Hello</h2>
													<p>To get started, choose a conversation from the left</p>
												</div>
											</div>
										</div>
									)}
        				</div>
        			</div>
        		</div>
        	</div>
		)
	}
}

export default Messages
