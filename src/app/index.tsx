<<<<<<< HEAD
=======
// // createBrowserRouter (Routes only)

// import { Routes,  Route} from "react-router"
// import TasksPage from "./routes/TasksPage"
// import DashboardLayout from "@/components/layout/dashboardLayout"
// import Login from "@/components/Login"
// import Signup from "@/components/Signup"
// import AuthLayout from "src/components/layout/AuthLayout.tsx"
// function Router() {
//   return (
//     <Routes>
//       <Route path="/" element={<DashboardLayout />}>
//         <Route index element={<p>Home Page</p>} />
//         <Route path="/tasks" element={<TasksPage />} />
//       </Route>
//       <Route path="/auth" element={<AuthLayout />}>
//         <Route index={true} element={<Login />}></Route>
//         <Route path="/signup" element={<Signup />}></Route>
//       </Route>
//     </Routes>
//   );
// }

// export default Router

>>>>>>> bd80282 (feat(auth): implement OTP verification and reset password functionality with new components and routing)
import {
  ForgetPassPage,
  LoginPage,
  SignupPage,
  VerifyOTP,
  ResetPasswordPage,
} from "./routes/AllDashboardPages";
import {
  ProfilePageData,
  ProfileTasksPage,
  ProfileFilesPage,
  ProfileAboutPage,
  Error,
  Dashboard,
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
            element: <Dashboard />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
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
