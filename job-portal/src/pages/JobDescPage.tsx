import { Link } from "react-router-dom"
// import { talents } from "../Data/TalentData"
import { Button, Divider } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import JobDesc from "../jobDesc/JobDesc"
import RecommendedJobs from "../jobDesc/RecommendedJobs"
// import Profile from "../TalentProfile/Profile"
// import { profile } from "../Data/TalentData"
// import REcommendTalent from "../TalentProfile/REcommendTalent"


const JobDescPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
        <Link className="my-5 inline-block " to="/find-jobs">
            <Button leftSection={<FontAwesomeIcon icon={faArrowLeft}/>} variant="light" color="brightSun.4">Back</Button>
        </Link>
        
        <div className="flex gap-5  justify-around">
            <JobDesc/>
            <Divider orientation="vertical" />
            <RecommendedJobs/>
        </div>
        

    </div>
  )
}

export default JobDescPage