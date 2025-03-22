import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './App.css'
import { createTheme,  MantineProvider } from '@mantine/core'

import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './pages/FindJobs';
import Header from './header/Header';
import Footer from './footer/Footer';
import FindTalents from './pages/FindTalents';
import TalentProfile from './pages/TalentProfile';
import PostJobPage from './pages/PostJobPage';
import '@mantine/tiptap/styles.css';
import JobDescPage from './pages/JobDescPage';
import ApplyJobPage from './pages/ApplyJobPage';
import CompanyPage from './pages/CompanyPage';
import PostedJobPage from './pages/PostedJobPage';
import JobHistoryPage from './pages/JobHistoryPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const theme = createTheme(


    {
      primaryColor: 'brightSun',
      primaryShade: 4,
      colors: {
        'brightSun': [

          '#edf8ff',
          '#d6efff',
          '#b5e4ff',
          '#83d5ff',
          '#48bcff',
          '#1e9aff',
          '#067aff',
          '#0066ff',
          '#084ec5',
          '#0d469b',
          '#0e2b5d',


        ],
        'mineShaft': [
          '#f6f6f6',
          '#e7e7e7',
          '#d1d1d1',
          '#b0b0b0',
          '#888888',
          '#6d6d6d',
          '#5d5d5d',
          '#4f4f4f',
          '#454545',
          '#3d3d3d',
          '#2d2d2d',
        ]
      }
    })

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
        <div className='relative'>
          <Header />
          <Routes>
            <Route path='/find-jobs' element={<FindJobs />} />
            <Route path='/find-talent' element={<FindTalents />} />
            <Route path='/jobs' element={<JobDescPage />} />
            <Route path='/apply-job' element={<ApplyJobPage />} />

            <Route path='/company' element={<CompanyPage />} />
            <Route path='/posted-job' element={<PostedJobPage />} />


            <Route path='/post-job' element={<PostJobPage />} />
            <Route path='/talent-profile' element={<TalentProfile />} />

            <Route path='/job-history' element={<JobHistoryPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<SignupPage />} />
            <Route path='/profile' element={<ProfilePage />} />




            <Route path='*' element={<HomePage />} />

          </Routes>
          
          <Footer />
        </div>
        {/* <HomePage/> */}
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
