import React, { useState, useEffect }from 'react';
import MessageTile from './MessageTile';
import MessageForm from './MessageForm';

const MessagesContainer = ({selectedUserMessages, selectedConnectionId, selectedUserId}) => {

  const [user, setUser] = useState({})
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("/api/v1/users/current", {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      let { ok } = response;
      if (ok) {
        return response.json();
      }
    })
    .then((data) => {
      debugger;
      setUser(data)
    })

    debugger;

    App.chatChannel = App.cable.subscriptions.create(
      // Info that is sent to the subscribed method
      {
        channel: "ChatChannel",
        chat_id: 1
        // chat_id: props.match.params["id"]
      },
      {
        connected: () => console.log("ChatChannel connected"),
        disconnected: () => console.log("ChatChannel disconnected"),
        received: data => {
          // Data broadcasted from the chat channel
          console.log(data)
          handleMessageReceipt(data)
        }
      }
    );
  }, [])

  const handleMessageReceipt = (message) => {
    setMessages([...messages, message])
  }

  const handleClearForm = () => {
    setMessage("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send info to the receive method on the back end
    App.chatChannel.send({
     message: message,
     user: user
    })

    handleClearForm();
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  let messagesComponents = messages.map(message => {
    return(
      <MessageTile
        key={message.messageId}
        userFirstName={message.user.first_name}
        content={message.message}
      />
    )
  }, this);

  return (
    <div className="messages container">
      <div className="box messages">
        {messagesComponents}
      </div>

      <form onSubmit={handleFormSubmit}>
        <MessageForm 
          selectedConnectionId={selectedConnectionId}
          selectedUserId={selectedUserId}
          content={message}
          name='message'
          handlerFunction={handleMessageChange}
        />
      </form>

    </div>
  )
}

export default MessagesContainer;