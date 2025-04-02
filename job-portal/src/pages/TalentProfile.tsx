import { Link } from "react-router-dom"
// import { talents } from "../Data/TalentData"
import { Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import { profile } from "../Data/TalentData"
import Profile from "../Components/TalentProfile/Profile"
import REcommendTalent from "../Components/TalentProfile/REcommendTalent"



const TalentProfile = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
        <Link className="my-5 inline-block " to="/find-talent">
            <Button leftSection={<FontAwesomeIcon icon={faArrowLeft}/>} variant="light" color="brightSun.4">Back</Button>
        </Link>
        
        <div className="flex gap-5 ">
            <Profile {...profile}/>
            <REcommendTalent/>
        </div>
        

    </div>
  )
}

export default TalentProfile