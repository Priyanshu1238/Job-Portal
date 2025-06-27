// import React from 'react'

import { faBriefcase, faCheck, faMapMarkerAlt, faPencil, faPlus, faSave, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Divider, NumberInput, TagsInput, Textarea } from "@mantine/core"
import ExpCard from "./ExpCard"
import CertCard from "./CertCard"
import { useEffect, useState } from "react"

import fields from "../../Data/Profile"
import { SelectInput } from "./SelectInput"
import ExpInput from "./ExpInput"
import CertInput from "./CertInput"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../Services/ProfileService"
import { hasLength, isEmail, useForm } from '@mantine/form'
import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../Services/NotificationSErvice"


const Info = (props: any) => {

    // const [skills,setSkills]=useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]);

    // const [about, setAbout] = useState(`${props.about}`)

    const select = fields;
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile);
    const user=useSelector((state:any)=>state.user);

    const dispatch=useDispatch();

    // const[addExp,setAddExp]=useState(false);
    // const[addCert,setAddCert]=useState(false);


    // const handleEdit = (index: any) => {
    //     const newEdit = [...edit];
    //     newEdit[index] = !newEdit[index];
    //     setEdit(newEdit);
    // }
    // const user=useSelector((state:any)=>state.user);
    // const profile=useSelector((state:any)=>state.profile);
    // useEffect(()=>{
    //     console.log(profile)
    //     getProfile(user.id).then((data:any)=>{
    //         console.log(data);

    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // },[])
    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            form.setValues({jobTitle:profile.jobTitle,company:profile.company,location:profile.location,totalExp:profile.totalExp})
        }
        else {
            setEdit(false);
            
        }
    }
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '', location: '',totalExp: 0},

    });
    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile,...form.getValues()};
        dispatch(changeProfile(updatedProfile))
        // console.log(updatedProfile);
        successNotification("Success","Profile updated successfully");
    }
    return (
         user!=null &&
        <div className="px-3 mt-16 ">
            <div className="text-3xl font-semibold flex justify-between">{user.name}
                <div>{edit&&
                <ActionIcon onClick={() => handleSave()} color="green.8" variant="subtle" aria-label="Settings">
                 <FontAwesomeIcon icon={faCheck} className="h-3/5 w-3/5" /> 
            </ActionIcon>
                    }
                <ActionIcon onClick={() => handleClick()} color={edit?"red.8":"brightSun.4"} variant="subtle" aria-label="Settings">
                    {edit ? <FontAwesomeIcon  icon={faX} className="h-3/5 w-3/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                </ActionIcon>
                </div>
            </div>
             <div className="text-1xl  flex justify-between">{user.accountType==="APPLICANT"?"JOB SEEKER":user.accountType}
               
            </div>

            {
                edit ? <><div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="jobTitle" {...select[0]} />
                    <SelectInput form={form} name="company" {...select[1]} />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="location" {...select[2]} />
                    <NumberInput withAsterisk hideControls min={0} max={60} clampBehavior="strict" label="Total Experience" {...form.getInputProps('totalExp')} />

                </div>
                    </> : <>
                    <div className="text-xl flex ">{profile.company} &bull; {profile.jobTitle}</div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />  {profile.location}
                        
                    </div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                        <FontAwesomeIcon icon={faBriefcase} />Experience:  {profile.totalExp} years
                        
                    </div>
                    
                    
                    
                    </>
            }


        </div>
    )
}

export default Info