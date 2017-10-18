class ChatList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
        const {id, created_at} = this.props
		return (
            <ul className="messages-list">
                <li className="highlight">
                    <div className="avatar">
                        <img src="{FakeAvatar}" alt="" />
                        <span className="status online"></span>
                    </div>
                    <h4 className="name"><span>Alex Smith</span> <span className="count">1</span></h4>
                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur.. adipisicing elit,</p>
                </li>

                <li>
                    <div className="avatar">
                        <img src="{FakeAvatar}" alt="" />
                        <span className="status"></span>
                    </div>
                    <h4 className="name"><span>Longname Slolvokao..</span></h4>
                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur.. adipisicing elit,</p>
                </li>

                <li className="highlight">
                    <div className="avatar">
                        <img src="{FakeAvatar}" alt="" />
                        <span className="status away"></span>
                    </div>
                    <h4 className="name"><span>Top Jones</span> <span className="count">1</span></h4>
                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur.. adipisicing elit,</p>
                </li>

                <li>
                    <div className="avatar">
                        <img src="{FakeAvatar}" alt="" />
                        <span className="status offline"></span>
                    </div>
                    <h4 className="name"><span>Bruce Willis</span></h4>
                    <p className="excerpt">Start a conversation</p>
                </li>
            </ul>
        )
    }
}
export default ChatList
