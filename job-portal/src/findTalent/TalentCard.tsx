// import React from 'react'

import {  faHeart, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button, Divider, Text } from "@mantine/core"
import { Link } from "react-router-dom"

const TalentCard = (props:any) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-96  flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mine-shaft-400">
        <div className="flex justify-between mb-2" >
            <div className="flex gap-2 items-center">
                <div className="">
                    <Avatar size="md"  src={`/avatar-9.png`}/>
                    </div>
                <div>
                    <div className="font-semibold text-lg">{props.name}</div>
                    <div className="text-xs text-mine-shaft-300">{props.role} &#x2022; {props.company}</div>
                </div>
            </div>
            <FontAwesomeIcon icon={faHeart} className="cursor-pointer"/>
        </div>
        <div className="flex justify-around">
            {
            props.topSkills.map((skill:any,index:any)=><div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-sm">
                {skill}
            </div>
            )
            }
           
        </div>
        <Text className="!text-sm !text-mine-shaft-300 text-justify" lineClamp={3}>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa excepturi rem totam amet deleniti recusandae repellendus, est earum voluptatum, cumque suscipit? */}
            {props.about}
        </Text>
        <Divider  size="xs" color="mineShaft.5" />
        <div className="flex justify-between ">
            <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
            </div>
            <div className="flex gap-1 items-center text-sm text-mine-shaft-300">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>{props.location}
            </div>
        </div>
        <Divider color="mineShaft.7" size="xs"/>
        <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
            <Link to="/talent-profile">
            <Button color="brightSun.4"  variant="outline" fullWidth>Profile</Button></Link>
           <div>
           <Button  color="brightSun.4" variant="light" fullWidth>Message</Button>
           </div>
            
        </div>
    </div>
  )
}

export default TalentCard