import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import LearnMorePage from './LearnMorePage';
import DashboardIndexPage from './DashboardIndexPage';

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/learn-more" component={LearnMorePage} />
        <Route exact path="/dashboard" component={DashboardIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
