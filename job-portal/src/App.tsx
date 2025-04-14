import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './App.css'
import { createTheme,  MantineProvider } from '@mantine/core'


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@mantine/notifications/styles.css';

import '@mantine/tiptap/styles.css';
import FindJobs from './pages/FindJobs';
import FindTalents from './pages/FindTalents';
import JobDescPage from './pages/JobDescPage';
import ApplyJobPage from './pages/ApplyJobPage';
import CompanyPage from './pages/CompanyPage';
import PostedJobPage from './pages/PostedJobPage';
import PostJobPage from './pages/PostJobPage';
import TalentProfile from './pages/TalentProfile';
import JobHistoryPage from './pages/JobHistoryPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import { Notifications } from '@mantine/notifications';
import Store from './Store';
import { Provider } from 'react-redux';
import { getItem } from './Services/LocalStorageService';
import { AppRoutes } from './pages/AppBrowse';


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
    
    <Provider store={Store}>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
    <Notifications position="top-center" zIndex={1000} />
    <AppRoutes/>
    </MantineProvider>
    </Provider>
  )
}

export default App
