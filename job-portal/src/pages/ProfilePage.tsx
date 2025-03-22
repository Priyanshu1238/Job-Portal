// import React from 'react'

import { profile } from "../Data/TalentData"
import Profile from "../profile/Profile"

const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-sans">
        <Profile {...profile} />

    </div>
  )
}

export default ProfilePage