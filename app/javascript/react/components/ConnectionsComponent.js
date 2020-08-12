import React, { useState, useEffect } from 'react';
import ConnectionTile from './ConnectionTile';

const ConnectionsComponent = () => {
  const [getConnections, setConnections] = useState([]);

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
        setConnections(...getConnections, body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const connectionsList = getConnections.map((connection) => {
    return (
      <ConnectionTile key={connection.id} userData={connection} />
    );
  });

  return (
    <div className="connections container is-widescreen">
      <div className="columns">
        <div className="column is-left">
          {connectionsList}
        </div>
        <div className="column is-right">
          Hello!
        </div>
      </div>
    </div>
  )
}

export default ConnectionsComponent;