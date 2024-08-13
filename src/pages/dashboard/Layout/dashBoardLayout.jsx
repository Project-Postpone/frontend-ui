// import * as React from 'react';
// import { useState } from 'react';
// import { Link, NavLink, Outlet } from 'react-router-dom';
// import Sidebar from '../../../components/sidebar';
// // import { ScheduledEmails, SendEmailForm } from './components'; // Assume these are your components
// import ScheduledMails from '../pages/scheduledMails';
// import SendEmail from '../pages/sendEmail';
// import K from '../../../constants';



// // import { mainListItems, secondaryListItems } from './listItems'; // Assume these are your list items
// // import { Link } from 'react-router-dom'; // or any other routing library if needed

// function Copyright() {
//   return (
//     <div className="text-center text-sm text-gray-500">
//       © <Link to=""></Link> {new Date().getFullYear()}.
//     </div>
//   );
// }

// const drawerWidth = 240;

// export default function Dashboard() {
//   const [open, setOpen] = useState(true);
//   const toggleDrawer = () => setOpen(!open);

//   return (
//     <div className="flex">
//       <div className={`fixed z-30 flex h-10 w-full items-center bg-blue-400 p-4 transition-all duration-300 ${open ? 'ml-60' : ''}`}>

//         <button onClick={toggleDrawer} className={`mr-4 text-white ${open ? 'hidden' : ''}`}>
//           <svg xmlns="" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>

//         <h1 className="flex-grow text-white">Dashboard</h1>
//         <button className="text-white">
//           <svg xmlns="" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4H9v-1l3-3 3 3v1h-2v4z" />
//           </svg>
//         </button>
//       </div>
// {/* for the sidebar to show */}
//       <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${open ? 'w-60' : 'w-20'}`}>
//         <div className="flex items-center justify-between p-4 mt-4">
//           <Sidebar />
//           <button onClick={toggleDrawer}>
//             <svg xmlns="" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>
        
//         <div className="px-4 w-full">
//           {/* {mainListItems} */}
//           {
//             K.NAVLINKS.map(({icon, text, link}, index)=>(
//               <NavLink
//               to={link}
//               key={index}
//               className=""
//               >
//                 <span className="text-white p-2 rounded-full">
//                                 {icon}
//                             </span>
//                             <span>{text}</span>
//               </NavLink>
//             )

//             )
//           }

//           <hr className="my-4" />
//           {/* {secondaryListItems} */}
//         </div>
//       </div>

//       <main className={`ml-auto flex-grow transition-all duration-300 ${open ? 'pl-60' : 'pl-20'}`}>
//         <div className="flex flex-col p-10">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <div className="col-span-2">
//               <div className="flex h-60 flex-col p-4 shadow">
//                 <ScheduledMails />
//               </div>
//             </div>
//             <div className="col-span-1">
//               <div className="flex h-60 flex-col p-4 shadow">
//                 <SendEmail />
//               </div>
//             </div>
//           </div>
         
//           <Copyright />
//         </div>
//       </main>
//     </div>
//   );
// }

// import { useEffect, useState } from 'react'
// import { Link, Navigate, Outlet } from 'react-router-dom'
// import { getDetails, getToken } from '../../../services/config.js'
// import { SquareMenu } from 'lucide-react'
// import SideBar from '../../../components/sidebar'

// import React from "react";
// import SideBar from "../../../components/sidebar";
// import SideBar from "../../../components/sidebar";

// const DashBoardLayout = () => {
  // const [user,setUser] = useState();

  // const { token , firstName, lastName, userName } = getDetails();

  // useEffect(() => {
  //   if (token) {
  //     setUser({
  //       firstName,
  //       lastName,
  //       userName,
  //     });
  //   }
  // }, []);

  // const getUserProfile = async () => {
  //   try {
  //     const response =await apiGetProfile();
  //     const userProfileData = response?.data.profile;
  //     setProfile(userProfileData);
  //   } catch (error) {
  //     toast.error("An error occured");
  //   }
  // };

  // useEffect(() => {
  //   if (token) {
  //     getUserProfile();
  //   }
  // },[]);

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  // const getAvatar = () => {
  //   if (!user) return "N/A";
  //   const initials = `${firstName[0]}${lastName[0]}`;
  //   return initials.toUpperCase();
  // };

  // return (
  //   <div className='flex'>
  //     <SideBar/>
  //     <div className='w-full'>
   
  //       <div className='flex px-16 py-5 shadow items-center'>
        {/* <span className="p-3">
            <SquareMenu className="size-8" />
          </span> */}
          {/* <Link
          to= "/dashboard/profile"
          className="ml-auto bg-blue-300 p-4">
            <span  className="text-xl font-semibold text-white">
            {getAvatar()}
            </span>
          </Link> */}

        // </div>
        {/* <Outlet /> */}
      {/* </div>

    </div>
  );
};

export default DashBoardLayout */}