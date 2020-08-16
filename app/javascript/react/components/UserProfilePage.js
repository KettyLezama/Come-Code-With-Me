import React, { useState, useEffect } from "react";

const UserProfilePage = (props) => {
  const [getNotice, setNotice] = useState("");
  const [getConnectedStatus, setConnectedStatus] = useState(false);
  const [getConnectionId, setConnectionId] = useState(null);

  const userData = props.location.state.userData;
  const currentUser = props.location.state.currentUser;
  const userId = props.match.params.id

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
        body.userConnections.forEach((connection) => {
          if (connection.interest_id === parseInt(userId)) {
            setConnectedStatus(true);
            setConnectionId(connection.id);
          }
        })
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const handleConnectClick = (event) => {
    event.preventDefault();
    if (getConnectedStatus === false) {
      fetch(`/api/v1/users/${userId}/connections`, {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({message: "Hello"}),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setNotice(body.notice)
        setConnectedStatus(true);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
    else {
      fetch(`/api/v1/users/${userId}/connections/${getConnectionId}`, {
        method: "DELETE",
        credentials: "same-origin",
        body: JSON.stringify({message: "Hello"}),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setNotice(body.notice);
        setConnectedStatus(false);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  let activeStatus;
  let activeStyleClass;
  if (userData.active === true) {
    activeStatus = "Active";
    activeStyleClass = "button is-success"
  } else {
    activeStatus = "Inactive"
    activeStyleClass = "button is-danger"
  }

  let connectedButtonContent = "Connect";
  if (getConnectedStatus === true) {
    connectedButtonContent = "Connected";
  }

  return (
    <div className="interest-profile container is-widescreen">
      <div className="user-profile buttons is-centered">
        <button className="connect button is-primary" onClick={handleConnectClick}>
          {connectedButtonContent}
        </button>
      </div>

      <section className="interest box profile-section top">
        <h1 className="title is-4">Personal Details</h1>
        <hr className="horizontal-rule"/>
        <h1><strong>First Name: </strong>{userData.first_name}</h1>
        <h1><strong>Last Name: </strong>{userData.last_name}</h1>
        <h1><strong>Town: </strong>{userData.town}</h1>
        <h1><strong>Zip Code: </strong>{userData.zip_code}</h1>
      </section>

      <section className="interest box profile-section middle">
        <h1 className="title is-4">About You</h1>
        <h1 className="subtitle">In your own words...</h1>
        <hr className="horizontal-rule" />
        <h1><strong>Personal Bio: </strong>{userData.bio}</h1>
      </section>

      <section className="interest box profile-section middle">
        <h1 className="title is-4">Work Experience</h1>
        <hr className="horizontal-rule" />
        <h1><strong>Company: </strong>{userData.company}</h1>
        <h1><strong>Job Title: </strong>{userData.job_title}</h1>
        <h1><strong>LinkedIn URL: </strong>{userData.linkedin_url}</h1>
        <h1><strong>GitHub URL: </strong>{userData.github_url}</h1>
      </section>

      <section className="interest box profile-section bottom">
        <h1 className="title is-4">Languages & Technologies</h1>
        <hr className="horizontal-rule" />
        <h1><strong>Programming Language(s): </strong>{userData.programming_lang}</h1>
        <h1><strong>Technologies: </strong>{userData.technology}</h1>
      </section>
    </div>
  )
}

export default UserProfilePage;