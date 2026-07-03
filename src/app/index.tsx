// createBrowserRouter (Routes only)

import { Routes,  Route} from "react-router"
import TasksPage from "./routes/TasksPage"
import DashboardLayout from "@/components/layout/dashboardLayout"
import ReportsPage from "./routes/ReportsPage"

function Router() {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout/>}>
        <Route  index element={<p>Home Page</p>} />
        <Route  path="/tasks" element={<TasksPage />} />
        <Route  path="/reports" element={<ReportsPage />} />
      </Route>
    </Routes>
  )
}

export default Router
