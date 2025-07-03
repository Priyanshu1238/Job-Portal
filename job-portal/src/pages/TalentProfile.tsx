import { useNavigate } from "react-router-dom"
// import { talents } from "../Data/TalentData"
import { Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import { profile } from "../Data/TalentData"
import Profile from "../Components/TalentProfile/Profile"
import REcommendTalent from "../Components/TalentProfile/REcommendTalent"
import { useEffect, useState } from "react"
import { getAllProfiles } from "../Services/ProfileService"



const TalentProfile = () => {
  const navigate=useNavigate();
  const [talents,setTalents]=useState<any[]>([])
  useEffect(()=>{

    getAllProfiles().then((res)=>{
      setTalents(res);
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
        
            <Button className="mb-4" leftSection={<FontAwesomeIcon icon={faArrowLeft}/>} variant="light" color="brightSun.4" onClick={()=>navigate(-1)}>Back</Button>
      
        
        <div className="flex gap-5 ">
            <Profile {...profile}/>
            <REcommendTalent talents={talents}/>
        </div>
        

    </div>
  )
}

export default TalentProfile