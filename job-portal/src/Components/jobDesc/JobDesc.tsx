// import React from 'react'

// import {  faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Button, Divider } from "@mantine/core"
import { Link } from "react-router-dom"

import DOMPurify from 'dompurify';
import { faBookBookmark, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { card, desc, skills } from "../../Data/JobDescData";
// import RecommendedJobs from "./RecommendedJobs";
const JobDesc = (props:any) => {
    const data=DOMPurify.sanitize(desc);
  return (
    <div className="w-2/3 p-2">

        <div className="flex justify-between mb-2" >
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-lg">
                    <img  className="h-12" src={`./Icons/Google.png`}/>
                    </div>
                <div>
                    <div className="font-semibold text-2xl">SE</div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago &#x2022; 48 Applicants</div>
                </div>

                

            </div>
            <div className="flex mt-6 gap-3 items-center">
                <Link to="/apply-job">
                <Button color="brightSun.4" variant="light">{props.edit?"Edit":"Apply"}</Button>
                </Link>
                {props.edit?
                <Button color="red.5" variant="outline">Delete</Button>
                :<FontAwesomeIcon icon={faBookmark} className="text-bright-sun-400 h-5"/>}
            </div>

            
        </div>
            <Divider my="xl"/>
            <div className="flex justify-between">
                {
                    card.map((item:any,index:any)=>
                        <div key={index} className="flex flex-col items-center gap-1">
                    <ActionIcon color="brightSun.4" className="!h-10 !w-10" variant="light"  radius="xl" aria-label="Settings">
                           <FontAwesomeIcon icon={item.icon} className="h-3/5 w-4/5" />
                     </ActionIcon>
                   <div className="text-sm text-mine-shaft-300">{item.name}</div>
                   <div className="font-semibold" >{item.value}</div>
                </div>
                    )
                }
               
            </div>
            <Divider my="xl"/>
            <div>
                <div className="text-xl font-semibold mb-5">Required Skills</div>

                <div className="flex flex-wrap gap-2">
                    {
                        skills.map((skill:any,index:any)=>
                            <ActionIcon  key={index} color="brightSun.4" className="!h-fit !w-fit font-medium !text-sm" variant="light" p="xs"  radius="xl" aria-label="Settings">
                        {skill}{/* <FontAwesomeIcon icon={item.icon} className="h-4/5 w-4/5" /> */}
                  </ActionIcon>
                        )
                    }
                    
                </div>
            </div>
            <Divider my="xl"/>
            <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify " dangerouslySetInnerHTML={{__html:data}}>

            </div>
            <Divider my="xl"/>
            <div>
                 <div className="text-xl font-semibold mb-5">About Company</div>
                 <div className="flex justify-between mb-2" >
                    <div className="flex gap-2 items-center">
                 <div className="p-3 bg-mine-shaft-800 rounded-lg">
                    <img  className="h-8" src={`./Icons/Google.png`}/>
                    </div>
                <div>
                    <div className="font-medium text-lg">Google</div>
                    <div className=" text-mine-shaft-300">10k+ employees</div>
                </div>

                

            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/company">
                <Button color="brightSun.4" variant="light">Company Page</Button>
                </Link>
            </div>
               
          </div>
          <div className="text-mine-shaft-300 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, quos natus magnam tenetur praesentium nostrum quis fugit. Fuga expedita voluptatem laudantium quisquam odio amet atque reiciendis iure doloribus unde cupiditate, fugiat nobis iusto laboriosam quasi consequatur eligendi accusantium excepturi earum?</div>


            </div>

    </div>
    
  )
}

export default JobDesc