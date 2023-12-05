import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="text-center py-12 bg-base-200 px-4 md:px-0">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
        Our Impact
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        We are proud of our achievements and the positive impact we've made on
        homes so far.
      </p>

      <div className="flex items-center justify-center space-x-8">
        <div className="shadow-md p-6 rounded-md">
          <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <CountUp start={0} end={350} duration={10}></CountUp>
          </h3>
          <p className="text-xl text-gray-700">Homes Improved</p>
        </div>

        <div className="shadow-md p-6 rounded-md">
          <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <CountUp start={0} end={350} duration={10}></CountUp>
          </h3>
          <p className="text-xl text-gray-700">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
