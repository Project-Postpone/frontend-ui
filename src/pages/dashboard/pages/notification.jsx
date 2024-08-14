import React from 'react';


const notification = [
  { id: 1, message: 'Your profile was updated successfully.', date: '2024-08-10' },
  { id: 2, message: 'New message received from John Doe.', date: '2024-08-11' },
  { id: 3, message: 'Your subscription is about to expire.', date: '2024-08-12' },
];

const Notification = () => {
  return (
    // <DashboardLayout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <ul className="space-y-4">
          {notification.map(notification => (
            <li key={notification.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <p className="text-gray-700">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.date}</p>
            </li>
          ))}
        </ul>
      </div>
    // </DashboardLayout>
  );
};

export default Notification
