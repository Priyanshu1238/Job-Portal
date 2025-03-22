// import React from 'react'

import {  faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CompanyCard = (props:any) => {
  return (
      <div className="flex justify-between mb-2 bg-mine-shaft-900 items-center rounded-lg p-2" >
          <div className="flex gap-2 items-center">
              <div className="">
                  <img className="h-7" src={`./Icons/${props.name}.png`} />
              </div>
              <div>
                  <div className="font-semibold">{props.name}</div>
                  <div className="text-xs text-mine-shaft-300">{props.employees} Employees</div>
              </div>
          </div>
          <FontAwesomeIcon icon={faExternalLink} className='text-bright-sun-400'/>
      </div>
  )
}

export default CompanyCard