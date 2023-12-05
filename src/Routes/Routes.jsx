import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddAService from "../Pages/AddAService/AddAService";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home";
import ManageServices from "../Pages/ManageServices/ManageServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import Error from "../components/Error/Error";
import ServiceDetails from "../components/Home/PopularServices/ServiceDetails";
import Login from "../components/Login/Login";
import UpdateService from "../components/ManageServicesRow/UpdateService";
import Register from "../components/Register/Register";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addAService",
        element: (
          <PrivetRout>
            <AddAService></AddAService>
          </PrivetRout>
        ),
      },
      {
        path: "serviceDetails/:id",
        element: (
          <PrivetRout>
            <ServiceDetails></ServiceDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-career-maker-server-omega.vercel.app/api/v1/service/${params.id}`
          ),
      },
      {
        path: "allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "manageServices",
        element: (
          <PrivetRout>
            <ManageServices></ManageServices>
          </PrivetRout>
        ),
      },
      {
        path: "updateService/:id",
        element: (
          <PrivetRout>
            <UpdateService></UpdateService>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-career-maker-server-omega.vercel.app/api/v1/service/${params.id}`
          ),
      },
      {
        path: "mySchedules",
        element: (
          <PrivetRout>
            <MySchedules></MySchedules>
          </PrivetRout>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
