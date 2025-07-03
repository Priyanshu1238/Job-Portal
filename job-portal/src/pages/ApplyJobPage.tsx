import {  useNavigate, useParams } from "react-router-dom"
// import PostJob from "../postjob/PostJob"
import { Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import ApplyJobForm from "../Components/applyJob/ApplyJobForm"
import { useEffect, useState } from "react"
import { getJob } from "../Services/JobServices"




const ApplyJobPage = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const[job,setJob]=useState<any>();
  useEffect(()=>{

    window.scrollTo(0,0);
    getJob(id).then((res)=>{
      setJob(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[id])
  return (
   
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
         
                    <Button onClick={()=>navigate(-1)} leftSection={<FontAwesomeIcon icon={faArrowLeft}/>} variant="light" color="brightSun.4">Back</Button>
                
                <ApplyJobForm {...job}/>
    </div>
  )
}

export default ApplyJobPage