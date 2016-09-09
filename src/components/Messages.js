import React from 'react';
import base from '../config/base';

const Messages = ({messages}) => {
  var messageComponents = messages.map(
    (message, index) => <Message key={index} message={message} />);
  return (
      <ul>
        {messageComponents}
      </ul>
  )
}
const Message = ({message}) => {
  return (
    <li>{message.text}</li>
  )
}
export default Messages;
