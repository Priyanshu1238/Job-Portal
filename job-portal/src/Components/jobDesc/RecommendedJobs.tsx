// import React from 'react'

import { jobList } from "../../Data/JobData"
import JobCard from "../FindJobs/JobCard"
// import Jobs from "../FindJobs/Jobs"

const RecommendedJobs = () => {
  return (
    <div>
        <div className="text-xl font-semibold mb-5 text-bright-sun-400">Recommended Jobs</div>
        <div className="flex flex-col flex-wrap gap-5">
            {jobList.map((job,index)=>index<6 && <JobCard key={index} {...job} />)}
        </div>
    </div>
  )
}

export default RecommendedJobs