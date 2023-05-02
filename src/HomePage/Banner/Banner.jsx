import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="bg-amber-800">
      <div className="relative">
        <img
          className="w-full h-auto"
          src="https://tds-images.thedailystar.net/sites/default/files/feature/images/food_9.jpg"
          alt="Banner"
        />
        <div className="absolute top-0 h-full w-full left-0 opacity-0 hover:opacity-95 transition duration-500 bg-black ">
          <div className="p-4 container text-center">
            <h2 className="font-extrabold mb-2 p-8">
              <span className="text-6xl text-white font-serif">
                Welcome to our
              </span>
              <br />
              <span className="text-7xl text-red-700">Restaurant !!</span>
            </h2>
            <p className="text-slate-400 text-4xl pt-4 pb-8">
              See some Delicious recipes{" "}
              <span className="text-yellow-600">Here..!</span>
            </p>
            <div>
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
