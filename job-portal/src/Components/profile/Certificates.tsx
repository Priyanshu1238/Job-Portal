// import React from 'react'

import { faPencil, faPlus, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon } from "@mantine/core"
import { useState } from "react";
import { useSelector } from "react-redux";
import CertCard from "./CertCard";
import CertInput from "./CertInput";

const Certificates = () => {
        const[addCert,setAddCert]=useState(false);
        const [edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);

        const handleEdit = () => {
            setEdit(!edit);
            // const newEdit = [...edit];
            // newEdit[index] = !newEdit[index];
            // setEdit(newEdit);
        }
    
  return (
    <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">Certification
                <div className="flex gap-2">
                <ActionIcon onClick={() => setAddCert(true)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        <FontAwesomeIcon icon={faPlus} className="h-4/5 w-4/5" />
                    </ActionIcon>
                <ActionIcon onClick={() => handleEdit()} color={edit?"red.8":"brightSun.4"}  variant="subtle" aria-label="Settings">
                        {edit ? <FontAwesomeIcon icon={faX} className="h-4/5 w-4/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                    </ActionIcon></div>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        profile?.certifications?.map((cert: any, index: any) => <CertCard key={index} edit={edit} index={index} {...cert} />)
                    }
                    {
                        addCert&&<CertInput setEdit={setAddCert}/>
                    }
                </div>
            </div>
  )
}

export default Certificates