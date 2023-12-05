import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="relative">
          <img
            className="w-3/4 shadow-md border-8 border-white"
            src="https://i.ibb.co/t2bH90b/i4.jpg"
            alt=""
          />
          <img
            className="absolute shadow-md w-1/2 right-0 top-1/2 border-8 border-white"
            src="https://i.ibb.co/GT2R9X7/i.jpg"
            alt=""
          />
        </div>

        <div className="mt-10 lg:mt-0">
          <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl font-semibold mb-4">
            About Us
          </h4>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Your Trusted Partner for Home Improvement and Maintenance
          </h2>
          <p className="text-xl">
            At HomeServices.com, we understand that your home is your sanctuary,
            a place where you create memories, relax, and unwind. That's why
            we're committed to providing you with the best possible home service
            experience, ensuring that your home remains a haven of comfort and
            convenience.
          </p>
          <h3 className="text-3xl mt-8 mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Why Choose HomeFixi.com?
          </h3>
          <p className="text-2xl font-semibold">
            There are many reasons to choose HomeServices.com for your home
            service needs. Here are just a few:
          </p>
          <ul className="list-disc font-semibold mt-6 ml-6">
            <li>We are a licensed and insured company.</li>
            <li>We have a team of experienced and qualified professionals.</li>
            <li>We offer a wide range of services to meet your needs.</li>
            <li>We provide high-quality workmanship and service.</li>
            <li>We offer affordable prices.</li>
            <li>We are reliable and responsive.</li>
            <li>We are committed to customer satisfaction.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
