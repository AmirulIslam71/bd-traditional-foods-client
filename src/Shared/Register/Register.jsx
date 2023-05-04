import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    if (password.length < 6) {
      setError("Password must be 6 characters !!");
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setError("At least one upper Case");
      return;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setError("At least one lower Case");
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setError("At least one digit");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("At least one special characters");
      return;
    } else {
      setError();
    }
    form.reset();

    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        setSuccess("User Registration is successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleDisabled = (event) => {
    setAccept(event.target.checked);
  };

  return (
    <div className="max-w-md mx-auto mt-4 px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">
        Please Register Here !!!
      </h2>
      <h2 className="text-primary text-xl p-2 text-center">{success}</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="PhotURL"
          >
            Photo URL
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="photo"
            required
            placeholder="Enter your Photo Url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            onClick={handleDisabled}
            type="checkbox"
            name="accept"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-gray-700 font-bold"
          >
            Accept Terms and conditions
          </label>
        </div>
        <p className="text-yellow-700 pb-3">{error}</p>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            disabled={!accept}
            type="submit"
          >
            Register
          </button>
        </div>
        <p className="pt-4 text-black">
          Already Have an account{" "}
          <Link to="/login" className="text-xl text-red-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
