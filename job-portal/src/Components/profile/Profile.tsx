// import React from 'react'

import { faMapMarkerAlt, faPencil, faPlus, faSave } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon,  Divider, TagsInput, Textarea } from "@mantine/core"
import ExpCard from "./ExpCard"
import CertCard from "./CertCard"
import { useEffect, useState } from "react"

import fields from "../../Data/Profile"
import { SelectInput } from "./SelectInput"
import ExpInput from "./ExpInput"
import CertInput from "./CertInput"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../Services/ProfileService"
import Info from "./Info"
import { setProfile } from "../../Slices/ProfileSlice"
import About from "./About"
import Skills from "./Skills"
import Experiences from "./Experiences"
import Certificates from "./Certificates"



const Profile = (props: any) => {

    const dispatch=useDispatch();
    
    const [skills,setSkills]=useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]);

    const [about, setAbout] = useState(`${props.about}`)

    const select = fields;
    const [edit, setEdit] = useState([false, false, false, false, false]);

    const[addExp,setAddExp]=useState(false);
    const[addCert,setAddCert]=useState(false);


    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }
    const user=useSelector((state:any)=>state.user);
    const profile=useSelector((state:any)=>state.profile);
    useEffect(()=>{
        console.log(profile)
        getProfile(user.id).then((data:any)=>{
            dispatch(setProfile(data));
            console.log(data);

        }).catch((err)=>{
            console.log(err);
        });
    },[])
    return (
        <div className="w-4/5 mx-auto mt-2">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="h-48 w-48 rounded-full left-3 border-mine-shaft-900 border-8 -bottom-1/4 absolute" src="/avatar.jpg" alt="" />
            </div>
            <Info />
            <Divider size="xs" my="lg" />
            <About/>
            <Divider size="xs" my="lg" />

            <Skills/>
            <Divider size="xs" my="lg" />

            <Experiences/>
            <Divider size="xs" my="lg" />
            <Certificates/>



        </div>
    )
}

export default Profile