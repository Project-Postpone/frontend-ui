import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import DashBoardLayout from './pages/dashboard/Layout/dashBoardLayout'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import ScheduledMails from './pages/dashboard/pages/yourletter'
import SendEmail from './pages/dashboard/pages/notification'
import LandingPage from './components/landingPage'
import Contact from './components/contact'
import ForgotPassword from './components/forgotPassword'
import WriteLetter from './pages/writeLetter'
import NewDashboardLayout from './pages/dashboard/Layout/newDashboardLayout'
import Home from './pages/dashboard/pages/home'
import YourLetter from './pages/dashboard/pages/yourletter'
import Notification from './pages/dashboard/pages/notification'
import SettingsPage from './pages/dashboard/pages/settings'
import Settings from './pages/dashboard/pages/settings'
import ManageAccountPage from './pages/dashboard/pages/manageAccount'
import ManageAccount from './pages/dashboard/pages/manageAccount'


function App() {

  const router = createBrowserRouter([

    {
      index:true,
      element:<LandingPage/>
    },
    {
      path:"/writeletter",
      element:<WriteLetter/>
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
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/forgotpassword",
      element:<ForgotPassword/>
    },
    {
      path:"/dashboard",
      element: <NewDashboardLayout/>,
      children:[
        {
        index : true,
        element:<Home/>
        },
        {
          path :"/dashboard/yourletter",
          element:<YourLetter/>
        },
        {
          path :"/dashboard/notification",
          element:<Notification/>
        },
        {
          path :"/dashboard/settings",
          element:<Settings/>
        },
        {
          path :"/dashboard/manageaccount",
          element:<ManageAccount/>
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
