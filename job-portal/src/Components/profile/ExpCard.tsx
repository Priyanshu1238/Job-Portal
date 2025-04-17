// import React from 'react'

import { Button } from "@mantine/core"
import { useState } from "react"
import ExpInput from "./ExpInput";
import { formatDate } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import Experiences from "./Experiences";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationSErvice";

// import { faBookmark } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ExpCard = (props:any) => {
    const dispatch=useDispatch();
    const[edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const handleDelete=()=>{

        let exp=[...profile.experiences];
        exp.splice(props.index,1);
        let updatedProfile={...profile,experiences:exp};
        
        dispatch(changeProfile(updatedProfile));
        successNotification("Success","Experience deleted successfully");

    }
  return (
    !edit?
    <div>
        <div className="flex justify-between mb-2" >
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <img  className="h-7" src={`./Icons/${props.company}.png`}/>
                            </div>
                        <div className="flex flex-col ">
                            <div className="font-semibold">{props.title}</div>
                            <div className="text-sm text-mine-shaft-300">{props.company} &#x2022; {props.location}</div>
                        </div>
                    </div>
                    {/* <FontAwesomeIcon icon={faBookmark} className="cursor-pointer"/> */}
                    <div className="text-sm text-mine-shaft-300">
                        {/* Jan 2022 - Present */}{formatDate(props.startDate)} - { props.working?"Present":formatDate(props.endDate)}
                    </div>
                </div>
                <div className="text-justify text-mine-shaft-300 text-sm">
                {props.description} 
            </div> 
            {
                props.edit&&
                <div className="flex gap-5">
                    <Button onClick={()=>setEdit(true)} color="brightSun.4" variant="outline">Edit</Button>
                    <Button  color="red.8" onClick={handleDelete} variant="light">Delete</Button>

                </div>
            }
    </div>:<ExpInput {...props} setEdit={setEdit}/>
  )
}

export default ExpCard