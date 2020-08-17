import React from 'react';

const MessageTile = ({userFirstName, content}) => {

  return (
    <p>
      <strong> {userFirstName}: </strong>
      {content}
    </p>
  )
}

export default MessageTile;