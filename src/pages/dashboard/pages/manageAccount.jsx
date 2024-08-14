import React, { useState } from 'react';


const ManageAccount = () => {
  const [username, setUsername] = useState('jane_doe');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [profileImage, setProfileImage] = useState('https://loremflickr.com/200/200/portrait');

  const handleSaveChanges = () => {
    // Add functionality to save the changes
    alert('Account details have been updated!');
  };

  return (
    // <DashboardLayout>
      <div className="bg-white flex relative w-full h-screen p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Manage Account</h1>
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={profileImage}
              alt="Profile Avatar"
            />
            <div>
              <label className="block text-gray-700">Change Profile Picture</label>
              <input
                type="file"
                className="mt-2"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setProfileImage(URL.createObjectURL(file));
                  }
                }}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            onClick={handleSaveChanges}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    // {/* </DashboardLayout> */}
  );
};

export default ManageAccount
