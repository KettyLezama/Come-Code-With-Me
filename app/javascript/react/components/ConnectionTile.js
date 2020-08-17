import React from 'react';
import { Link } from 'react-router-dom';

const ConnectionTile = ({userData, handleNameClick, selectedStatus}) => {

  let value = "";
  if (selectedStatus === true) {
    value = "selected-name";
  }

  return (
    <>
      <div className="box connection">
        <a className={value} onClick={handleNameClick}>{userData.first_name}</a>
      </div>
    </>
  )
}

export default ConnectionTile;