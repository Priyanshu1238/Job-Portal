// import React from 'react'

import Profile from "../Components/profile/Profile"
import { profile } from "../Data/TalentData"


const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-sans">
        <Profile {...profile} />

    </div>
  )
}

export default ProfilePage