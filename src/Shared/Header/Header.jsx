import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-slate-100 text-primary-content">
      <div className="container mx-auto grid lg:grid-cols-2 justify-between">
        <div className="text-amber-900 font-extrabold text-4xl italic">
          BD Traditional Foods
        </div>
        <div className=" font-serif text-2xl">
          <NavLink
            to="/"
            className="mr-4"
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
            to="/menus"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Menus
          </NavLink>
          <NavLink
            to="/blogs"
            className="mr-4"
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
            to="/login"
            className="mr-4"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
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
                color: isPending ? "red" : "black",
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
                color: isPending ? "red" : "black",
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
