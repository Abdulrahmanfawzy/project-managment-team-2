import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"

function DashboardLayout() {
    return (
        <div className="min-h-screen">
            {/* <Navbar/> */}
            <Outlet/>
        </div>
    )
}

export default DashboardLayout
