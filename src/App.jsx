import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashBoardLayout from './pages/dashboard/Layout/dashBoardLayout'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import ScheduledMails from './pages/dashboard/pages/scheduledMails'
import SendEmail from './pages/dashboard/pages/sendEmail'
import LandingPage from './components/landingPage'


function App() {

  const router = createBrowserRouter([

    {
      index:true,
      element:<LandingPage/>
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/signup',
      element:<SignUp/>
    },
    {
      path:"/dashboard",
      element: <DashBoardLayout/>,
      children:[
        {
        index :"true",
        element:<ScheduledMails/>
        },
        {
          index:"/dashboard",
          element:<SendEmail/>
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
