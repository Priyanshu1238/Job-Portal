// import React from 'react'

import { formatDate } from "../../Services/Utilities"



const CertCard = (props:any) => {
  return (
    
        <div className="flex justify-between mb-2" >
                    <div className="flex gap-2 items-center">
                        <div className="">
                        <img  className="h-7" src={`../Icons/${props.issuer}.png`}/>
                            
                            </div>
                        <div className="flex flex-col ">
                            <div className="font-semibold">{props.name}</div>
                            {/* <div className="text-sm text-mine-shaft-300">Google &#x2022; Japan</div> */}
                        </div>
                        <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                    </div>
                    {/* <FontAwesomeIcon icon={faBookmark} className="cursor-pointer"/> */}
                    <div className="flex flex-col items-end">
                        <div  className="text-sm text-mine-shaft-300">Issued {formatDate(props.issueDate)}</div>
                        <div className="text-sm text-mine-shaft-300">ID: {props.certificateId}</div>
                    </div>
                </div>
            
  )
}

export default CertCard