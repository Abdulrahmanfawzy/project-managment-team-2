import { getToken } from "@/cookies/authServices";
import { Navigate ,Outlet} from "react-router-dom";

const ProtectedRoute=()=>{
    const token=getToken();
    
    return(token && token!=="undefined"? <Outlet/> : <Navigate to="/signin" replace/>);
}

export default ProtectedRoute;