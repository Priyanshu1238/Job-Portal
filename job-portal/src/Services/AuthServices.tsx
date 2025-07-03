
import { removeUser } from "../Slices/UserSlice";
import axiosInstance from "../Interceptor/AxiosInterceptor";

const loginUser=async (login:any)=>{
    return axiosInstance.post(`/auth/login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}


//self-create
const wayToLogout=(navigate:any)=>{
    localStorage.removeItem('token');
    removeUser();
    navigate('/');
}
export {loginUser,wayToLogout};