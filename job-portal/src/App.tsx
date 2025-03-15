import '@mantine/core/styles.css';
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

function App() {
  const theme=createTheme(
   

  {
    primaryColor:'brightSun',
    primaryShade:4,
    colors:{
      'brightSun':[
        '#fffbeb',
     '#fff3c6',
     '#ffe588',
     '#ffd149',
     '#ffbd20',
     '#f99b07',
     '#dd7302',
     '#b75006',
     '#943c0c',
     '#7a330d',
     '#461902',
      ],
      'mineShaft':[
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
    <Header/>
    <Routes>
      <Route path='/find-jobs' element={<FindJobs/>}/>
      <Route path='/find-talent' element={<FindTalents/>}/>
      <Route path='/jobs' element={<JobDescPage/>}/>
      <Route path='/apply-job' element={<ApplyJobPage/>}/>


      <Route path='/post-job' element={<PostJobPage/>}/>
      <Route path='/talent-profile' element={<TalentProfile/>}/>

    <Route path='*' element={<HomePage/>}/>

    </Routes>
    
    <Footer/>
    </div>    
      {/* <HomePage/> */}
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
