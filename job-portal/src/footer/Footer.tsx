// import React from 'react'

import { faFileLines } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";
import { Divider } from "@mantine/core";

const Footer = () => {
  const location=useLocation();
  return (
    location.pathname!="/signup" &&
    location.pathname!="/login"?
    
    <div className="p-20  flex gap-5 justify-around bg-mine-shaft-950 font-sans">
       
         <div className="w-1/4 flex flex-col gap-4">
         
                <div className="text-2xl font-semibold flex gap-2 items-center text-bright-sun-400">
                  <FontAwesomeIcon icon={faFileLines
                  } /> {/* Replacing Tabler Icon */}
                  <div className="text-xl font-semibold">Job~Matcher</div>
                </div>
                <div className="text-sm text-mine-shaft-300">Job portal user profile, skill updates, certifications, work experience and admin job postings.</div>
                <div className="flex gap-3 text-xl text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-1 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
                  <div><FontAwesomeIcon icon={faFacebook}  /></div>
                  <div><FontAwesomeIcon icon={faInstagram} /></div>
                  <div><FontAwesomeIcon icon={faXTwitter }  /></div>
                </div>
              </div>
              {
                footerLinks.map((item,index)=> <div key={index}>
                  
                  <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
                  {
                      item.links.map((link,index)=>
                      <div key={index} className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1">{link}</div>
                      )
                  }

                  </div>
                )
              }
    </div>:<></>
  )
}

export default Footer