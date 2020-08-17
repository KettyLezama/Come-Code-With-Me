import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import DashboardComponent from './DashboardComponent';
import MyProfileComponent from './MyProfileComponent';
import ConnectionsContainer from './ConnectionsContainer';

const RegisteredLandingPage = (props) => {

  // props.match.params (look for query param which can be used to set default state of tabId )
  let defaultTabId = "dashboard"

  if (props.match.params.tabId){
    defaultTabId == props.match.params.tabId
  }

  const [getUsers, setUsers] = useState([]);
  const [getCurrentUser, setCurrentUser] = useState(null);
  const [getTabId, setTabId] = useState(defaultTabId);
  
  useEffect(() => {
    fetch("/api/v1/users")
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
        setUsers(body.users);
        setCurrentUser(body.current_user);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const setActiveTab = (tabId) => {
    setTabId(tabId);
  }

  let displayComponent;
  let dashboardClass = '', profileClass = '', ConnectionsClass = '';
  if (getTabId === 'dashboard') {
    dashboardClass = 'is-active';
    displayComponent = <DashboardComponent userList={getUsers} currentUser={getCurrentUser} />
  } else if (getTabId === 'my-profile') {
    profileClass = 'is-active';
    displayComponent = <MyProfileComponent currentUser={getCurrentUser} />
  } else if (getTabId === 'connections') {
    ConnectionsClass = 'is-active';
    displayComponent = <ConnectionsContainer />
  }
  
  return (
    <>
      <div id="tabs-with-content">
        <div className="tabs is-centered is-boxed">
          <ul>
            <li id="dashboard" className={dashboardClass} onClick={() => setActiveTab('dashboard')}>
              <Link to={`/dashboard`}>
                <span className="icon is-small"><i className="fas fa-users" aria-hidden="true"></i></span>
                <span>Dashboard</span>
              </Link>
            </li>

            <li id="my-profile" className={profileClass} onClick={() => setActiveTab('my-profile')}>
              <Link to={`/my-profile`}>
                <span className="icon is-small"><i className="far fa-address-card" aria-hidden="true"></i></span>
                <span>My Profile</span>
              </Link>
            </li>

            <li id="connections" className={ConnectionsClass} onClick={() => setActiveTab('connections')}>
              <Link to={`/connections`}>
                <span className="icon is-small"><i className="far fa-handshake" aria-hidden="true"></i></span>
                <span>Connections</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="tab-content">
        {displayComponent}
      </section>
    </>
  )
}

export default RegisteredLandingPage;