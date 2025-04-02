// import React from 'react'

import { Button } from "@mantine/core"
import { useState } from "react"
import ExpInput from "./ExpInput";

// import { faBookmark } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ExpCard = (props:any) => {
    const[edit,setEdit]=useState(false);
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
                        {/* Jan 2022 - Present */}{props.startDate} - {props.endDate}
                    </div>
                </div>
                <div className="text-justify text-mine-shaft-300 text-sm">
                {props.description} 
            </div> 
            {
                props.edit&&
                <div className="flex gap-5">
                    <Button onClick={()=>setEdit(true)} color="brightSun.4" variant="outline">Edit</Button>
                    <Button  color="red.8" variant="light">Delete</Button>

                </div>
            }
    </div>:<ExpInput setEdit={setEdit}/>
  )
}

export default ExpCard