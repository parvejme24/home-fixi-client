import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ServiceCard = ({ service }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const {
    _id,
    serviceName,
    serviceImage,
    ownerName,
    ownerEmail,
    ownerImage,
    description,
  } = service;
  return (
    <section>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <div
          onLoad={() => setIsLoaded(true)}
          className="grid md:grid-cols-3 gap-4 p-5 shadow-md rounded-lg mx-4 md:mx-0"
        >
          <img src={serviceImage} alt="" />
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {serviceName}
            </h2>
            <p className="">{description}</p>

            <div className="mt-4 flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full bg-gray-200"
                src={ownerImage}
                alt=""
              />
              <div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  {ownerName}
                </h3>
                <p className="text-gray-500">{ownerEmail}</p>
              </div>
            </div>

            <Link
              to={`/serviceDetails/${_id}`}
              className="text-white shadow-md hover:shadow-inner capitalize mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn bg-sky-500 "
            >
              View Details
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceCard;
