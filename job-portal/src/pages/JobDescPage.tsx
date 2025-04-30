import { Link, useParams } from "react-router-dom"
// import { talents } from "../Data/TalentData"
import { Button, Divider } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import JobDesc from "../Components/jobDesc/JobDesc"
import RecommendedJobs from "../Components/jobDesc/RecommendedJobs"
import { useEffect, useState } from "react"
import { getJob } from "../Services/JobServices"

// import Profile from "../TalentProfile/Profile"
// import { profile } from "../Data/TalentData"
// import REcommendTalent from "../TalentProfile/REcommendTalent"


const JobDescPage = () => {
  const {id}=useParams();
  const[job,setJob]=useState<any>();
  useEffect(()=>{

    window.scrollTo(0,0);
    getJob(id).then((res)=>{
      setJob(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[id])
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
        <Link className="my-5 inline-block " to="/find-jobs">
            <Button leftSection={<FontAwesomeIcon icon={faArrowLeft}/>} variant="light" color="brightSun.4">Back</Button>
        </Link>
        
        <div className="flex gap-5  justify-around">
            <JobDesc {...job}/>
            <Divider orientation="vertical" />
            <RecommendedJobs/>
        </div>
        

    </div>
  )
}

export default JobDescPage