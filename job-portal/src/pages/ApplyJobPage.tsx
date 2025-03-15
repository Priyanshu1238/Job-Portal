import { Link } from "react-router-dom"
// import PostJob from "../postjob/PostJob"
import { Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import ApplyJobForm from "../applyJob/ApplyJobForm"



const ApplyJobPage = () => {
  return (
   
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
         <Link className="my-5 inline-block " to="/jobs">
                    <Button leftSection={<FontAwesomeIcon icon={faArrowLeft}/>} variant="light" color="brightSun.4">Back</Button>
                </Link>
                <ApplyJobForm/>
    </div>
  )
}

export default ApplyJobPage