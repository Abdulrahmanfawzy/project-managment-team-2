// createBrowserRouter (Routes only)

import { Routes,  Route} from "react-router"
import TasksPage from "./routes/TasksPage"
import DashboardLayout from "@/components/layout/dashboardLayout"
import Login from "@/components/Login"
import Signup from "@/components/Signup"
// import AuthLayout from "src/components/layout/AuthLayout.tsx"
import ReportsPage from "./routes/ReportsPage"
// import AllProjectsPage from "./routes/AllProjectsPage"

function Router() {  
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<p>Home Page</p>} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        {/* <Route path="/projects" element={<AllProjectsPage/>} /> */}
      </Route>
      {/* <Route path="/auth" element={<AuthLayout />}> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      {/* </Route> */}
    </Routes>
  );
}

export default Router
