// import React from 'react'

import { Divider, RangeSlider } from "@mantine/core"

import MultiInput from "./MultiInput"
import { useState } from "react"
import { DropdownData } from "../../Data/JobData";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const SerachBar = () => {
  
  const fixedLeft=0;
  const dispatch=useDispatch()
  const[value,setValue]=useState<[number,number]>([1,100]);
  
  const handleChange=(event:any)=>{

    
      dispatch(updateFilter({salary:event}));
   

  }




  return (
    <div className="flex px-5 py-7" >
      {
        DropdownData.map((item,index)=><><div key={index}  className="w-1/5">
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
      <RangeSlider minRange={1} onChangeEnd={handleChange} color="brightSun.4" size="xs" value={value} max={50} min={0} 
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