import React from "react";
import "./App.css";
import Bootnav from "./assets/Bootnav";
import Dashboardstats from "./assets/Dashboardstats";
import Dashboardbutton from "./assets/dashboardbutton";
import DashboardCards from "./assets/DashboardCards";
import ALLprojectapage from "./ALLprojectapage";
import Filespage from "./assets/Filespage";
import Taskspage from "./assets/Taskspage";
import Mteeinspage from "./Mteeinspage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar خارج Routes */}
      <Bootnav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <DashboardCards />
              <Dashboardstats/>
              <Dashboardbutton />
            </>
          }
        />

        <Route path="/projects" element={<ALLprojectapage />} />
        <Route path="/files" element={<Filespage />} />
        <Route path="/tasks" element={<Taskspage />} />
        <Route path="/mteeins" element={<Mteeinspage />} />
      </Routes>
    </>
  );
}

export default App;