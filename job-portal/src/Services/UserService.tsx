import axios from "axios"
const base_url="http://localhost:8080/users/"
const registerUser=async (user:any)=>{
    return axios.post(`${base_url}register`,user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
const loginUser=async (user:any)=>{
    return axios.post(`${base_url}login`,user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
const sendOTP=async (email:any)=>{
    return axios.post(`${base_url}sendOtp/${email}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
const verifyOtp=async (email:any,otp:any)=>
{
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
const changePassword=async (email:string,password:string)=>{
    return axios.post(`${base_url}changePassword`,{email,password})
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
export {registerUser,loginUser,sendOTP,verifyOtp,changePassword}