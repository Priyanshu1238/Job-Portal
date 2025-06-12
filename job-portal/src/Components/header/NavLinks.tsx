// import React from 'react'

import { Link, useLocation } from "react-router-dom"

const NavLinks = () => {
  const links=[
    {name:"Find Jobs",url:"find-jobs"},
    {name:"Find Talent",url:"find-talent"},
    {name:"Post Job",url:"post-job"},
    {name:"Posted Job",url:"posted-job/0"},
    {name:"Job History" ,url:"job-history"},
    // {name:"signup",url:"signup"}
  ]
  const location=useLocation()
  return (
    <div className="flex gap-5 h-full items-center bg-mine-shaft-700 rounded-full p-3 border border-bright-sun-400">
    {
      links.map((link,index)=>
      <div className={`${location.pathname=="/"+link.url?"border-bright-sun-400 text-bright-sun-400":
        "border-transparent"
      }
      border-b-[1px] p-2 rounded-lg h-full`}>
      <Link key={index} to={link.url}>{link.name}</Link>
      </div>)
    }
  </div>
  )
}

export default NavLinks