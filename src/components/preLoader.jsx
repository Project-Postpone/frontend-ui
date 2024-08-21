import React, { useEffect, useState } from 'react'
import LandingPage from './landingPage'
import pp from "../assets/images/pp.png"

const PreLoader = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or waiting for assets to load)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-blue-600">
          <img src={[pp]} alt="Loading..." className="w-40 h-auto" />
        </div>
      ) : (
        <LandingPage/>
      )}
    </div>
  );
};

export default PreLoader