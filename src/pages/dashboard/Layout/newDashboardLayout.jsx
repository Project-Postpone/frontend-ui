import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../../../components/navbar"
import Sidebar from '../../../components/sidebar';


const NewDashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar/>

        {/* Main content area */}
        <main className="flex-1 p-8 h-screen flex flex-col overflow-y-auto">
          {children}
        </main>
        <Outlet/>
      </div>
    </div>
  // return (
  //   <div className="flex">
  //     <Navbar/>
  //     <SideBar/>
  //     <div className="flex-1 relative w-full p-8 bg-gray-100">
  //       {children}
  //     </div>
  //     <Outlet/>
  //   </div>
  );
};

export default NewDashboardLayout;
