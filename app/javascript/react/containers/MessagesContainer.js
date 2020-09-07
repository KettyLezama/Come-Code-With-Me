import React from 'react';
import { Link } from 'react-router-dom';
import MessageTile from '../components/MessageTile';
import MessageForm from '../components/MessageForm';

const MessagesContainer = ({selectedUserMessages, selectedConnectionId, selectedUserId}) => {

  debugger;

  const displayMessages = selectedUserMessages.map((message) => {
    return (
      <MessageTile
        key={message.id}
        content={message.content}
      />
    )
  });

  return (
    <div className="messages container">
      <div className="box messages">
        {displayMessages}
      </div>

      <MessageForm 
        selectedConnectionId={selectedConnectionId}
        selectedUserId={selectedUserId}
      />

      <a href="/connections">Refresh</a>
    </div>
  )
}

export default MessagesContainer;