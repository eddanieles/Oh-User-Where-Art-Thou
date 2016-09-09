import React, { Component } from 'react';
import base from '../config/base';
import Messages from '../components/Messages';

class MessagesContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: []
    }
  }
  componentDidMount () {
    this.rebaseRef = base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true,
    })
  }
  componentWillUnmount () {
    base.removeBinding(this.rebaseRef)
  }
  render () {
    return (
      <Messages
        messages={this.state.messages}/>
    )
  }
}

export default MessagesContainer;
