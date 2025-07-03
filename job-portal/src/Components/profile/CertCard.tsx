// import React from 'react'

import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon } from "@mantine/core"
import { formatDate } from "../../Services/Utilities"
import { useDispatch, useSelector } from "react-redux"

import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../Services/NotificationSErvice"



const CertCard = (props: any) => {
    const dispatch=useDispatch();
    // const[edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const handleDelete=()=>{

        let cert=[...profile.certifications];
        cert.splice(props.index,1);
        let updatedProfile={...profile,certifications:cert};
        
        dispatch(changeProfile(updatedProfile));
        successNotification("Success","Certificate deleted successfully");

    }
    return (

        <div className="flex justify-between mb-2" >
            <div className="flex gap-2 items-center">
                <div className="">
                    <img className="h-7" src={`./Icons/${props.issuer}.png`} />

                </div>
                <div className="flex flex-col ">
                    <div className="font-semibold">{props.name}</div>
                    {/* <div className="text-sm text-mine-shaft-300">Google &#x2022; Japan</div> */}
                </div>
                <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
            </div>
            {/* <FontAwesomeIcon icon={faBookmark} className="cursor-pointer"/> */}
            <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                    <div className="text-sm text-mine-shaft-300">{formatDate(props.issueDate)}</div>
                    <div className="text-sm text-mine-shaft-300">ID: {props.certificateId}</div>
                </div>
                {props.edit && <ActionIcon onClick={handleDelete} color="red.5" variant="subtle" aria-label="Settings">
                    <FontAwesomeIcon icon={faTrash} className="h-3/5 w-3/5" />
                </ActionIcon>}
            </div>

        </div>

    )
}

export default CertCard