import React, { useState } from 'react'
import NewDashboardLayout from '../Layout/newDashboardLayout'
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const naviagte = useNavigate
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSaveSettings = () => {
    // Add functionality to save the settings
    alert('Settings have been saved!');
  };

  return (
    // <NewDashboardLayout>
      <div className="flex w-full relative p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Preferences</h3>
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Email Notifications</label>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="w-5 h-5"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <label className="text-gray-700">Dark Mode</label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="w-5 h-5"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
            <div className="flex flex-col space-y-4">
              <div>
                <label className="block text-gray-700">Change Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSaveSettings}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Settings
          </button>
        </div>
      </div>
    // </NewDashboardLayout>
  );
};

export default Settings
