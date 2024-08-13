import { AreaChart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-800 text-white w-64 px-4 py-8">
      <div className="text-center text-2xl font-semibold mb-8">Dashboard</div>
      <ul className="space-y-6">
        <li>
          <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-blue-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-blue-700">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/dashboard/notifications" className="block py-2 px-4 rounded hover:bg-blue-700">
            Notifications
          </Link>
        </li>
        <li>
          <Link to="/dashboard/manageaccount" className="block py-2 px-4 rounded hover:bg-blue-700"><AreaChart></AreaChart>
           Manage Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
