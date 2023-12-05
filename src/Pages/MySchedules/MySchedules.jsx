import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  const [pendingWorks, setPendingWorks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://the-career-maker-server-omega.vercel.app/api/v1/user/bookings?email=${user.email}`,
          {
            withCredentials: true,
          }
        )
        .then((data) => setMyBookings(data.data));
    }
  }, [user?.email]);
  return (
    <div className="container mx-auto py-12">
      <Helmet>
        <title>HomeFixi | My Schedules</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* my bookings contaner  */}
          <h2 className="text-2xl text-center font-semibold mb-6">
            My Bookings
          </h2>
          {myBookings.map((booking) => (
            <div className="flex gap-4 p-5 shadow-md rounded-md">
              <img className="w-24" src={booking.serviceImage} alt="" />
              <div>
                <h2 className="text-2xl font-semibold">
                  {booking.serviceName}
                </h2>
                <p className="font-semibold">Price: ${booking.price}</p>
              </div>
            </div>
          ))}
          {myBookings.length === 0 && (
            <div className="flex justify-center items-center py-12">
              <h2 className="font-semibold text-blue-500">
                No Booking Available
              </h2>
            </div>
          )}
        </div>

        {/* my pending works  */}
        <div>
          <h2 className="text-2xl text-center font-semibold">Pending Works</h2>

          <div></div>

          <div>
            {pendingWorks.length === 0 && (
              <div className="flex justify-center items-center py-12">
                <h2 className="font-semibold text-center text-blue-500">
                  No Pending Works Available
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
