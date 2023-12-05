import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const {
    _id,
    serviceName,
    serviceImage,
    ownerName,
    ownerEmail,
    price,
    serviceArea,
    ownerImage,
    description,
  } = service;

  const handleBookNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceTakingDate = form.serviceTakingDate.value;
    const customerAddress = form.customerAddress.value;
    const description = form.servicePlan.value;
    const customerEmail = user.email;
    const newBooking = {
      serviceName,
      serviceImage,
      ownerName,
      ownerEmail,
      customerEmail,
      serviceTakingDate,
      customerAddress,
      description,
      price,
    };

    fetch(
      "https://the-career-maker-server-omega.vercel.app/api/v1/user/create-booking",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBooking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Purchase Successfully");
        form.reset();
      });
  };

  return (
    <div className="container mx-auto py-14">
      {/* service provider info  */}
      <div className="text-center shadow-md mb-8 w-[80%] md:w-1/2 mx-auto p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-500">
          Service Provider
        </h2>
        <img
          className="w-24 h-24 mx-auto shadow-md rounded-full bg-slate-200"
          src={ownerImage}
          alt=""
        />
        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-500">
          {ownerName}
        </h3>
        <p>Email: {ownerEmail}</p>
        <p>{serviceArea}</p>
      </div>

      <h2 className="text-2xl text-center pt-4 mb font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-500">
        My Services
      </h2>

      {/* single service info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 shadow-md mx-4 md:mx-0">
        <div>
          <img src={serviceImage} alt="" />
        </div>
        <div className="md:col-span-2 space-y-2">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-500 ">
            {serviceName}
          </h2>
          <p className="text-xl">{description}</p>
          <p className="text-xl text-blue-600 font-semibold">Price: ${price}</p>

          {/* book now modal button  */}
          <button
            className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-500 rounded-md shadow-md text-white"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Book Now
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              {/* book services form  */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img
                  className="rounded-md shadow-md"
                  src={serviceImage}
                  alt=""
                />
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    {serviceName}
                  </h2>
                  <p className="text-xl text-gray-500">
                    <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Owner Email:
                    </span>{" "}
                    {ownerEmail}
                  </p>
                  <p className="text-blue-500 text-xl">
                    <span className="font-semibold ">Price:</span> ${price}
                  </p>

                  <p className="my-4 text-xl">
                    <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Your Email:
                    </span>{" "}
                    {user.email}
                  </p>

                  <Toaster position="top-center" />

                  <form onSubmit={handleBookNow} className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="shadow-md p-3 rounded-md">
                        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                          Service Taking Date: *
                        </span>
                        <br />
                        <input
                          type="date"
                          name="serviceTakingDate"
                          required
                          className="border px-2 rounded-md"
                        />
                      </div>

                      <div className="shadow-md p-3 rounded-md">
                        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                          Your Address: *
                        </span>
                        <br />
                        <input
                          type="text"
                          name="customerAddress"
                          required
                          placeholder="Your Address"
                          className="px-2 border rounded-md py-1 w-full"
                        />
                      </div>
                    </div>

                    <div className="shadow-md p-3 rounded-md">
                      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Description:
                      </span>{" "}
                      <br />
                      <textarea
                        name="servicePlan"
                        placeholder="Type Your Service Plan or Special Message..."
                        id=""
                        cols="30"
                        rows="2"
                        className="p-2 rounded-md border w-full"
                      ></textarea>
                    </div>

                    <input
                      type="submit"
                      value="Purchase Now"
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn bg-sky-500 capitalize text-white rounded-md ml-2 shadow-md hover:shadow-inner"
                    />
                  </form>
                </div>
              </div>
              <div className="modal-action absolute right-6 top-0">
                <form method="dialog">
                  <button className="btn text-error shadow-md hover:shadow-inner rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
