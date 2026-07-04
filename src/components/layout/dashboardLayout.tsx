import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"

function DashboardLayout() {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 px-3 md:px-5 lg:px-10 xl:px-4">
          <Outlet />
        </div>
      </div>
    );
}

export default DashboardLayout
