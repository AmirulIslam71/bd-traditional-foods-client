import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          className="w-full lg:h-auto sm:h-auto"
          src="https://tds-images.thedailystar.net/sites/default/files/feature/images/food_9.jpg"
          alt="Banner"
        />
        <div className="absolute top-0 h-full w-full left-0 opacity-0 hover:opacity-95 transition duration-500 bg-black ">
          <div className="lg:p-4 container text-center">
            <h2 className="lg:font-extrabold md:font-bold lg:mb-2 lg:p-8 sm:p-4">
              <span className="lg:text-6xl md:text-xl sm:text-sm text-white font-serif">
                Welcome to our
              </span>
              <br />
              <span className="lg:text-7xl md:text-4xl text-red-700">
                Restaurant !!
              </span>
            </h2>
            <p className="text-slate-400 lg:text-4xl lg:pt-4 lg:pb-8 md:pb-4 sm:pb-1">
              See some Delicious recipes{" "}
              <span className="text-yellow-600">Here..!</span>
            </p>
            <div className="sm:h-10 sm:p-10">
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
