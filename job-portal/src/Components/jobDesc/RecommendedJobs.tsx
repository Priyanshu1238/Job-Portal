// import React from 'react'

import { useParams } from "react-router-dom"
// import { jobList } from "../../Data/JobData"
import JobCard from "../FindJobs/JobCard"
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobServices";
// import Jobs from "../FindJobs/Jobs"

const RecommendedJobs = () => {
  const{id}=useParams();
  const[jobList,setJobList]=useState<any>(null);
  useEffect(()=>{
    getAllJobs().then((res)=>{
      setJobList(res);

    }).catch((err)=>{
      console.log(err);
    })
  },[id])
  return (
    <div>
        <div className="text-xl font-semibold mb-5 text-bright-sun-400">Recommended Jobs</div>
        <div className="flex flex-col flex-wrap gap-5">
            {jobList?.map((job:any,index:number)=>index<6 && id!=job.id && <JobCard key={index} {...job} />)}
        </div>
    </div>
  )
}

export default RecommendedJobs