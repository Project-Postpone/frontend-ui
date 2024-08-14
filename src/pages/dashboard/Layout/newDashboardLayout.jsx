import React from 'react'
import SideBar from '../../../components/sidebar'
import { Outlet } from 'react-router-dom';

const NewDashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar/>
      <div className="flex-1 relative w-full p-8 bg-gray-100">
        {children}
      </div>
      <Outlet/>
    </div>
  );
};

export default NewDashboardLayout;
