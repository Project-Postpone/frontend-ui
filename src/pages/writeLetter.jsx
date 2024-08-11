import React, { useState } from 'react';

const WriteLetter= () => {
  const [email, setEmail] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-300 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">A letter from Aug 10, 2024</h2>
      <div className="border p-4 rounded-lg mb-4">
        <textarea
          className="w-full h-48 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
          placeholder="Dear FutureMe,"
        />
        <div className="text-right text-gray-500 mt-2">2 word(s)</div>
        <button className="text-blue-500 mt-2">💡 Inspire me!</button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <span className="mr-4">Deliver in</span>
          <div className="flex space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">6 months</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">1 year</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">3 years</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">5 years</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">10 years</button>
          </div>
        </div>

        <div className="flex items-center">
          <span className="mr-4">Select your audience</span>
          <div className="flex space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">Private</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">
              Public, but anonymous
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Make sure you get your letter</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <a href="#" className="text-blue-500 text-sm mt-1 inline-block">Add Additional Recipients</a>
        </div>

        <div className="flex items-center space-x-2">
          <input type="radio" id="justLetter" name="style" className="mr-2" />
          <label htmlFor="justLetter" className="text-sm font-medium text-gray-700">Send just this letter</label>
          <span className="text-sm text-gray-500">Free</span>
        </div>
      </div>

      <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg">
        Send to the Future
      </button>
    </div>
  );
};

export default WriteLetter