import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EventScreen } from "../components/event/EventScreen";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EventScreen />} />
      </Routes>
    </Router>
  );
};
