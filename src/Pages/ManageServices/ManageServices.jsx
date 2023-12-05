import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ManageServicesRow from "../../components/ManageServicesRow/ManageServicesRow";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://the-career-maker-server-omega.vercel.app/api/v1/owner/services?email=${user.email}`,
          {
            withCredentials: true,
          }
        )

        .then((data) => setMyServices(data.data));
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto py-12">
      <Helmet>
        <title>HomeFixi | Manage Services</title>
      </Helmet>

      <div className="text-center md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Manage Services
        </h2>
        <p className="text-xl mt-2">
          Manage and modify your offered services. This page allows you to
          update, add, or remove services to meet the needs of your customers
          effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 px-4 md:px-0">
        {myServices.map((myService) => (
          <ManageServicesRow
            key={myService._id}
            myService={myService}
          ></ManageServicesRow>
        ))}
      </div>

      <div>
        {myServices.length === 0 && (
          <div className="flex text-center justify-center items-center py-12">
            <div>
              <h2 className="text-2xl font-semibold text-blue-500">
                No Service Available
              </h2>
              <p className="font-semibold">Please Add Your Service</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageServices;
