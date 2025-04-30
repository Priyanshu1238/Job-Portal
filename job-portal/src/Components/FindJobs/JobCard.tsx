// import React from 'react'

import { faBookBookmark, faBookmark, faClock } from "@fortawesome/free-solid-svg-icons"
// import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Text } from "@mantine/core"
import { Link } from "react-router-dom"
import { timeAgo } from "../../Services/Utilities"
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../../Slices/ProfileSlice"

const JobCard = (props:any) => {
    const profile=useSelector((state:any)=>state.profile);
    const dispatch=useDispatch()
    const handleSaveJob=()=>{
        let savedJobs:any=[...profile.savedJobs];
        if(savedJobs?.includes(props.id)){
            savedJobs=savedJobs?.filter((id:any)=>id!==props.id)
        }else{
            savedJobs=[...savedJobs,props.id];
        }
        let updatedProfile={...profile,savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));
    }
  return (
    <div  className="bg-mine-shaft-900 p-4 w-[412px]  flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mine-shaft-400">
        <div className="flex justify-between mb-2" >
            <div className="flex gap-2 items-center">
                <div className="">
                    <img  className="h-7" src={`../Icons/${props.company}.png`}/>
                    </div>
                <div>
                    <div className="font-semibold text-lg">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300"><Link  to="/company">{props.company} 
                    </Link>
                    &#x2022; {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
            </div>
            {profile.savedJobs?.includes(props.id)?
                <FontAwesomeIcon onClick={handleSaveJob} icon={faBookBookmark} className="cursor-pointer text-bright-sun-400"/>:<FontAwesomeIcon onClick={handleSaveJob} icon={faBookmark} className="cursor-pointer hover:text-bright-sun-400"/>
            }
        </div>
        <div className="flex gap-4 justify-around [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-sm font-semibold">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-sm !text-mine-shaft-300 text-justify" lineClamp={3}>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa excepturi rem totam amet deleniti recusandae repellendus, est earum voluptatum, cumque suscipit? */}
            {props.about}
        </Text>
        <Divider  size="xs" color="mineShaft.5" />
        <div className="flex justify-between ">
            <div className="font-semibold text-mine-shaft-200">
            &#8377;{props.packageOffered} LPA
            </div>
            <div className="flex gap-1 items-center text-xs text-mine-shaft-400">
                <FontAwesomeIcon icon={faClock}/>Posted {timeAgo(props.postTime)}
            </div>
        </div>
        <Link to={`/jobs/${props.id}`}><Button fullWidth   variant="outline" color="brightSun.4">View Job</Button>
        </Link>
    </div>
  )
}

export default JobCard