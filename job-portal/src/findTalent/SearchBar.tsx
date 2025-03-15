// import React from 'react'

import { Divider, Input, RangeSlider } from "@mantine/core"
// import { DropdownData } from "../Data/JobData"

import { useState } from "react"
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const SerachBar = () => {
  const[value,setValue]=useState<[number,number]>([1,100]);
  return (
    <div className="flex px-5 py-8 items-center !text-mine-shaft-100 " >
      <div className="flex items-center">
        <div className="text-bright-sun-400 mr-5"><FontAwesomeIcon className="h-15" icon={faUserCircle}/></div>
        <Input className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name"/>
      </div>
      {
        searchFields.map((item,index)=><><div key={index}  className="w-1/5">
          <MultiInput {...item}/>
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
          </>)
      }
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
      <div className="flex justify-between text-sm">
        <div>Salary</div>
        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA </div>
      </div>
      <RangeSlider color="brightSun.4" size="xs" value={value} 
      labelTransitionProps={{
        transition: 'skew-down',
        duration: 150,
        timingFunction: 'linear',
      }}
      onChange={setValue} />
      </div>
      
    </div>
  )
}

export default SerachBar