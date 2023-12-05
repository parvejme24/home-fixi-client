import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ServiceCard from "../../components/Home/PopularServices/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);
  const servicesToShowInitially = 6; // Number of services to display initially

  useEffect(() => {
    fetch("https://the-career-maker-server-omega.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const filteredServices = services.filter((service) => {
    return service.serviceName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const limitedServices = showAllServices
    ? filteredServices
    : filteredServices.slice(0, servicesToShowInitially);

  const handleShowMore = () => {
    setShowAllServices(true);
  };

  return (
    <div className="container mx-auto py-12">
      <Helmet>
        <title>HomeFixi | All Services</title>
      </Helmet>

      <div className="text-center md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          All Services
        </h2>
        <p className="text-xl mt-2">
          Explore our comprehensive range of services designed to cater to all
          your home care needs. From plumbing to landscaping, find the perfect
          service for your home at Home Fixi.
        </p>
      </div>

      <div className="flex justify-center py-6 px-10 md:px-0">
        <input
          type="text"
          placeholder="Search Your Service"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border py-2 px-4 rounded-full max-w-[300px] w-[300px] shadow-md"
        />
        <input
          type="submit"
          value="Search"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer px-6 -ml-10 font-semibold text-white rounded-full shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-0">
        {limitedServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      {!showAllServices &&
        filteredServices.length > servicesToShowInitially && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className="btn mt-8 rounded-md px-8 shadow-md hover:shadow-inner bg-blue-400 hover:bg-blue-500 text-white"
            >
              Show More
            </button>
          </div>
        )}
    </div>
  );
};

export default AllServices;
