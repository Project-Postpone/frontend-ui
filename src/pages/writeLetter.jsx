import React, { useState } from 'react';

const WriteLetter= () => {

  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [smsNumber, setSmsNumber] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSmsChange = (event) => {
    setSmsNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your logic to send the content, file, and SMS here
    const formData = new FormData();
    formData.append('content', content);
    if (file) {
      formData.append('file', file);
    }

    // Send data using fetch or axios
    fetch('/api/send', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Handle success response
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  };

  return (

      <div className="container mx-auto px-4 py-10 bg-blue-300">
        <h1 className="text-3xl font-bold mb-6">Write a Letter to the Future</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 mb-2">
              Write Here
            </label>
            <textarea
              id="content"
              name="content"
              rows="10"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
              value={content}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 mb-2">
              Attach a File (Optional)
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="smsNumber" className="block text-gray-700 mb-2">
              Send SMS Notification (Optional)
            </label>
            <input
              type="tel"
              id="smsNumber"
              name="smsNumber"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
              value={smsNumber}
              onChange={handleSmsChange}
              placeholder="Enter phone number"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring   
 focus:ring-blue-500"
          >
            Send Letter
          </button>
        </form>
      </div>
  )
}
//   const [email, setEmail] = useState('');

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-blue-300 shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">A letter from Aug 10, 2024</h2>
//       <div className="border p-4 rounded-lg mb-4">
//         <textarea
//           className="w-full h-48 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
//           placeholder="Dear FutureMe,"
//         />
//         <div className="text-right text-gray-500 mt-2">2 word(s)</div>
//         <button className="text-blue-500 mt-2">💡 Inspire me!</button>
//       </div>

//       <div className="space-y-4">
//         <div className="flex items-center">
//           <span className="mr-4">Deliver in</span>
//           <div className="flex space-x-2">
//             <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">6 months</button>
//             <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">1 year</button>
//             <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">3 years</button>
//             <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">5 years</button>
//             <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">10 years</button>
//           </div>
//         </div>

//         <div className="flex items-center">
//           <span className="mr-4">Select your audience</span>
//           <div className="flex space-x-2">
//             <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">Private</button>
//             <button className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg">
//               Public, but anonymous
//             </button>
//           </div>
//         </div>

//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700">Make sure you get your letter</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//           <a href="#" className="text-blue-500 text-sm mt-1 inline-block">Add Additional Recipients</a>
//         </div>

//         <div className="flex items-center space-x-2">
//           <input type="radio" id="justLetter" name="style" className="mr-2" />
//           <label htmlFor="justLetter" className="text-sm font-medium text-gray-700">Send just this letter</label>
//           <span className="text-sm text-gray-500">Free</span>
//         </div>
//       </div>

//       <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg">
//         Send to the Future
//       </button>
//     </div>
//   );
// };

export default WriteLetter