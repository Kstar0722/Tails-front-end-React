import './Messages.scss'
import { Link } from 'react-router';
import ConversationItem from './components/ConversationItem'
import apiService from '../../../lib/api'
import user from 'auth/user'
import socket from 'auth/socket'

class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			conversations: [],
			messages: [],
			message: '',
			selected: null
		};
		/*socket._socket.on('conversation', conversation => {
			this.state.conversations.push(conversation);
			this.setState({
				conversation: this.state.conversations
			});
		});*/
		socket._socket.on('message', message => {
			if(this.state.selected.id == message.conversation_id) {
				this.state.messages.push(message);
			}
			let conversation;
			for(let i = 0; i < this.state.conversations.length; i++) {
				if(message.conversation_id == (conversation = this.state.conversations[i]).id) {
					conversation.message = message.message;
					break;
				}
			}
			this.setState(this.state);
		});
	}

	selectConversation(conversation) {
		if(this.state.selected == conversation) {
			return;
		}
		this.setState({
			selected: conversation,
			messages: []
		});
		apiService.find('messages', {
			filter: {
				conversation_id: conversation.id
			}
		}).then(res => {
			this.setState({
				messages: res.data.reverse()
			});
			this.scrollBottom();
		});
	}

	componentDidMount() {
		return apiService.find('conversations', {
			include: ['users', 'listing']
		}).then(res => {
			this.setState({
				conversations: this.addKeys(res.data)
			});
			if(res.data.length > 0) {
				this.selectConversation(res.data[0]);
			}
		}).catch(function(error) {
			console.error(error)
		});
	}

	addKeys(array) {
		for(let i = 0; i < array.length; i++) {
			array[i].key = array[i].id;
		}
		return array;
	}

	changeMessage(event) {
		this.setState({
			message: event.target.value
		});
	}

	scrollBottom() {
		const panel = document.getElementById('chat-window');
		panel.scrollTop = panel.scrollHeight;
	}

	sendMessage() {
		return apiService.post('messages', {
			message: this.state.message,
			conversation_id: this.state.selected.id
		}).then(res => {
			this.setState({
				message: '',
			});
			this.scrollBottom();
		});
	}

	render() {
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
												{this.state.conversations.map((conversation, key) =>
													<ConversationItem key={key} conversation={conversation} Messages={this} selectEvent={this.selectConversation}/>
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

											<div id="chat-window" className="chat-window">
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
													<input type="text" className="field-message" value={this.state.message} onChange={this.changeMessage.bind(this)} placeholder="Type your message..." />
													<div className="buttons" onClick={this.sendMessage.bind(this)}>
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

export default Messages;
