// import React from 'react'

import { faBookmark, faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons"
// import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Text } from "@mantine/core"
import { Link } from "react-router-dom"

const Card = (props:any) => {
  return (
    <Link to="/jobs" className="bg-mine-shaft-900 p-4 w-[412px]  flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mine-shaft-400">
        <div className="flex justify-between mb-2" >
            <div className="flex gap-2 items-center">
                <div className="">
                    <img  className="h-7" src={`./Icons/${props.company}.png`}/>
                    </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &#x2022; {props.applicants} Applicants</div>
                </div>
            </div>
            {props.saved?<FontAwesomeIcon icon={faBookmark} className="text-bright-sun-400"/>:<FontAwesomeIcon icon={faBookmark} className="cursor-pointer"/>}
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-sm !text-mine-shaft-300 text-justify" lineClamp={3}>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa excepturi rem totam amet deleniti recusandae repellendus, est earum voluptatum, cumque suscipit? */}
            {props.description}
        </Text>
        <Divider  size="xs" color="mineShaft.5" />
        <div className="flex justify-between ">
            <div className="font-semibold text-mine-shaft-200">
            &#8377;{props.package}
            </div>
            <div className="flex gap-1 items-center text-xs text-mine-shaft-400">
                <FontAwesomeIcon icon={faClock}/>{props.applied?"Applied ":props.offered?"Interviewed " :"Posted "}{props.postedDaysAgo} days ago
            </div>
        </div>
        {(props.offered||props.interview) && <Divider  size="xs" color="mineShaft.5" mb="2"/>}
        { props.offered &&
            <div className="flex gap-2">
                <Button color="brightSun.4" variant="outline" fullWidth>Accept</Button>
                <Button color="brightSun.4" variant="light" fullWidth>Reject</Button>

            </div>
        }
        {
            props.interview&&
            <div className="flex gap-1  text-mine-shaft-200 text-sm items-center">
                                <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-5 text-bright-sun-300"/> <span className="font-semibold">Sun, 25 August</span> &bull; 10:00 AM
                            </div>
        }
    </Link>
  )
}

export default Card