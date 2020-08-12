import React from "react";

const UserProfilePage = (props) => {
  const userData = props.location.state;

  let activeStatus;
  let activeStyleClass;
  if (userData.active === true) {
    activeStatus = "Active";
    activeStyleClass = "button is-success"
  } else {
    activeStatus = "Inactive"
    activeStyleClass = "button is-danger"
  }

  return (
    <>
      <div className="buttons is-centered">
        <button className="connect button is-primary">
          Connect
        </button>
      </div>

      <div className="profile container is-widescreen">
        <button class={activeStyleClass} title="Disabled button" disabled>{activeStatus}</button>

        <section className="box profile-section top">
          <h1 className="title is-4">Personal Details</h1>
          <hr className="horizontal-rule"/>
          <h1><strong>First Name: </strong>{userData.first_name}</h1>
          <h1><strong>Last Name: </strong>{userData.last_name}</h1>
          <h1><strong>Town: </strong>{userData.town}</h1>
          <h1><strong>Zip Code: </strong>{userData.zip_code}</h1>
        </section>

        <section className="box profile-section middle">
          <h1 className="title is-4">About You</h1>
          <h1 className="subtitle">In your own words...</h1>
          <hr className="horizontal-rule" />
          <h1><strong>Personal Bio: </strong>{userData.bio}</h1>
        </section>

        <section className="box profile-section middle">
          <h1 className="title is-4">Work Experience</h1>
          <hr className="horizontal-rule" />
          <h1><strong>Company: </strong>{userData.company}</h1>
          <h1><strong>Job Title: </strong>{userData.job_title}</h1>
          <h1><strong>LinkedIn URL: </strong>{userData.linkedin_url}</h1>
          <h1><strong>GitHub URL: </strong>{userData.github_url}</h1>
        </section>

        <section className="box profile-section bottom">
          <h1 className="title is-4">Languages & Technologies</h1>
          <hr className="horizontal-rule" />
          <h1><strong>Programming Language(s): </strong>{userData.programming_lang}</h1>
          <h1><strong>Technologies: </strong>{userData.technology}</h1>
        </section>
      </div>
    </>
  )
}

export default UserProfilePage;