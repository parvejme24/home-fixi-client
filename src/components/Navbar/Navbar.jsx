import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "shadow-md hover:shadow-inner btn rounded-md text-white hover:text-white bg-blue-400 hover:bg-blue-500 btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allServices"
          className={({ isActive }) =>
            isActive
              ? "shadow-md hover:shadow-inner btn rounded-md text-white hover:text-white bg-blue-400 hover:bg-blue-500 btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          All Services
        </NavLink>
      </li>

      {/* dashboard dropdown  */}
      {user && (
        <li>
          <details className="dropdown">
            <summary className="font-semibold uppercase">Dashboard</summary>
            <ul className="p-2 shadow menu dropdown-content bg-white z-[1] rounded-box w-52">
              <li>
                <NavLink
                  to="/addAService"
                  className={({ isActive }) =>
                    isActive
                      ? "shadow-md hover:shadow-inner btn rounded-md text-white hover:text-white bg-blue-400 hover:bg-blue-500 btn-sm"
                      : "btn btn-ghost btn-sm"
                  }
                >
                  Add A Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manageServices"
                  className={({ isActive }) =>
                    isActive
                      ? "shadow-md hover:shadow-inner btn rounded-md text-white hover:text-white bg-blue-400 hover:bg-blue-500 btn-sm"
                      : "btn btn-ghost btn-sm"
                  }
                >
                  Manage Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mySchedules"
                  className={({ isActive }) =>
                    isActive
                      ? "shadow-md hover:shadow-inner btn rounded-md text-white hover:text-white bg-blue-400 hover:bg-blue-500 btn-sm"
                      : "btn btn-ghost btn-sm"
                  }
                >
                  My Schedules
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-md mb-4 sticky top-0 z-50 bg-white">
      <div className="container mx-auto navbar z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl -ml-8 md:-ml-0"
          >
            <img src={logo} className="w-14" alt="" />
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl -mt-3">
              Home<span className="font-extrabold">Fixi</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full bg-slate-300">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="text-xl font-semibold text-center">
                    {user.displayName}
                  </li>
                  <li className="mx-auto tex-center">{user.email}</li>
                </ul>
              </div>
              <button
                onClick={handleLogOut}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn bg-sky-500 capitalize text-white rounded-md ml-2 shadow-md hover:shadow-inner"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-blue-500 hover:bg-blue-700 text-white rounded-md capitalize"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
