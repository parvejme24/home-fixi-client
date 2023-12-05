import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddAService = () => {
  const { user } = useContext(AuthContext);
  const handleAddService = (e) => {
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
    const newService = {
      serviceName,
      serviceImage,
      ownerName,
      ownerEmail,
      ownerImage,
      price,
      serviceArea,
      description,
    };

    fetch(
      "https://the-career-maker-server-omega.vercel.app/api/v1/services/create-service",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Product Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };
  return (
    <div>
      <Helmet>
        <title>HomeFixi | Add A Service</title>
      </Helmet>

      <div className="container mx-auto py-4 md:py-0 min-h-screen flex justify-center items-center w-[100%]">
        <form onSubmit={handleAddService} className="p-8 shadow-md space-y-2">
          <h2 className="text-transparent bg-clip-text text-center text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-500 ">
            Add a Service
          </h2>
          <p className="text-xl font-semibold pb-6 text-center">
            Introduce a New Service Today
          </p>
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
              required
            ></textarea>
          </div>

          {/* add service button  */}
          <input
            type="submit"
            value="Add Now"
            className="btn capitalize w-full mt-4 bg-gradient-to-r from-indigo-500 to-indigo-500 via-purple-500 bg-sky-500 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAService;
