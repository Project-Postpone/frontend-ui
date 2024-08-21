import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import DashBoardLayout from './pages/dashboard/Layout/dashBoardLayout'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import LandingPage from './components/landingPage'
import Contact from './components/contact'
import ForgotPassword from './components/forgotPassword'
import WriteLetter from './pages/writeLetter'
import NewDashboardLayout from './pages/dashboard/Layout/newDashboardLayout'
import Home from './pages/dashboard/pages/home'
import YourLetter from './pages/dashboard/pages/yourletter'
import Settings from './pages/dashboard/pages/settings'
import ManageAccount from './pages/dashboard/pages/manageAccount'
import Notification from './pages/dashboard/pages/notification'
import CreateAccount from './components/createAccount'
import PreLoader from './components/preLoader'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    
    {
      index: true,
      element: <LandingPage />
    },
  
    {
      path: "/writeletter",
      element: <WriteLetter />
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />
    },
    {
      path: "/createaccount",
      element: <CreateAccount />
    },
    {
      path: "/dashboard",
      element: <NewDashboardLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/dashboard/yourletter",
          element: <YourLetter />
        },
        {
          path: "/dashboard/notification",
          element: <Notification />
        },
        {
          path: "/dashboard/settings",
          element: <Settings />
        },
        {
          path: "/dashboard/manageaccount",
          element: <ManageAccount />
        }
      ]
    },
  ])

  return (
    <>
      {loading ? (
        <PreLoader />  // Display the Preloader component while loading
      ) : (
      <RouterProvider router={router} />
    )}
    </>
  );
}

export default App
