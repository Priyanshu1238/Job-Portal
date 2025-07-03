// import React from 'react'

import { Divider, Input, RangeSlider } from "@mantine/core"
// import { DropdownData } from "../Data/JobData"

import React, { useState } from "react"
import MultiInput from "../FindJobs/MultiInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { searchFields } from "../../Data/TalentData";

import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const SerachBar = () => {
  const fixedLeft=0;
  const dispatch=useDispatch()
  const[value,setValue]=useState<[number,number]>([0,50]);
  const[name,setName]=useState('');
  const handleChange=(name:any,event:any)=>{

    if(name=="exp")
      dispatch(updateFilter({exp:event}));
    else{
      dispatch(updateFilter({name:event.target.value}));
      setName(event.target.value)
    }

  }
  return (
    <div className="flex px-5 py-8 items-center !text-mine-shaft-100 " >
      <div className="flex items-center">
        <div className="text-bright-sun-400 mr-5"><FontAwesomeIcon className="h-15" icon={faUserCircle}/></div>
        <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name"/>
      </div>
      {
        searchFields.map((item,index)=>
        {return <React.Fragment key={index}><div   className="w-1/5">
          <MultiInput {...item}/>
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
          </React.Fragment>})
      }
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
      <div className="flex justify-between text-sm">
        <div>Experiences (year)</div>
        <div>{value[0]} - {value[1]}  </div>
      </div>
      <RangeSlider minRange={1}  onChangeEnd={(e)=>handleChange("exp",e)} color="brightSun.4" size="xs" value={value} max={50} min={0} 
      labelTransitionProps={{
        transition: 'skew-down',
        duration: 150,
        timingFunction: 'linear',
        
      }}
       onChange={(newValue) => {
    // always fix the left thumb at `fixedLeft`
    setValue([fixedLeft, newValue[1]]);
  }}/>
      </div>
      
    </div>
  )
}

export default SerachBar