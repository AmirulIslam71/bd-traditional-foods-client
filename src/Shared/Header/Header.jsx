import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-slate-100 text-primary-content items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between">
        <div className="text-amber-900 font-extrabold lg:text-4xl sm:text-2xl md:text-3xl italic py-2 md:py-0">
          BD Traditional Foods
        </div>
        <div className=" font-serif lg:text-2xl">
          <div className="flex flex-wrap md:flex-nowrap justify-end">
            <NavLink
              to="/"
              className="mr-4 py-2 md:py-0"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/blogs"
              className="mr-4 py-2 md:py-0"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              blog
            </NavLink>
            <NavLink
              to="/register"
              className="mr-4 py-2 md:py-0"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              Register
            </NavLink>
            {user ? (
              <NavLink
                onClick={handleLogOut}
                to=""
                className="mr-4 py-2 md:py-0"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                LogOut
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="mr-4 py-2 md:py-0"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Login
              </NavLink>
            )}
            {user && (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.email || user?.displayName}
              >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full items-center mb-0">
                    <img
                      src={
                        user?.photoURL ||
                        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      }
                    />
                  </div>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
