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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Router} from "./app/index";
// import Router from "./app/index";
import Nav from "./components/shared/AuthPagesNav";
import Login from "./features/Authentication/components/Login";
import Signup from "./features/Authentication/components/Signup";
import ResetPassword from "./features/Authentication/components/Signup";
import ProfilePage from "./features/profilePage/components/profilePage";
import Calendar from "./features/AddMettingPage/components/calendar";
import { CalendarProvider } from "./features/AddMettingPage/components/calendar/calendar-provider";
import Projectbref from "./features/profilePage/components/Projectbref";
import AlertModal from "./components/shared/AlertModal";
import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner"; // اتأكد إن المسار صح
// const { t } = useTranslation();

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Outlet/>
      <Toaster richColors position="top-right" />
    </>
  );
}
