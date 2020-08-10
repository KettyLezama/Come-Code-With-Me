import React, { useState, useEffect } from 'react';

const MyProfileComponent = ({currentUser}) => {
  return (
    <div className="container">
      <h1><strong>First Name: </strong>{currentUser.first_name}</h1>
      <h1><strong>Last Name: </strong>{currentUser.last_name}</h1>
    </div>
  )
}

export default MyProfileComponent;