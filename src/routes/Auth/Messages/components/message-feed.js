class MessageFeed extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
            <div className="chat-window">
                <div className="scroller">
                    <ul className="chat-messages">
                        <li><p>It goes a little something like this.</p></li>
                        <li><p>It was all a dream, I used to read Word Up magazine Salt'n'Pepa and Heavy D up in the limousine.</p></li>
                        <li className="me"><p>Hello, this is sent message</p></li>
                        <li><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. </p></li>
                        <li><p>How many licks does it take to get to the center of a Tootsie Pop?</p><time>7:13 PM</time></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default MessageFeed
