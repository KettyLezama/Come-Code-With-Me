import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import UserTile from './UserTile';

const DashboardComponent = ({userList}) => {

  const listUsers = userList.map((user) => {
    return (
      <UserTile key={user.id} userData={user} />
    );
  });
  
  return (
    <div className="dashboard container is-widescreen">
      <div id="card-container" className="container">
        <div className="columns is-multiline">
          {listUsers}
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent;