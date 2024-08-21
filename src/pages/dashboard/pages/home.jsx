import React from 'react'

import opera from "../../../assets/images/opera.jpeg"
import sing from "../../../assets/images/sing.jpeg"
import ChartBar from '../../../components/chartBar';

const Home = () => {
  const chartData = [10, 20, 30,];
  const chartLabels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5','Day 6','Day 7'];

  return (

    <div className="flex-grow p-4 bg-white flex relative w-full h-screen flex-col">

      <div className="container mx-auto">

        {/* Main content goes here */}
        <div className="bg-blue-300 p-4 rounded-md shadow-md flex-grow flex relative  flex-col">

          <h2 className="text-lg font-semibold md:text-xl">Today - Classical music 41</h2>
          <p className="text-gray-700 mt-2">Your Concert is going to reach its peak.</p>

          <div className="flex flex-col md:flex-row justify-between mt-4">

            <div className="flex items-center mb-2 md:mb-0">
              <img src={opera} alt="sing" className="w-6 h-6 mr-2" />
              <p>Aug 16</p>
            </div>

            <div className="flex items-center">
              <img src={sing} alt="flier" className="w-6 h-6 mr-2" />
              <p>Aug 21</p>
            </div>

          </div>

        </div>

        <div className="mt-4">

          <div className="bg-blue-300 p-4 rounded-md shadow-md">

            <h3 className="text-2xl font-semibold">Messages sent</h3>

            <div className="bg-gray-200 rounded-md h-4">
              <div className="bg-green-500 h-4 rounded-md" style={{ width: '75%' }}>
                {/* Adjust width based on messages sent */}
              </div>

            </div>

          </div>
          <div />

        </div>

        {/* <div className="mt-4">
          <div className="bg-blue-300 p-4 rounded-md shadow-md flex-growflex relative  flex-col">

            <h2 className="text-lg font-semibold md:text-xl">Today - Classical music 41</h2>
            <p className="text-gray-700 mt-2">Your Concert is going to reach its peak.</p>

            <div className="flex flex-col md:flex-row justify-between mt-4">

              <div className="flex items-center mb-2 md:mb-0">
                <img src={opera} alt="lady" className="w-6 h-6 mr-2" />
                <p>Aug 16</p>
              </div>

              <div className="flex items-center">
                <img src={sing} alt="flier" className="w-6 h-6 mr-2" />
                <p>Aug 21</p>
              </div>

            </div>

          </div>

        </div> */}
        <div className="mt-4 bg-blue-300">
        <div className="chart-container w-[900px] h-[600px]">
        <ChartBar
          chartId="conceptionChart"
          data={chartData}
          labels={chartLabels}
          borderColor="pink"
          label="Message sent"
        />
      </div>
      </div>

      </div>
    </div>


  );
};

export default Home
