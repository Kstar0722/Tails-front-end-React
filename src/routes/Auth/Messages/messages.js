import './messages.scss'
import MessageFeed from './components/message-feed'
import ChatList from './components/ChatList'
import FakeAvatar from 'assets/avatar-50.png'

class Messages extends React.Component {
	constructor(props) {
		super(props)
	}

    getAllConversations() {
		if (this.props.conversations) {
			const conversations = []

			this.props.conversations.data.map((conversation, i) => {
				conversations.push(this.renderAllConversations(
					conversation.id,
					conversation.created_at
				))
			})

			return conversations
		}
	}

    renderAllConversations(id,created_at) {
		return (
			<ChatList
				id={id}
				created_at={created_at}
			/>
		)
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
        							<h4>Recent<span className="count">2</span></h4>
        						</div>
        						<div className="scroller">
        							<ChatList />
        						</div>
        					</aside>

        					<div className="chat">
        						<div className="chat-top">
        							<div className="wrap">
        								<div className="user">
        									<h4 className="name">Alex Smith</h4>
        								</div>

        								<div className="buttons">
        									<a href="#" className="btn-outline">Go to Listing</a>
        									<a href="#" className="btn">View Profile</a>
        								</div>
        							</div>
        						</div>

        						<MessageFeed />

        						<div className="write-message">
        							<div className="wrap">
        								<input type="text" className="field-message" placeholder="Type your message..." />
        								<div className="buttons">
        									<button className="btn-send"><i className="btm bt-paper-plane"></i></button>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
		)
	}
}

export default Messages
