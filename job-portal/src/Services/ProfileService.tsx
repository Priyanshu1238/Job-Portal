import axios from "axios"
const base_url="http://localhost:8080/profiles/"
const getProfile=async (id:number)=>{
    return axios.post(`${base_url}get/${id}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
const updateProfiler=async (profile:any)=>{
    return axios.put(`${base_url}update`,profile)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}
export {getProfile,updateProfiler}