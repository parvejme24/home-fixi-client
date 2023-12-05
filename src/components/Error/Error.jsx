import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error.svg";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <img src={error} className="w-[80%] md:w-1/2 mx-auto" alt="" />
        <Link
          to="/"
          className="btn bg-blue-600 hover:bg-blue-600 rounded-md shadow-md text-white w-28 mt-8"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
