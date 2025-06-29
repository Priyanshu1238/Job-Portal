// import React from 'react'


import { useEffect, useState } from "react"

import JobCard from "./JobCard"
import Sort from "./Sort"
import { getAllJobs } from "../../Services/JobServices"
import { useDispatch, useSelector } from "react-redux"
import { resetFilter } from "../../Slices/FilterSlice"
import { resetSort } from "../../Slices/SortSlice"

const Jobs = () => {
  const dispatch=useDispatch();
   const filter=useSelector((state:any)=>state.filter)
   const sort=useSelector((state:any)=>state.sort);
  const [filteredJobs,setFilteredJobs]=useState<any>([])
  
  const[jobList,setJobList]=useState([{}]);
  useEffect(()=>{
    dispatch(resetFilter());
    dispatch(resetSort());
    getAllJobs().then((res)=>{
      setJobList(res.filter((job:any)=>job.jobStatus=="ACTIVE"));

    }).catch((err)=>{
      console.log(err);
    })
  },[])

useEffect(()=>{
    if(sort=="Most Recent"){
    setJobList([...jobList].sort((a:any,b:any)=>new Date(b.postTime).getTime()-new Date(a.postTime).getTime()));
    }
    else if(sort=="Salary: Low to High"){
      setJobList([...jobList].sort((a:any,b:any)=>a.packageOffered-b.packageOffered));
    }
    else if(sort=="Salary: High to Low"){
      setJobList([...jobList].sort((a:any,b:any)=>b.packageOffered-a.packageOffered));
    }

  
},[sort])

useEffect(()=>{
    let filtered=jobList
    // console.log(filter)
    if(filter.name)filtered=filtered.filter((job:any)=>job.name.toLowerCase().includes(filter.name.toLowerCase()));
    if(filter["Job Title"] && filter["Job Title"].length>0){
      filtered=filtered.filter((job:any)=>filter["Job Title"]?.some((x:any)=>job.jobTitle.toLowerCase().includes(x.toLowerCase())))
    }
    if(filter.Location&& filter.Location.length>0){
      filtered=filtered.filter((job:any)=>filter.Location?.some((x:any)=>job.location.toLowerCase().includes(x.toLowerCase())))
    }

    if(filter.Experience && filter.Experience.length>0){
      filtered=filtered.filter((job:any)=>filter.Experience?.some((x:any)=>job.experience?.toLowerCase().includes(x.toLowerCase())))
    }


      if(filter["Job Type"] && filter["Job Type"].length>0){
      filtered=filtered.filter((job:any)=>filter["Job Type"]?.some((x:any)=>job.jobType.toLowerCase().includes(x.toLowerCase())))
    }

    if(filter.salary && filter.salary.length>0)
    {
      filtered=filtered.filter((jobs:any)=>filter.salary[0]<=jobs.packageOffered && jobs.packageOffered<=filter.salary[1])
    }
    setFilteredJobs(filtered);
  },[filter,jobList])


  return (
    <div className="px-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort/>
        
        </div>
        <div className="mt-10 flex flex-wrap gap-[50px] justify-center">
        {
          filteredJobs.map((job:any,index:any)=><JobCard key={index} {...job}/>)
        }
        </div>
        
        
    </div>
  )
}

export default Jobs