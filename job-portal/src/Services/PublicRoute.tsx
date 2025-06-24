import { jwtDecode } from "jwt-decode";

import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";

interface PublicRouteProps{
    children:React.JSX.Element;
}

const PublicRoute :React.FC<PublicRouteProps>=({children}) =>{


    const token=useSelector((state:any)=>state.jwt);
    if(token)
    {
        return <Navigate to="/"/>
    }
    return children;
}
export default PublicRoute
 

