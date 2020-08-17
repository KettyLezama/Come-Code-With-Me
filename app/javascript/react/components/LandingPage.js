import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {

  return (
    <section id="landing-page" className="hero is-fullheight">
      <div className="hero-body">
        <div className="landing-title container is-fullhd">
          <h1 id="landing-title" className="title is-large">
              Empowered women, empower women.
          </h1>
          <div className="buttons is-centered">
            <Link to={`/learn-more`} className="learn-more button is-primary">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage;