import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import UserTile from './UserTile';

const DashboardComponent = ({userList, currentUser}) => {

  const listUsers = userList.map((user) => {
    return (
      <UserTile key={user.id} userData={user} currentUser={currentUser} />
    );
  });

  let header;
  if (currentUser === null) {
    header = "" 
  } else if (currentUser.role === 'mentor') {
    header = "Mentees Near Me"
  } else {
    header = "Mentors Near Me"
  }
  
  return (
    <div className="dashboard container is-widescreen">
      <div id="card-container" className="container">
        <h1 id="dashboard-header">{header}</h1>
        <div className="columns is-multiline">
          {listUsers}
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent;