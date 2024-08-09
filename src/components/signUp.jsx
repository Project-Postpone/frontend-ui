import React, { useState } from 'react'
// import img1 from "../assets/images/img1.jpg"


function Copyright() {
  return (
    <p className="text-center text-gray-600 text-sm mt-5">
      {'Copyright © '}
      <a className="text-blue-500" href="">
        Postpone
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    allowExtraEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-8">
        {/* <div>
            <img src="img1" alt='' className="w-32 mx-auto" />
          </div> */}
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 10a1 1 0 112 0v5a1 1 0 11-2 0v-5zm1-7a1 1 0 110 2 1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold mb-6">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center">
                <input
                  name="allowExtraEmails"
                  type="checkbox"
                  checked={formData.allowExtraEmails}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <label className="text-gray-700 text-sm font-bold">
                  I want to receive inspiration, marketing promotions and updates via email.
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <div className="flex justify-end mt-4">
              <a href="/login" className="text-sm text-blue-500 hover:text-blue-700">
                Already have an account? Log in
              </a>
            </div>
          </form>
        </div>
        <Copyright />
      </div>
    </div>
  );
}
