import { Outlet } from "react-router"
import AuthPagesNav from "../AuthPagesNav"

function AuthLayout() {
    return (
        <div className="min-h-screen">
            <AuthPagesNav/>
            <Outlet/>
        </div>
    )
}

export default AuthLayout
