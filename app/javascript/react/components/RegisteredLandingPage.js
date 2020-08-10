import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import DashboardComponent from './DashboardComponent';
import MyProfileComponent from './MyProfileComponent';
import MutualConnectsComponent from './MutualConnectsComponent';

const RegisteredLandingPage = (props) => {
  const [getUsers, setUsers] = useState([]);
  const [getCurrentUser, setCurrentUser] = useState(null);
  const [getTabId, setTabId] = useState('dashboard');
  
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
        debugger;
        setUsers(body.users);
        setCurrentUser(body.current_user);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const setActiveTab = (tabId) => {
    setTabId(tabId);
  }

  let displayComponent;
  let dashboardClass = '', profileClass = '', mutualConnectsClass = '';
  if (getTabId === 'dashboard') {
    dashboardClass = 'is-active';
    displayComponent = <DashboardComponent userList={getUsers}/>
  } else if (getTabId === 'my-profile') {
    profileClass = 'is-active';
    displayComponent = <MyProfileComponent currentUser={getCurrentUser}/>
  } else if (getTabId === 'mutual-connects') {
    mutualConnectsClass = 'is-active';
    displayComponent = <MutualConnectsComponent currentUser={getCurrentUser}/>
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
              <a>
                <span className="icon is-small"><i className="far fa-address-card" aria-hidden="true"></i></span>
                <span>Your Profile</span>
              </a>
            </li>

            <li id="mutual-connects" className={mutualConnectsClass} onClick={() => setActiveTab('mutual-connects')}>
              <a>
                <span className="icon is-small"><i className="far fa-handshake" aria-hidden="true"></i></span>
                <span>Mutual Connects</span>
              </a>
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