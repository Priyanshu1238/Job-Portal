// import React from 'react'

import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon } from "@mantine/core"



const CertCard = (props:any) => {
  return (
    
        <div className="flex justify-between mb-2" >
                    <div className="flex gap-2 items-center">
                        <div className="">
                        <img  className="h-7" src={`./Icons/${props.issuer}.png`}/>
                            
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
                        <div  className="text-sm text-mine-shaft-300">{props.issueDate}</div>
                        <div className="text-sm text-mine-shaft-300">ID: {props.certificateId}</div>
                    </div>
                    {props.edit&&<ActionIcon color="red.5" variant="subtle" aria-label="Settings">
                                             <FontAwesomeIcon icon={faTrash} className="h-3/5 w-3/5" />
                                        </ActionIcon>}
                    </div>
                   
                </div>
            
  )
}

export default CertCard