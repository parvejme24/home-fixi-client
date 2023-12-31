import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaLink, FaLock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import google from "../../assets/google.png";
import loginPage from "../../assets/login.svg";

const Register = () => {
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);

  const handleCreateUser = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    console.log(form);
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // check password validation
    if (!/(?=.*[!#$%&? "])/.test(password)) {
      return setError("Don't have a special character");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Don't have a capital letter");
    } else if (password.length < 6) {
      return setError("Password cannot be less than 6 characters");
    }

    // create user
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);

        updateUserProfile(name, photo)
          .then(() => {
            const loggedProfile = result.user;
            console.log(loggedProfile);
          })
          .catch((error) => {
            console.log(error.message);
          });

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "This email Already Exist",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <Helmet>
        <title>HomeFixi | Register</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 gap- items-center">
        <div className="hidden md:flex">
          <img
            className="max-w-[400px] w-[400px] -mr-4"
            src={loginPage}
            alt=""
          />
        </div>

        <div className="max-w-[400px] w-[400px] m-4 border p-10 border-blue-100 shadow-md">
          <form onSubmit={handleCreateUser} className="space-y-3">
            <div>
              <h2 className="text-4xl text-center font-bold mb-5 text-blue-500">
                Sign Up
              </h2>
            </div>
            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaUser />
                </span>
                <input
                  className="p-2 w-full"
                  type="text"
                  name="name"
                  placeholder="User Name"
                  required
                />
              </div>
            </div>

            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaLink />
                </span>
                <input
                  className="p-2 w-full"
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  required
                />
              </div>
            </div>

            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaEnvelope />
                </span>
                <input
                  className="p-2 w-full"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300 relative">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaLock />
                </span>
                <input
                  className="p-2 w-full"
                  type={show ? "password" : "text"}
                  name="password"
                  placeholder="*******"
                  required
                />
                <p
                  onClick={() => setShow(!show)}
                  className="cursor-pointer absolute right-3"
                >
                  <small>{show ? "Show" : "Hide"}</small>
                </p>
              </div>
            </div>
            <p className="text-red-500">
              <small>{error}</small>
            </p>

            <input
              type="submit"
              value="Sign Up"
              className="shadow-md btn rounded-none w-full bg-blue-400 hover:bg-blue-600 hover:text-white text-xl capitalize"
            />
          </form>

          <div>
            <button
              onClick={handleGoogleLogin}
              className="shadow-md btn rounded-none w-full mt-3 btn-outline btn-primary"
            >
              <img className="w-5" src={google} alt="" /> Login with Google
            </button>

            <p className="text-center">
              <small>
                Already have an Account?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
