import user from 'auth/user'

class ConversationItem extends React.Component {
	constructor(props) {
		super(props)
	}

	stringifyNames(users) {
		const id = parseInt(user.id), names = [];
		let current;
		for(let i = 0; i < users.length; i++) {
			if(id != (current = users[i]).id) {
				names.push(`${current.first_name} ${current.last_name}`);
			}
		}
		return names.join(', ');
	}

	shortenMessage(message) {
		return message.length > 15 ? `${message.slice(0, 17)}...` : message;
	}

	render() {
  	const {id, name} = this.props
		return (
        <li onClick={this.props.selectEvent.bind(this.props.Messages, this.props.conversation)}>
            <div className="avatar">
                <img src="{FakeAvatar}" alt="" />
            </div>
            <h4 className="name"><span>{this.stringifyNames(this.props.conversation.users)}</span></h4>
						<p className="excerpt">{
							this.props.conversation.message ? this.shortenMessage(this.props.conversation.message) : (
								<i>This conversation is empty</i>
							)
						}</p>
        </li>
        )
    }
}
export default ConversationItem
