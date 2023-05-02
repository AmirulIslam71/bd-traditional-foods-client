import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-black text-primary-content">
      <div className="container mx-auto grid lg:grid-cols-2 justify-between">
        <div className="text-amber-900 font-extrabold text-4xl italic">
          BD Traditional Foods
        </div>
        <div className="">
          <NavLink
            to="/"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/menus"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
              };
            }}
          >
            Menus
          </NavLink>
          <NavLink
            to="/blog"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
              };
            }}
          >
            blog
          </NavLink>
          <NavLink
            to="/login"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
              };
            }}
          >
            Login
          </NavLink>
          <NavLink
            to="/logout"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
              };
            }}
          >
            LogOut
          </NavLink>
          <NavLink
            to="/register"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
              };
            }}
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
