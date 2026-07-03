// createBrowserRouter (Routes only)

import { Routes,  Route} from "react-router"
import TasksPage from "./routes/TasksPage"
import DashboardLayout from "@/components/layout/dashboardLayout"
import Login from "@/components/Login"
import Signup from "@/components/Signup"
import AuthLayout from "src/components/layout/AuthLayout.tsx"
function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<p>Home Page</p>} />
        <Route path="/tasks" element={<TasksPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index={true} element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
    </Routes>
  );
}

export default Router
