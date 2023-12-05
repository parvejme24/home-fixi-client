import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="px-4 md:px-0 md:w-3/4 lg:w-1/2 mx-auto text-center">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Our Service Plans
        </h2>
        <p className="text-xl mt-2">
          Choose the plan that best suits your home maintenance needs. All plans
          include a range of services to keep your home in top condition.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Plan 1: Basic Plan */}
        <div className="bg-white shadow-md hover:shadow-inner rounded-lg p-6 flex-1 max-w-xs">
          <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Starter Plan
          </h2>
          <div className="text-5xl font-bold text-gray-900 mb-4">
            $29<span className="text-lg font-normal">/mo</span>
          </div>
          <p className="text-gray-600 mb-4 text-xl">
            Ideal for small households
          </p>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center mb-2">
              <svg
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Up to 2 home services per month
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Email support
            </li>
            {/* Add more features here */}
          </ul>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 shadow-md hover:shadow-inner mt-4 hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Plan 2: Standard Plan */}
        <div className="bg-white shadow-md hover:shadow-inner rounded-lg p-6 flex-1 max-w-xs">
          <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Professional Plan
          </h2>
          <div className="text-5xl font-bold text-gray-900 mb-4">
            $59<span className="text-lg font-normal">/mo</span>
          </div>
          <p className="text-gray-600 mb-4 text-xl">
            Perfect for regular maintenance
          </p>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center mb-2">
              <svg
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Up to 5 home services per month
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Phone and email support
            </li>
            {/* Add more features here */}
          </ul>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 shadow-md hover:shadow-inner hover:bg-blue-600 transition duration-300">
            Choose Plan
          </button>
        </div>

        {/* Plan 3: Premium Plan */}
        <div className="bg-white shadow-md hover:shadow-inner rounded-lg p-6 flex-1 max-w-xs">
          <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Ultimate Plan
          </h2>
          <div className="text-5xl font-bold text-gray-900 mb-4">
            $99<span className="text-lg font-normal">/mo</span>
          </div>
          <p className="text-gray-600 mb-4 text-xl">
            For comprehensive home care
          </p>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center mb-2">
              <svg
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Unlimited home services per month
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              24/7 priority support
            </li>
            {/* Add more features here */}
          </ul>
          <button className="bg-blue-500 text-white rounded-md shadow-md hover:shadow-inner px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300">
            Get Ultimate Care
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
