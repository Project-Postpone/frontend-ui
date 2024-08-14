import { AreaChart, BellRingIcon, HouseIcon, Settings } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-300 text-white w-64 px-4 py-8">
      <div className="text-center text-2xl font-semibold mb-8">Welcome!</div>
      <ul className="space-y-6">
        <li>
          <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-blue-700"><HouseIcon>Home</HouseIcon>
            
          </Link>
        </li>
        <li>
          <Link to="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-blue-700"><Settings>Settings</Settings>
            
          </Link>
        </li>
        <li>
          <Link to="/dashboard/notifications" className="block py-2 px-4 rounded hover:bg-blue-700"><BellRingIcon>Notification</BellRingIcon>
            
          </Link>
        </li>
        <li>
          <Link to="/dashboard/manageaccount" className="block py-2 px-4 rounded hover:bg-blue-700"><AreaChart>Manage Account</AreaChart>
          
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
