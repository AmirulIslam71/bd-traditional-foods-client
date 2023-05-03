import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-4 px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">
        Please Login Here !!!
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Enter your password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Register
          </button>
        </div>
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
