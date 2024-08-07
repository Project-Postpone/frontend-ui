import React from 'react';

function Copyright(props) {
  return (
    <div className="text-center text-sm text-gray-600" {...props}>
      {'Copyright © '}
      <a className="text-blue-600" href="https://mui.com/">
        Postpone
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}

export default function LogIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-xs">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V21a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 017.5 21V10.5m9 0V6.75A3.75 3.75 0 0012 3 3.75 3.75 0 008.25 6.75V10.5m9 0h-9m9 0a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 10.5m9 0V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75V10.5"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-6">Log in</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email Address"
                autoComplete="email"
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  value="remember"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
            <div className="flex justify-between mt-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Don't have an account? Sign Up
              </a>
            </div>
          </form>
        </div>
        <Copyright className="mt-8 mb-4" />
      </div>
    </div>
  );
}
