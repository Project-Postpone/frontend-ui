import React from 'react';


const newnotify = [
  { id: 1, message: 'Your profile was updated successfully.', date: '2024-08-10' },
  { id: 2, message: 'New message received from John Doe.', date: '2024-08-11' },
  { id: 3, message: 'Your subscription is about to expire.', date: '2024-08-12' },
];

const Notification = () => {
  return (

    <div className="bg-white p-8 rounded-lg shadow-lg flex relative w-full h-screen flex-col">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <ul className="space-y-4">
        {newnotify.map(newnotify => (
          <li key={newnotify.id} className="p-4 bg-blue-300 rounded-lg shadow-sm">
            <p className=" bg-blue-300">{newnotify.message}</p>
            <p className="text-xl bg-blue-300">{newnotify.date}</p>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Notification
