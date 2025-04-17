import React from 'react'
import { faCheck, faMapMarkerAlt, faPencil, faPlus, faSave, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core"
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

const About = () => {
    // const [skills,setSkills]=useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]);

    // const [about, setAbout] = useState(`${props.about}`)

    // const select = fields;
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile);
    // const user = useSelector((state: any) => state.user);
    const [about,setAbout]=useState("");


    const dispatch = useDispatch();

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
            setAbout(profile.about);
            // form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location })
        }
        else {
            setEdit(false);

        }
    }
    // const form = useForm({
    //     mode: 'controlled',
    //     initialValues: { jobTitle: '', company: '', location: '' },

    // });
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, about:about};
        dispatch(changeProfile(updatedProfile))
        // console.log(updatedProfile);
        successNotification("Success", "About updated successfully");
    }
    return (
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">About

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
            {
                edit ? <Textarea autosize minRows={3} placeholder="Enter About Yourself"
                    value={about}
                    onChange={(event) => setAbout(event.target.value)}
                /> : <div className="text-sm text-mine-shaft-300 text-justify">{profile?.about} </div>
            }


        </div>
    )
}

export default About