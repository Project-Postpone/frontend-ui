import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WriteLetter = () => {

  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [smsNumber, setSmsNumber] = useState('');
  const [email, setEmail] = useState("")

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSmsChange = (event) => {
    setSmsNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

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

    <div className="container mx-auto px-4 bg-blue-300">

      <nav className="w-full flex justify-between items-center p-4 text-blue-900 bg-blue-300">
        <a href="#" className="text-2xl font-bold ">Postpone</a>
        <div className="space-x-4">
          <Link to="/writeletter" className="hover:underline">Write a Letter</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
          <Link to="/login" className=" hover:underline">Login</Link>
        </div>
      </nav>


      <h1 className="text-3xl  text-blue-900 font-bold mb-6">Postpone a Letter to the Future</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 mb-2">
              
            </label>
            <textarea
              
              
              
              
            />
          </div> */}
        <textarea className="w-full p-2 mb-4 border text-blue-900 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          value={content} id="content"
          onChange={handleChange} rows="10"
          placeholder="Hello,"></textarea>

        <div className="flex mb-4">
          <label className="mr-2">Deliver in</label>
          <select className="p-2 border rounded focus:ring focus:ring-blue-500 focus:outline-none">
            <option></option>
            <option>1 day</option>
            <option>2 days</option>
            <option>1 week</option>
            <option>4 weeks</option>
            <option>1 month</option>
            <option>3 months</option>
            <option>6 months</option>
            <option>1 year</option>
            <option>3 years</option>
            <option>5 years</option>
            <option>10 years</option>
          </select>
        </div>
        <div className="flex mb-4"></div>

        <div className="flex mb-4">
          <label className="mr-2">Select your audience</label>
          <select className="p-2 border roundedfocus:ring focus:ring-blue-500 focus:outline-none">
            <option></option>
            <option>Yourself</option>
            <option>Others</option>
          </select>
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

        <div className="mb-4">
          <label htmlFor="Email" className="block text-blue-900 mb-2">
            Email (Optional)
          </label>
          <input type="email"
            id="email"
            className="w-full p-2 border rounded mt-2"
            value={email}
            onChange={handleEmailChange}
            placeholder="Please enter an email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring   
 focus:ring-blue-500"
        >
          Postpone
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