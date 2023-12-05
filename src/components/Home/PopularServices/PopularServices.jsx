import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://the-career-maker-server-omega.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto py-12">
      <div className="text-center md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Popular Services
        </h2>
        <p className="text-xl mt-2">
          Discover our most sought-after services that homeowners love. Choose
          from our top-quality offerings to meet your home maintenance needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 pt-8">
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div>
        {services.length === 0 && (
          <div className="flex justify-center items-center py-12">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/allServices"
          className="btn shadow-md rounded-full px-8 text-[17px] bg-blue-500 hover:bg-blue-700 text-white capitalize"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
