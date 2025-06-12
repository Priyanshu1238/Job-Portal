import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Components/header/Header"
import FindJobs from "./FindJobs"
import FindTalents from "./FindTalents"
import JobDescPage from "./JobDescPage"
import ApplyJobPage from "./ApplyJobPage"
import CompanyPage from "./CompanyPage"
import PostedJobPage from "./PostedJobPage"
import PostJobPage from "./PostJobPage"
import TalentProfile from "./TalentProfile"
import JobHistoryPage from "./JobHistoryPage"
import SignupPage from "./SignupPage"
import ProfilePage from "./ProfilePage"
import HomePage from "./HomePage"
import Footer from "../Components/footer/Footer"
import { useSelector } from "react-redux"

export const AppRoutes=()=>{
    const user=useSelector((state:any)=>state.user);
   return <BrowserRouter>
        <div className='relative'>
          <Header />
          <Routes>
            <Route path='/find-jobs' element={<FindJobs  />} />
            <Route path='/find-talent' element={<FindTalents />} />
            <Route path='/jobs/:id' element={<JobDescPage />} />
            <Route path='/apply-job/:id' element={<ApplyJobPage />} />

            <Route path='/company/:id' element={<CompanyPage />} />
            <Route path='/posted-job/:id' element={<PostedJobPage />} />


            <Route path='/post-job' element={<PostJobPage />} />
            <Route path='/talent-profile' element={<TalentProfile />} />

            <Route path='/job-history' element={<JobHistoryPage />} />
            <Route path='/signup' element={user?<Navigate to="/"/>:<SignupPage />} />
            <Route path='/login' element={user?<Navigate to="/"/>:<SignupPage />} />
            <Route path='/profile' element={<ProfilePage />} />

            <Route path='*' element={<HomePage />} />

          </Routes>
          
          <Footer />
        </div>
        {/* <HomePage/> */}
      </BrowserRouter>
}
