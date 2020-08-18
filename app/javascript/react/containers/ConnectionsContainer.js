import React, { useState, useEffect } from 'react';
import ConnectionTile from '../components/ConnectionTile';
import UserInterestsContainer from './UserInterestsContainer';
import MessagesContainer from './MessagesContainer';

const ConnectionsContainer = () => {
  const [getConnections, setConnections] = useState([]);
  const [getSelectedConnectionId, setSelectedConnectionId] = useState(null);
  const [getUserInterests, setUserInterests] = useState([]);
  const [getSelectedUserId, setSelectedUserId] = useState(null);
  const [getMessages, setMessages] = useState([]);
  const [getSelectedUserMessages, setSelectedUserMessages] = useState([]);

  useEffect(() => {
    fetch("/api/v1/connections")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setConnections(...getConnections, body.userConnections);
        setUserInterests(...getUserInterests, body.userInterests);
        setMessages(...getMessages, body.userMessages);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const setSelectedUserInfo = (userId) => {
    setSelectedUserId(userId);
    setSelectedUserMessages(getMessages.filter((message) => {
      return message.receiver_id == userId || message.sender_id == userId  
    }));

    getConnections.forEach((connection) => {
      if (connection.interest_id === userId) {
        setSelectedConnectionId(connection.id)
      }
    })
  }

  return (
    <div className="connections container is-widescreen">
      <div className="columns">
        <div className="column is-one-third">
          <UserInterestsContainer
            userConnections={getConnections}
            userInterests={getUserInterests}
            setSelectedUserInfo={setSelectedUserInfo}
            selectedUserId={getSelectedUserId}
          />
        </div>

        <div className="column is-two-thirds">
          <MessagesContainer
            selectedUserMessages={getSelectedUserMessages}
            selectedConnectionId={getSelectedConnectionId}
            selectedUserId={getSelectedUserId}  
          />
        </div>
      </div>
    </div>
  )
}

export default ConnectionsContainer;