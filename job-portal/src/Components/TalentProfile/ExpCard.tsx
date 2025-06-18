// import React from 'react'

import { formatDate } from "../../Services/Utilities"

// import { faBookmark } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ExpCard = (props:any) => {
  return (
    <div>
        <div className="flex justify-between mb-2" >
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <img  className="h-7" src={`../Icons/${props.company}.png`}/>
                            </div>
                        <div className="flex flex-col ">
                            <div className="font-semibold">{props.title}</div>
                            <div className="text-sm text-mine-shaft-300">{props.company} &#x2022; {props.location}</div>
                        </div>
                    </div>
                    {/* <FontAwesomeIcon icon={faBookmark} className="cursor-pointer"/> */}
                    <div className="text-sm text-mine-shaft-300">
                        {/* Jan 2022 - Present */}{formatDate(props.startDate)} - {formatDate(props.endDate)}
                    </div>
                </div>
                <div className="text-justify text-mine-shaft-300 text-sm">
                {props.description} 
            </div> 
    </div>
  )
}

export default ExpCard