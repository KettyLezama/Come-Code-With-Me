import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import LearnMorePage from "./LearnMorePage";
import RegisteredLandingPage from "./RegisteredLandingPage";
import UserProfilePage from "./UserProfilePage";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/dashboard" element={<RegisteredLandingPage />} />
        <Route path="/my-profile" element={<RegisteredLandingPage />} />
        <Route path="/connections" element={<RegisteredLandingPage />} />
        <Route path="/users/:id" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
