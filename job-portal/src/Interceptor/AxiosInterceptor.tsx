
import axios, { InternalAxiosRequestConfig } from "axios";

// import React from 'react'
const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    
    
});
console.log(import.meta.env.VITE_API_URL);

axiosInstance.interceptors.request.use(
    (config:InternalAxiosRequestConfig)=>{
        const token=localStorage.getItem('token');
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)
export const setupResponseInterceptor=(navigate:any)=>{
    axiosInstance.interceptors.response.use(
        (response)=>{
            return response;
        },
        (error)=>{
            if(error.response?.status=== 401 ){
                navigate('/login');
            }
            return Promise.reject(error);
        }
    )
}
export default axiosInstance;