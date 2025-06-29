// import React from 'react'

import { faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, TextInput } from "@mantine/core"
import { useNavigate } from "react-router-dom"

const DreamJob = () => {
  const navigate=useNavigate()
  const handle=()=>{

    navigate("/find-jobs");
  }
  return (
    <div className="flex items-center px-20">
      <div className=" flex-col w-[45%]">

        <div className="text-6xl font-bold text-bright-sun-200 leading-tight">Find Your <span className="text-bright-sun-400">Dream Job</span> With Us</div>
        <div className="text-bright-sun-100 font-semibold">Good life begins with a good company. Start explore thousands of jobs in one place</div>
        {/* <div className="flex gap-3 mt-5">
        <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Title" placeholder="Software Engineer"/>
        <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Fulltime"/>
        <div className="flex items-center justify-center bg-bright-sun-500 text-mine-shaft-100 rounded-lg hover:bg-bright-sun-700 cursor-pointer">
         <button><FontAwesomeIcon icon={faMagnifyingGlass} className="h-10 p-3" /></button> 
        </div>
        </div> */}
        <div className="text-3xl font-bold mt-3 text-bright-sun-200 leading-tight flex gap-2 ">
          <span>Let's go</span>
            <button onClick={handle}>
            <FontAwesomeIcon className="mt-2" icon={faArrowAltCircleRight} /></button> 
        </div>

      </div>
      
      <div>
        <div className=" pl-[100px] pr-10 w-[40rem] mt-5 justify-center relative">
          <img src="/image.png" className="border-4 border-bright-sun-400 rounded-full "/>
          <div className="absolute w-fit top-[50%] right-1  border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
          <div className="text-center text-mine-shaft-100 text-sm">10k+ Jobs</div>
          <Avatar.Group>
      <Avatar src="avatar-7.png" />
      <Avatar src="avatar-8.png" />
      <Avatar src="avatar-9.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamJob