import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import LearnMorePage from './LearnMorePage';
import RegisteredLandingPage from './RegisteredLandingPage';
import UserProfilePage from './UserProfilePage';

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/learn-more" component={LearnMorePage} />
        <Route exact path="/dashboard" component={RegisteredLandingPage} />
        <Route exact path="/my-profile" component={RegisteredLandingPage} />
        <Route exact path="/connections" component={RegisteredLandingPage} />
        <Route exact path="/users/:id" component={UserProfilePage} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
