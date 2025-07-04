// import React from 'react'

import { faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider } from "@mantine/core"
import ExpCard from "./ExpCard"
import CertCard from "./CertCard"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProfile } from "../../Services/ProfileService"

const Profile = (props:any) => {
    console.log(props)
    const {id}=useParams();
    const [profile,setProfile]=useState<any>({});
    useEffect(()=>{
        window.scrollTo(0,0);
        getProfile(id).then((res)=>{
            setProfile(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
  return (
    <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className="h-48 w-48 rounded-full left-3 border-mine-shaft-900 border-8 -bottom-1/3 absolute" src={profile?.picture?`data:image/jpeg;base64,${profile?.picture}`:'../avatar.jpg'}  alt="" />
            </div>
            <div className="px-3 mt-16 ">
                <div className="text-3xl font-semibold flex justify-between">{profile?.name}
                    <Button color="brightSun.4" variant="light" >Message</Button>
                </div>
                <div className="text-xl flex ">{profile?.jobTitle} &bull; {profile?.company}</div>
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/> {profile?.location}
            </div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <FontAwesomeIcon icon={faBriefcase}/>Experience: {profile?.totalExp} years
            </div>
        </div>
        <Divider size="xs" my="lg"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">About</div>
            <div className="text-sm text-mine-shaft-300 text-justify">{profile?.about} </div>
        </div>
        <Divider size="xs" my="lg"/>

        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">Skills</div>
            {/* <div className="text-sm text-mine-shaft-300 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia minus fugit a dolor ea nemo unde totam nostrum error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis magnam, molestias alias, dignissimos sunt incidunt numquam laudantium quasi deleniti qui. Numquam nobis nulla facere cupiditate pariatur eum quas ut cumque, iste quasi animi error.</div> */}
            <div className="flex flex-wrap gap-2">
                {
                    profile?.skills?.map((skill:any,index:any)=><div key={index} className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium">
                {skill}
                </div>)
                }
            </div>
            
           
        </div>
        <Divider size="xs" my="lg"/>

        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Experience</div>
            <div className="flex flex-col gap-8">
            {
                profile?.experiences?.map((exp:any,index:any)=><ExpCard key={index} {...exp}/>)
            }
            </div>
            
        </div>
        <Divider size="xs" my="lg"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Certification</div>
            <div className="flex flex-col gap-8">
            {
                profile?.certifications?.map((cert:any,index:any)=><CertCard key={index} {...cert}/>)
            }
            </div>
        </div>

    </div>
  )
}

export default Profile