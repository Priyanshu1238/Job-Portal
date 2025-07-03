// import React from 'react'


import { Divider} from "@mantine/core"

import ApplicationForm from "./ApplicationForm"
import { timeAgo } from "../../Services/Utilities"

const ApplyJobForm = (props:any) => {
    
  return (
    
    <div className="w-2/3 mx-auto">

   


        <div className="flex justify-between mb-2" >
                    <div className="flex gap-2 items-center">
                        <div className="p-2 bg-mine-shaft-800 rounded-lg">
                            <img  className="h-12" src={`../Icons/${props.company}.png`}/>
                            </div>
                        <div>
                            <div className="font-semibold text-2xl">{props.jobTitle}</div>
                            <div className="text-lg text-mine-shaft-300">{props.company} &bull; {timeAgo(props.postTime)} &#x2022; {props.applicants?props.applicants.length:0}  Applicants</div>
                        </div>
        
                        
        
                    </div>
                    
        
                    
        </div>
        <Divider my="xl"/>
        <ApplicationForm/>
    </div>
    
  
  )
}

export default ApplyJobForm