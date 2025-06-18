// import React from 'react'

import { Badge, Tabs } from "@mantine/core"
// import FindJobs from "../pages/FindJobs"
// import Jobs from "../FindJobs/Jobs"
import JobDesc from "../jobDesc/JobDesc"
import { talents } from "../../Data/TalentData"
import TalentCard from "../findTalent/TalentCard"
import { useEffect, useState } from "react"

const PostedJobDesc = (props:any) => {
  const [tab,setTab]=useState("overview");
  const[arr,setArr]=useState<any>([]);
  const handleTabChange=(value:any)=>{
    setTab(value);
    if(value=="applicants")
    {
      setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED"))
    }
    else if(value=="invited")
    {
setArr(      props.applicants?.filter((x:any)=>x.applicationStatus=="INTERVIEWING")
)    }
    else if(value=="offered")
    {
       setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="OFFERED"))
    }
    else if(value=="rejected")
      {
        setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="REJECT"))
      }
    
  }
  useEffect(()=>{

    handleTabChange("overview")

  },[props])
  return (
    <div className="mt-5 w-3/4 px-5">
      {props.jobTitle?
      <>
      
      <div className="text-2xl font-semibold flex items-center">{props.jobTitle} <Badge variant="light" ml="sm" color="brightSun.4" size="sm">{props.jobStatus} </Badge></div>
      <div className="font-medium text-mine-shaft-300 mb-5">{props.location} </div>
      <div>
        <Tabs value={tab} onChange={handleTabChange} variant="outline" radius="lg">
          <Tabs.List className="[&_button]:text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5 ">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>

          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc {...props} edit={true} close={props.jobStatus=="CLOSE"} />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-10 flex flex-wrap justify-between gap-2">
              {
              arr?.length?arr.map((talent:any, index:any) =>  <TalentCard key={index} {...talent} posted={true} />):<div className="text-2xl font-semiblod justify-center">No applicants found</div>
              }
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
          <div className="mt-10 flex flex-wrap gap-2 justify-between">
              {
                arr?.length?arr.map((talent:any, index:any) => <TalentCard key={index} {...talent} invited={true} />):<div className="text-2xl font-semiblod justify-center">No data found</div>
              }
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
          <div className="mt-10 flex flex-wrap gap-2 justify-between">
              {
                arr?.length?arr.map((talent:any, index:any) => <TalentCard key={index} {...talent} offered={true} />):<div className="text-2xl font-semiblod justify-center">No data found</div>
              }
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="rejected">
          <div className="mt-10 flex flex-wrap gap-2 justify-between">
              {
                arr?.length?arr.map((talent:any, index:any) => <TalentCard key={index} {...talent} rejected={true} />):<div className="text-2xl font-semiblod justify-center">No data found</div>
              }
            </div>
          </Tabs.Panel>

        </Tabs>
      </div>
      </>:<div className="text-2xl font-semibold flex min-h-[70vh] justify-center items-center">No job selected</div>}
    </div>
  )
}

export default PostedJobDesc