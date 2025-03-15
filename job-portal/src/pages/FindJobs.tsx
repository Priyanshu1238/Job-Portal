// import React from 'react'

// import { Divider } from "@mantine/core"
import Jobs from "../FindJobs/Jobs"
import SerachBar from "../FindJobs/SerachBar"

// import Footer from "../footer/Footer"
// import Header from "..header/Header"

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans">
     
    <SerachBar/>
    <Jobs/>
    
    </div>
  )
}

export default FindJobs