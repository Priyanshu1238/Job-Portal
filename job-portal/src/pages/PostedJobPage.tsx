// import React from 'react'

import PostedJob from "../Components/postedJob/PostedJob"
import PostedJobDesc from "../Components/postedJob/PostedJobDesc"


// import PostJob from "../postjob/PostJob"

const PostedJobPage = () => {
  return (
      <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
          <div className="flex gap-5">
            <PostedJob/>
            <PostedJobDesc/>
          </div>
      </div>
  )
}

export default PostedJobPage