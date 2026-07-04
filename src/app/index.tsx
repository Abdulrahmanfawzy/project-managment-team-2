import {
  ForgetPassPage,
  LoginPage,
  SignupPage,
  VerifyOTP,
  ResetPasswordPage,
} from "./routes/AllDashboardPages";


import {removeToken} from "../cookies/authServices";
removeToken()
import {
  ProfilePageData,
  ProfileTasksPage,
  ProfileFilesPage,
  ProfileAboutPage,
  Error,
  DashboardPage,
  AllProjects,
} from "./routes/AllDashboardPages";
import { Calendar } from "./routes/AllDashboardPages";
import TasksPage from "./routes/TasksPage";
import App from "@/App";

import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signin",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "forgetPass",
        element: <ForgetPassPage />,
      },
      {
        path: "verifyOtp",
        element: <VerifyOTP />,
      },
      {
        path: "resetPass",
        element: <ResetPasswordPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "AllProjects",
            element: <AllProjects />,
          },
          {
            path: "calendar",
            element: <Calendar />,
          },
          {
            path: "tasks",
            element: <TasksPage />,
          },
          {
            path: "profile",
            element: <ProfilePageData />,
            children: [
              {
                index: true,
                element: <ProfileAboutPage />,
              },
              {
                path: "overview",
                element: <ProfileAboutPage />,
              },
              {
                path: "tasks",
                element: <ProfileTasksPage />,
              },
              {
                path: "files",
                element: <ProfileFilesPage />,
              },
              {
                path: "*",
                element: <Error />,
              },
            ],
          },
          {
            path: "*",
            element: <Error />,
          },
        ],
      },
    ],
  },
]);
