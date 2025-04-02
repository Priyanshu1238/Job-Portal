// import React from 'react'

import { Divider } from "@mantine/core"
import SerachBar from "../Components/findTalent/SearchBar"
import Talents from "../Components/findTalent/Talents"


// import SerachBar from "../FindJobs/SerachBar"

const FindTalents = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans">
        <SerachBar/>
        <Divider size="xs" mx="md"/>
        <Talents/>

    </div>
  )
}

export default FindTalents