import { AreaChart, BellRingIcon, HouseIcon, LogOutIcon, Settings } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiLogout } from '../services/auth';

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occured");
    }
  };
  return (
    <div className=" h-full w-[300px] bg-blue-300 shadow flex flex-col py-10 gap-y-3">
      <div className="text-center text-2xl font-semibold mb-8 text-white">Welcome!</div>

      <ul className="space-y-6">
        <li>
          <Link to="/dashboard" className="flex gap-x-4 items-center mt-auto hover:bg-blue-700 hover:rounded-md p-2 text-white"><HouseIcon />Home

          </Link>
        </li>
        <li>
          <Link to="/dashboard/settings" className="flex gap-x-4 items-center mt-auto hover:bg-blue-700 hover:rounded-md p-2 text-white"><Settings />Settings

          </Link>
        </li>
        <li>
          <Link to="/dashboard/notifications" className="flex gap-x-4 items-center mt-auto hover:bg-blue-700 hover:rounded-md p-2 text-white"><BellRingIcon />Notification

          </Link>
        </li>
        <li>
          <Link to="/dashboard/manageaccount" className="flex gap-x-4 items-center mt-auto hover:bg-blue-700 hover:rounded-md p-2 text-white"><AreaChart />Manage Account

          </Link>
        </li>
        <button className="flex gap-x-4 items-center mt-auto hover:bg-blue-700 hover:rounded-md p-2 text-white" onClick={logout}
        >
          <span className="text-white p-2 rounded-full">
            <LogOutIcon />
          </span>
          <span>Logout</span>
        </button>
        {/* <li>
          <Link to="/" className="flex flex-col py-2 px-4 rounded hover:bg-blue-700"><LogOutIcon/>LogOut
          
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
