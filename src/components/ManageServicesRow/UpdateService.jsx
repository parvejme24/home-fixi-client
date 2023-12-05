import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);
  const { _id, serviceName, serviceImage, price, serviceArea, description } =
    service;
  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const ownerName = form.ownerName.value;
    const ownerEmail = form.ownerEmail.value;
    const ownerImage = user.photoURL;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const updateService = {
      serviceName,
      serviceImage,
      ownerName,
      ownerEmail,
      ownerImage,
      price,
      serviceArea,
      description,
    };
    console.log(updateService);
    fetch(
      `https://the-career-maker-server-omega.vercel.app/api/v1/services/update-service/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Service Details Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>HomeFixi | Update Services</title>
      </Helmet>

      <div className="text-center md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Update Services
        </h2>
        <p className="text-xl mt-2">
          Update and modify your service details. This page allows you to make
          changes, edit descriptions, and manage information for a specific
          service offering on your platform.
        </p>
      </div>

      <div className="flex justify-center my-8">
        <form
          onSubmit={handleUpdateService}
          className="p-8 shadow-md space-y-2"
        >
          {/* service name and photo url row  */}
          <div className="md:flex gap-4 space-y-2 md:space-y-0">
            {/* service name field  */}
            <div className="form-control">
              <label className="block font-semibold text-blue-500">
                Service Name
              </label>
              <input
                className="p-2 border-2  rounded-md w-full shadow-sm"
                type="text"
                placeholder="Service Name"
                name="serviceName"
                defaultValue={serviceName}
                required
              />
            </div>

            {/* service image url field */}
            <div className="form-control">
              <label className="block font-semibold text-blue-500">
                Photo URL
              </label>
              <input
                className="p-2 border-2 w-full rounded-md shadow-sm"
                type="text"
                placeholder="Photo URL"
                name="serviceImage"
                defaultValue={serviceImage}
                required
              />
            </div>
          </div>

          {/* owner name and owner email row  */}
          <div className="md:flex gap-4 space-y-2 md:space-y-0">
            {/* owner name field  */}
            <div className="form-control">
              <label className="block font-semibold text-blue-500">
                Your Name
              </label>
              <input
                className="p-2 border-2  rounded-md w-full shadow-sm"
                type="text"
                placeholder="Your Name"
                name="ownerName"
                value={user && user.displayName}
                readOnly
              />
            </div>

            {/* owner email field */}
            <div className="form-control">
              <label className="block font-semibold text-blue-500">
                Your Email
              </label>
              <input
                className="p-2 border-2  rounded-md w-full shadow-sm"
                type="email"
                placeholder="Your Email"
                name="ownerEmail"
                value={user && user.email}
                readOnly
              />
            </div>
          </div>

          {/* price and service area row  */}
          <div className="md:flex gap-4 space-y-2 md:space-y-0">
            {/* owner name field  */}
            <div className="form-control">
              <label className="block font-semibold text-blue-500">Price</label>
              <input
                className="p-2 border-2  rounded-md w-full shadow-sm"
                type="text"
                placeholder="Price"
                name="price"
                defaultValue={price}
                required
              />
            </div>

            {/* owner email field */}
            <div className="form-control">
              <label className="block font-semibold text-blue-600">
                Service Area
              </label>
              <input
                className="p-2 border-2  rounded-md w-full shadow-sm"
                type="text"
                placeholder="Service Area"
                name="serviceArea"
                defaultValue={serviceArea}
                required
              />
            </div>
          </div>

          {/* service description row  */}
          <div className="form-control">
            <label className="text-blue-500 font-semibold">Description</label>
            <textarea
              placeholder="Description"
              className="p-2 border-2  rounded-md w-full shadow-sm"
              name="description"
              cols="30"
              rows="3"
              defaultValue={description}
              required
            ></textarea>
          </div>

          {/* add service button  */}
          <input
            type="submit"
            value="Update Now"
            className="btn capitalize w-full mt-4 bg-gradient-to-r from-indigo-500 to-indigo-500 via-purple-500 bg-sky-500 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
