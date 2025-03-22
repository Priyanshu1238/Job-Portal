// import React from 'react'

import { talents } from "../Data/TalentData"
import TalentCard from "../findTalent/TalentCard"

const CompanyEmp = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-10 ">
      {
        talents.map((talent, index) => index<6&& <TalentCard key={index} {...talent} />)
      }
    </div>
  )
}

export default CompanyEmp