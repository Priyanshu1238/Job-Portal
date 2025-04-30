// import React from 'react'

import { faEdit, faMapMarkerAlt, faPencil, faPlus, faSave } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Divider, FileInput, Overlay, TagsInput, Textarea } from "@mantine/core"
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
import { changeProfile, setProfile } from "../../Slices/ProfileSlice"
import About from "./About"
import Skills from "./Skills"
import Experiences from "./Experiences"
import Certificates from "./Certificates"
import { useHover } from "@mantine/hooks"
import { successNotification } from "../../Services/NotificationSErvice"
import { getBase64 } from "../../Services/Utilities"



const Profile = (props: any) => {

    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.user);
    const profile = useSelector((state: any) => state.profile);
    // useEffect(() => {
    //     console.log(profile)
    //     getProfile(user.id).then((data: any) => {
    //         dispatch(setProfile(data));
    //         console.log(data);

    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }, [])
    const { hovered, ref } = useHover();
    const handleChange = async (image: any) => {

        let picture: any = await getBase64(image);
        console.log(picture)
        let updatedProfile = { ...profile, picture: picture.split(',')[1] };
        // console.log(picture)
        dispatch(changeProfile(updatedProfile))
        // console.log(updatedProfile);
        successNotification("Success", "Profile Picture updated successfully");
    }
    
    return (
        <div className="w-4/5 mx-auto mt-2">
            <div>
                <div className="relative">
                    <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                    <div ref={ref} className="absolute -bottom-1/3 left-3 flex items-center justify-center">
                        <img className="h-48 w-48 rounded-full left-3 border-mine-shaft-900 border-8" src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.jpg"} alt="" />
                        {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
                        {hovered && <FontAwesomeIcon className="absolute z-[300] !w-14 !h-14" icon={faEdit} />}
                        {hovered && <FileInput onChange={handleChange}  className="absolute w-full z-[301]"  variant="transparent" accept="image/png,image/jpeg" />}

                    </div>
                </div>
                <Info />
                <Divider size="xs" my="lg" />
                <About />
                <Divider size="xs" my="lg" />

                <Skills />
                <Divider size="xs" my="lg" />

                <Experiences />
                <Divider size="xs" my="lg" />
                <Certificates />

            </div>

        </div>
    )
}

export default Profile