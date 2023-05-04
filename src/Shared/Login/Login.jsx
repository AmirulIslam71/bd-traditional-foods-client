import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSingIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    if ((email, password)) {
      signInUser(email, password)
        .then((result) => {
          const signedUser = result.user;
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError("Please Enter valid email and password..");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">
        Please Login Here !!!
      </h2>
      <form onSubmit={handleSingIn}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
        </div>
        <p className="p-2 text-red-600">{error}</p>
        <p className="pt-4 text-black">
          Don't have a Account go for{" "}
          <Link to="/register" className="text-xl text-red-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
