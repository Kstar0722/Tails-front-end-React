import './Messages.scss'
import { Link } from 'react-router'
import ConversationItem from './components/ConversationItem'
import apiService from '../../../lib/api'
import user from 'auth/user'
import socket from 'auth/socket'
import DefaultAvatar from 'assets/default_avatar.png'
import { connect } from 'react-redux'

class Messages extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversations: [],
      messages: [],
      message: '',
      selected: null,
    }
    /*socket._socket.on('conversation', conversation => {
      this.state.conversations.push(conversation);
      this.setState({
        conversation: this.state.conversations
      });
    });*/
    socket._socket.on('message', message => {
      if (this.state.selected.id == message.conversation_id) {
        this.state.messages.push(message)
      }
      let conversation
      for (let i = 0; i < this.state.conversations.length; i++) {
        if (message.conversation_id ==
          (conversation = this.state.conversations[ i ]).id) {
          conversation.message = message.message
          break
        }
      }
      this.setState(this.state)
    })

    this.sendMessageEnter = this.sendMessageEnter.bind(this)

  }

  sendMessageEnter (e) {
    e.stopPropagation()
    if (e.charCode === 13) {
      e.preventDefault()
      if (this.state.message) {
        return apiService.post('messages', {
          message: this.state.message,
          conversation_id: this.state.selected.id,
        }).then(res => {
          this.setState({
            message: '',
          })
          this.scrollBottom()
        })
      }
    }
  }

  selectConversation (conversation) {
    if (this.state.selected == conversation) {
      return
    }
    this.setState({
      selected: conversation,
      messages: [],
    })
    apiService.find('messages', {
      page: {
        size: this.infinite.size,
        number: this.infinite.messages.page,
      },
      filter: {
        conversation_id: conversation.id,
      },
      include: [ 'user' ],
    }).then(res => {
      if (res.data.length < this.infinite.size) {
        this.infinite.messages.done = true
      }
      this.setState({
        messages: res.data.reverse(),
      })
      this.scrollBottom()
      this.infinite.messages = {
        loading: false,
        done: false,
        page: 1,
      }
    })
  }

  componentDidMount () {
    return apiService.find('conversations', {
      page: {
        size: this.infinite.size,
        number: this.infinite.conversations.page,
      },
      include: [ 'users', 'listing' ],
    }).then(res => {
      this.setState({
        conversations: this.addKeys(res.data),
      })
      if (res.data.length > 0) {
        this.selectConversation(res.data[ 0 ])
      }
    }).catch(function (error) {
      console.error(error)
    })
  }

  addKeys (array) {
    for (let i = 0; i < array.length; i++) {
      array[ i ].key = array[ i ].id
    }
    return array
  }

  changeMessage (event) {
    this.setState({
      message: event.target.value,
    })
  }

  scrollBottom () {
    const panel = document.getElementById('chat-window')
    panel.scrollTop = panel.scrollHeight
  }

  sendMessage (e) {
    e.preventDefault()
    return apiService.post('messages', {
      message: this.state.message,
      conversation_id: this.state.selected.id,
    }).then(res => {
      this.setState({
        message: '',
      })
      this.scrollBottom()
    })

  }

  infinite = {
    size: 10,
    messages: {
      loading: false,
      done: false,
      page: 1,
    },
    conversations: {
      loading: false,
      done: false,
      page: 1,
    },
  }

  loadConversations (e) {
    const event = e.nativeEvent
    if (event.target.scrollHeight - event.target.scrollTop ==
      event.target.clientHeight) {
      if (this.infinite.conversations.done) {
        return
      }
      if (this.infinite.conversations.loading) {
        return
      }
      this.infinite.conversations.page++
      this.infinite.conversations.loading = true
      const height = event.target.scrollTop
      apiService.find('conversations', {
        page: {
          size: this.infinite.size,
          number: this.infinite.conversations.page,
        },
        include: [ 'users', 'listing' ],
      }).then(res => {
        if (res.data.length < this.infinite.size) {
          this.infinite.conversations.done = true
        }
        for (let i = 0; i < res.data.length; i++) {
          this.state.conversations.push(res.data[ i ])
        }
        this.infinite.conversations.loading = false
        this.setState(this.state)
        event.target.scrollTop = height
      })
    }
  }

  loadMessages (e) {
    const event = e.nativeEvent
    if (event.target.scrollTop == 0) {
      if (this.infinite.messages.done) {
        return
      }
      if (this.infinite.messages.loading) {
        return
      }
      this.infinite.messages.page++
      this.infinite.messages.loading = true
      const height = event.target.scrollHeight
      apiService.find('messages', {
        page: {
          size: this.infinite.size,
          number: this.infinite.messages.page,
        },
        filter: {
          conversation_id: this.state.selected.id,
        },
        include: [ 'user' ],
      }).then(res => {
        console.log('messages')
        if (res.data.length < this.infinite.size) {
          this.infinite.messages.done = true
        }
        for (let i = 0; i < res.data.length; i++) {
          this.state.messages.unshift(res.data[ i ])
        }
        this.infinite.messages.loading = false
        this.setState(this.state)
        event.target.scrollTop = event.target.scrollHeight - height
      })
    }
  }

  render () {

    let my_avatar = this.props.profile.avatar
      ? this.props.profile.avatar
      : DefaultAvatar
    let user_avatar = DefaultAvatar

    if (this.state.selected && this.state.selected.users &&
      Array.isArray(this.state.selected.users)) {
      this.state.selected.users.forEach((item) => {
        if (user.id != item.id) {
          user_avatar = item.avatar || DefaultAvatar
        }
      })
    }

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
                <div className="scroller"
                     onScroll={this.loadConversations.bind(this)}>
                  <ul className="messages-list">
                    {this.state.conversations.map((conversation, key) =>
                      <ConversationItem key={key} conversation={conversation}
                                        Messages={this}
                                        selectEvent={this.selectConversation}/>,
                    )}
                  </ul>
                </div>
              </aside>

              {this.state.selected ? (
                <div className="chat">
                  <div className="chat-top">
                    <div className="wrap">
                      <div className="user">
                        <h4
                          className="name">{this.state.selected.listing.title}</h4>
                      </div>

                      <div className="buttons">
                        <Link
                          to={`/listing-details/${this.state.selected.listing.id}`}
                          className="btn-outline">Go to Listing</Link>
                        {/*<a href="#" className="btn">View Profile</a>*/}
                      </div>
                    </div>
                  </div>

                  <div id="chat-window" className="chat-window"
                       onScroll={this.loadMessages.bind(this)}>
                    <div className="scroller">
                      <ul className="chat-messages">
                        {this.state.messages.map(message =>
                          <li
                            className={message.user_id == user.id ? 'me' : ''}>
                            <div className="avatar avatar-message">
                              <img src={(message.user && message.user.avatar)
                                ? message.user.avatar
                                : message.user_id == user.id
                                  ? my_avatar
                                  : user_avatar} alt=""/>
                            </div>
                            <p>{message.message}</p></li>,
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="write-message">
                    <div className="wrap">
                      <form onSubmit={this.sendMessage.bind(this)}>
                        <textarea className="field-message"
                                  value={this.state.message}
                                  onChange={this.changeMessage.bind(this)}
                                  onKeyPress={this.sendMessageEnter}
                                  placeholder="Type your message..."/>
                        <div className="buttons">
                          <button type='submit' className="btn-send">
                            <i className="btm bt-paper-plane"></i>
                          </button>
                        </div>
                      </form>
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

const mapStateToProps = state => ({
  profile: state.profile.data,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
