import { jwtDecode } from "jwt-decode";

import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";

interface ProtectedRouteProps{
    children:React.JSX.Element;
    allowedRoles?:string[];
}

const ProtectedRoute :React.FC<ProtectedRouteProps>=({children,allowedRoles}) =>{


    const token=useSelector((state:any)=>state.jwt);
    if(!token)
    {
        return <Navigate to="/login"/>
        // return <Navigate to="/login">
    }
    const decoded:any=jwtDecode(token);
    if(allowedRoles && !allowedRoles.includes(decoded.accountType)) return <Navigate to="/unauthorized"/>;
    return children;
}
export default ProtectedRoute
 

