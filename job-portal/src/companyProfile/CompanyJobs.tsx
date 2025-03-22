// import React from 'react'

import { jobList } from "../Data/JobData"
import JobCard from "../FindJobs/JobCard"

const CompanyJobs = () => {
  return (
      <div className="flex mt-10 flex-wrap  gap-3 justify-between">
          {
              jobList.map((job, index) => <JobCard key={index} {...job} />)
          }
      </div>
  )
}

export default CompanyJobs