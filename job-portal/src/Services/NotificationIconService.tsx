
import axiosInstance from "../Interceptor/AxiosInterceptor";
const base_url="http://localhost:8080/notifications/";

const getNotification=async (id:any)=>{
    return axiosInstance.get(`/notifications/get/${id}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
const readNotification=async (id:any)=>{
    return axiosInstance.put(`/notifications/read/${id}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
export {getNotification,readNotification}