import React, { useState, useEffect } from 'react';

const MyProfileComponent = ({currentUser}) => {

  let activeStatus;
  let activeStyleClass;
  if (currentUser.active === true) {
    activeStatus = "Active";
    activeStyleClass = "button is-success"
  } else {
    activeStatus = "Inactive"
    activeStyleClass = "button is-danger"
  }

  return (
    <div className="profile container is-widescreen">
      <div className="buttons is-centered">
        <button className={activeStyleClass} title="Disabled button" disabled>{activeStatus}</button>
      </div>

      <section className="box profile-section top">
        <h1 className="title is-4">Personal Details</h1>
        <hr className="horizontal-rule"/>
        <h1><strong>First Name: </strong>{currentUser.first_name}</h1>
        <h1><strong>Last Name: </strong>{currentUser.last_name}</h1>
        <h1><strong>Town: </strong>{currentUser.town}</h1>
        <h1><strong>Zip Code: </strong>{currentUser.zip_code}</h1>
      </section>

      <section className="box profile-section middle">
        <h1 className="title is-4">About You</h1>
        <h1 className="subtitle">In your own words...</h1>
        <hr className="horizontal-rule" />
        <h1><strong>Personal Bio: </strong>{currentUser.bio}</h1>
      </section>

      <section className="box profile-section middle">
        <h1 className="title is-4">Work Experience</h1>
        <hr className="horizontal-rule" />
        <h1><strong>Company: </strong>{currentUser.company}</h1>
        <h1><strong>Job Title: </strong>{currentUser.job_title}</h1>
        <h1><strong>LinkedIn URL: </strong>{currentUser.linkedin_url}</h1>
        <h1><strong>GitHub URL: </strong>{currentUser.github_url}</h1>
      </section>

      <section className="box profile-section bottom">
        <h1 className="title is-4">Languages & Technologies</h1>
        <hr className="horizontal-rule" />
        <h1><strong>Programming Language(s): </strong>{currentUser.programming_lang}</h1>
        <h1><strong>Technologies: </strong>{currentUser.technology}</h1>
      </section>

      <div className="buttons is-centered">
        <button className="edit button is-primary">Edit Profile</button>
      </div>
    </div>
  )
}

export default MyProfileComponent;