import React from 'react';
import MessageTile from './MessageTile';
import MessageForm from './MessageForm';

const MessagesContainer = ({selectedUserMessages, selectedConnectionId, selectedUserId}) => {

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
    </div>
  )
}

export default MessagesContainer;