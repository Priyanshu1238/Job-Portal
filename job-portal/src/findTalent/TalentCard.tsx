// import React from 'react'

import { faCalendar, faCalendarDays, faHeart, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark"
import { DateInput, TimeInput } from '@mantine/dates';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Link } from "react-router-dom"
import { useRef, useState } from "react";

const TalentCard = (props: any) => {
    const [value, setValue] = useState<Date | null>(null);
    const [opened, { open, close }] = useDisclosure(false);
    const ref=useRef<HTMLInputElement>(null);
    return (
        <div className="bg-mine-shaft-900 p-4 w-96  flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mine-shaft-400">
            <div className="flex justify-between mb-2" >
                <div className="flex gap-2 items-center">
                    <div className="">
                        <Avatar size="md" src={`/avatar-9.png`} />
                    </div>
                    <div>
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-xs text-mine-shaft-300">{props.role} &#x2022; {props.company}</div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
            </div>
            <div className="flex justify-around [&>div]:rounded-lg  font-semibold">
                {
                    props.topSkills.map((skill: any, index: any) => <div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-sm">
                        {skill}
                    </div>
                    )
                }

            </div>
            <Text className="!text-sm !text-mine-shaft-300 text-justify" lineClamp={3}>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa excepturi rem totam amet deleniti recusandae repellendus, est earum voluptatum, cumque suscipit? */}
                {props.about}
            </Text>
            <Divider size="xs" color="mineShaft.5" />
            {
                props.invited?<div className="flex gap-1  text-mine-shaft-200 text-sm items-center">
                    <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-5"/>Interview : August 27, 2024 10:00 AM
                </div>:
                <div className="flex justify-between ">
                <div className="font-semibold text-mine-shaft-200">
                    {props.expectedCtc}
                </div>
                <div className="flex gap-1 items-center text-sm text-mine-shaft-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{props.location}
                </div>
            </div>
            }
            
            <Divider color="mineShaft.7" size="xs" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
            {!props.invited&&
                <>
                 <Link to="/talent-profile">
                    <Button color="brightSun.4" variant="outline" fullWidth>Profile</Button></Link>
                <div>
                    {props.posted?
                     <Button onClick={open} rightSection={<FontAwesomeIcon icon={faCalendarDays} className="h-4 w-5"/>} color="brightSun.4" variant="light" fullWidth>Schedule</Button>
                    :<Button color="brightSun.4" variant="light" fullWidth>Message</Button>}
                </div>
                </>
            }
            {
                props.invited &&
                <>
                <div>
                <Button color="brightSun.4" variant="outline" fullWidth>Accept</Button>
                </div>
                <div>
                <Button color="brightSun.4" variant="light" fullWidth>Reject</Button>
                </div>
                </>
            }
               

            </div>
            <Modal  opened={opened} onClose={close} title="Schedule Interview" >
                {/* Modal content */}
                <div className="flex flex-col gap-4">
                <DateInput 
                        value={value}
                        onChange={setValue}
                        minDate={new Date()}
                        label="Date"
                        placeholder="Enter Date"
                        
                    />
                     <TimeInput label="Time" ref={ref} onClick={()=>ref.current?.showPicker()}/>
                     <Button color="brightSun.4" variant="light" fullWidth>Schedule</Button>
                </div>
            </Modal>
        </div>
    )
}

export default TalentCard