import React, { useState } from 'react';

const MessageForm = ({selectedConnectionId, selectedUserId}) => {
  debugger;
  const [getNotice, setNotice] = useState("");
  const [getMessageData, setMessageData] = useState({
    content: ""
  })

  const handleInputChange = (event) => {
    setMessageData({
      ...getMessageData,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const readyToSubmit = () => {
    if (getMessageData.content.trim() !== "") {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (readyToSubmit()) {
      fetch(`/api/v1/users/${selectedUserId}/connections/${selectedConnectionId}/messages`, {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify(getMessageData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setNotice(body.notice);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  return (
    <>
      <form className="messages-form" onSubmit={handleSubmit}>
        <label>
          New Message:
          <textarea
            name="content"
            onChange={handleInputChange}
            value={getMessageData.content}
          />
        </label>
        <input type="submit" value="Send"/>
      </form>

      <a href="/dashboard?tabId=connections">Refresh Page</a>
    </>
  )
}

export default MessageForm;