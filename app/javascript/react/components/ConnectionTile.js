import React from 'react';

const ConnectionTile = ({userData}) => {

  return (
    <>
      <div className="box connection">
        {/* Will become a link to messages pertaining to this connection. */}
        <a>{userData.first_name}</a>
      </div>
    </>
  )
}

export default ConnectionTile;