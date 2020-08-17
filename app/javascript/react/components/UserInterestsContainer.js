import React from 'react';
import ConnectionTile from './ConnectionTile';

const UserInterestsContainer = ({userConnections, userInterests, setSelectedUserInfo, selectedUserId}) => {

  const userList = userInterests.map((user) => {
    const handleNameClick = () => {
      setSelectedUserInfo(user.id);
    }    

    let selectedStatus = false;
    if (user.id === selectedUserId) {
      selectedStatus = true;
    }

    return (
      <ConnectionTile 
        key={user.id}
        userData={user}
        handleNameClick={handleNameClick}
        selectedStatus={selectedStatus}
      />
    );
  });

  return (
    <>
      {userList}
    </>
  )
}

export default UserInterestsContainer;