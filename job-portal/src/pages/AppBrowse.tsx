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
import ProtectedRoute from "../Services/ProtectedRoute"
import PublicRoute from "../Services/PublicRoute"

export const AppRoutes=()=>{
    const user=useSelector((state:any)=>state.user);
   return <BrowserRouter>
        <div className='relative'>
          <Header />
          <Routes>
            <Route path='/find-jobs' element={<FindJobs  />} />
            <Route path='/find-talent' element={<FindTalents />} />
            <Route path='/jobs/:id' element={<ProtectedRoute allowedRoles={['APPLICANT']}><JobDescPage /></ProtectedRoute>} />
            <Route path='/jobs/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><JobDescPage /></ProtectedRoute>} />

            <Route path='/apply-job/:id' element={<ProtectedRoute allowedRoles={['APPLICANT']}><ApplyJobPage /></ProtectedRoute>} />

            <Route path='/company/:id' element={<CompanyPage />} />
            <Route path='/posted-job/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage /></ProtectedRoute>} />

            {/* change start */}
            <Route path='/post-job' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage /></ProtectedRoute>} />
            {/* chnage end */}
            <Route path='/post-job/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage /></ProtectedRoute>} />
            <Route path='/talent-profile/:id' element={<TalentProfile />} />

            <Route path='/job-history' element={<ProtectedRoute allowedRoles={['APPLICANT']}><JobHistoryPage /></ProtectedRoute>} />
            <Route path='/signup' element={<PublicRoute><SignupPage /></PublicRoute>} />
            <Route path='/login' element={<SignupPage />} />
            <Route path='/profile' element={<ProfilePage />} />

            <Route path='*' element={<HomePage />} />

          </Routes>
          
          <Footer />
        </div>
        {/* <HomePage/> */}
      </BrowserRouter>
}
