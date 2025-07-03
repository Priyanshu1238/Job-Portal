// import React from 'react'

import { faCalendarDays, faHeart, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark"
import { DateInput, TimeInput } from '@mantine/dates';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Link, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react";

import { getProfile } from "../../Services/ProfileService";
import { errorNotification, successNotification } from "../../Services/NotificationSErvice";
import { changeApplicationStatus } from "../../Services/JobServices";
import { formatInterviewTime, openResumeInNewTab } from "../../Services/Utilities";

const TalentCard = (props: any) => {
    const {id}=useParams();
    const [date, setDate] = useState<Date | null>(null);
    const[time,setTime]=useState<any>(null);
    const [opened, { open, close }] = useDisclosure(false);
    const [app, {open:openApp,close:closeApp} ]=useDisclosure(false);
    const ref=useRef<HTMLInputElement>(null);
    const [profile,setProfile]=useState<any>({});
    useEffect(()=>{
        if(props.applicantId) getProfile(props.applicantId).then((res)=>{
            setProfile(res);
        }).catch((err)=>{
            console.log(err);
        })
        else setProfile(props);
    },[props])
    const handleOffer=(status:string)=>{
              let interview:any={id,applicantId:profile?.id,applicationStatus:status};
              if(status=="INTERVIEWING")
              {
                        const[hours,minutes]=time.split(":").map(Number);
                        date?.setHours(hours,minutes);
                        interview={...interview,interviewTime:date?.toISOString()};
              }

        // console.log(date)
  
        changeApplicationStatus(interview).then(()=>{
            if(status=="INTERVIEWING")successNotification("Interview Scheduled ","Interview Scheduled successfully");
            else if(status=="OFFERED")successNotification("OFFERED ","Offered has been sent sucessfully");
            else successNotification("Rejected ","Applicant has been rejected");
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
            errorNotification("error",err.response.data.errorMessage)
        })
    }
    return (
        <div className="bg-mine-shaft-900 p-4 w-96  flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mine-shaft-400">
            <div className="flex justify-between mb-2" >
                <div className="flex gap-2 items-center">
                    <div className="">
                        <Avatar size="md" src={profile?.picture?`data:image/jpeg;base64,${profile?.picture}`:'./avatar.jpg'} />
                    </div>
                    <div>
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-xs text-mine-shaft-300">{profile?.jobTitle} &#x2022; {profile?.company}</div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
            </div>
            <div className="flex justify-around [&>div]:rounded-lg  font-semibold">
                {
                    profile?.skills?.map((skill: any, index: any) => index <4 &&<div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-sm">
                        {skill}
                    </div>
                    )
                }

            </div>
            <Text className="!text-sm !text-mine-shaft-300 text-justify" lineClamp={3}>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa excepturi rem totam amet deleniti recusandae repellendus, est earum voluptatum, cumque suscipit? */}
                {profile?.about}
            </Text>
            <Divider size="xs" color="mineShaft.5" />
            {
                props.invited?<div className="flex gap-1  text-mine-shaft-200 text-sm items-center">
                    <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-5"/>Interview : {formatInterviewTime(props.interviewTime)}
                </div>:
                <div className="flex justify-between ">
                <div className="font-semibold text-mine-shaft-200">
                    {/* {props.expectedCtc} */}Experience : {profile.totalExp?profile.totalExp:0} years
                </div>
                <div className="flex gap-1 items-center text-sm text-mine-shaft-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{profile?.location}
                </div>
            </div>
            }
            
            <Divider color="mineShaft.7" size="xs" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
            {!props.invited&&
                <>
                 <Link to={`/talent-profile/${profile?.id}`}>
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
                <Button color="brightSun.4" variant="outline" onClick={()=>handleOffer("OFFERED")} fullWidth>Accept</Button>
                </div>
                <div>
                <Button color="brightSun.4" variant="light" onClick={()=>handleOffer("REJECT")} fullWidth>Reject</Button>
                </div>
                </>
            }
               

            </div>
            {
                (props.invited || props.posted)&&
                <Button color="brightSun.4" variant="light" onClick={openApp} fullWidth autoContrast>View Application</Button>
                
            }
            <Modal  opened={opened} onClose={close} title="Schedule Interview" >
                {/* Modal content */}
                <div className="flex flex-col gap-4">
                <DateInput 
                        value={date}
                        onChange={setDate}
                        minDate={new Date()}
                        label="Date"
                        placeholder="Enter Date"
                        
                    />
                     <TimeInput label="Time" value={time} onChange={(event)=>setTime(event.currentTarget.value)} minTime="" ref={ref} onClick={()=>ref.current?.showPicker()}/>
                     <Button onClick={()=>handleOffer("INTERVIEWING")}color="brightSun.4" variant="light" fullWidth>Schedule</Button>
                </div>
            </Modal>
            <Modal  opened={app} onClose={closeApp} title="view Applicant" >
                {/* Modal content */}
                <div className="">
                    <div>
                    Email: &emsp;<a className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={`mailto:${props.email}`}>{props.email}</a>
                </div>
                <div >
                    Website:&emsp;<a target="_blank" className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={props.Website}>{props.Website}</a>
                </div>
                <div >
                    Resume:&emsp;<span className="text-bright-sun-400 hover:underline cursor-pointer text-center" onClick={()=>openResumeInNewTab(props.resume)}>{props.name}</span>
                </div>
                 <div >
                    Cover Letter:&emsp;<div>{props.coverLetter}</div>
                </div>
                </div>
            </Modal>
        </div>
    )
}

export default TalentCard