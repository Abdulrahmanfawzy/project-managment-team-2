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


import {
  ForgetPassPage,
  LoginPage,
  SignupPage,
  ResetPasswordPage,
} from "./routes/AllDashboardPages";
import { ProfilePageData ,ProfileTasksPage,ProfileFilesPage,ProfileAboutPage} from "./routes/AllDashboardPages";
import {Calendar} from "./routes/AllDashboardPages"
import TasksPage from "./routes/TasksPage";
import App from "@/App";

import { createBrowserRouter } from "react-router-dom";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/signin",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/forgetPass",
        element: <ForgetPassPage />,
      },
      {
        path: "/resetPass",
        element: <ResetPasswordPage />,
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
        ],
      },
    ],
  },
]);