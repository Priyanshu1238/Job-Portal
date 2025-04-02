// import Re/act from 'react'

import { Divider } from "@mantine/core"
import JobHistory from "../Components/jobHistory/JobHistory"


const JobHistoryPage = () => {
    return (

        <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
            <Divider size="xs"/>
            <div className="my-5">
                <JobHistory/>
            </div>
        </div>

    )
}

export default JobHistoryPage