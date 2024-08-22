import React, { useState, useEffect } from 'react';
import LandingPage from "./landingPage"

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setFadeIn(true);
    }
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div
          className="flex items-center justify-center min-h-screen bg-blue-900 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://pageflutter.com/wp-content/uploads/2017/01/Love_Letter-wide_1024-800x600.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="text-center text-black">
            <div className="flex justify-center items-center h-24">
              <div className="border-8 border-t-8 border-white border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            </div>
            <h1 className="mt-9 font-bold text-6xl">
              Welcome To Postpone
            </h1>
            <h3 className="mt-9 font-bold text-2xl animate-blink">
              Where your dreams become a reality!
            </h3>
          </div>
        </div>
      ) : (
        <div className={`opacity-0 transition-opacity duration-2000 ${fadeIn ? 'opacity-100' : ''}`}>
          <LandingPage/>
        </div>
      )}

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 3.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PreLoader

// import React, { useEffect, useState } from 'react'
// import LandingPage from './landingPage'
// import pp from "../assets/images/pp.png"

// const PreLoader = () => {
//     const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay (e.g., fetching data or waiting for assets to load)
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // 3 seconds delay

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div className="flex items-center justify-center min-h-screen bg-blue-600">
//           <img src={[pp]} alt="Loading..." className="w-40 h-auto" />
//         </div>
//       ) : (
//         <LandingPage/>
//       )}
//     </div>
//   );
// };

// export default PreLoader