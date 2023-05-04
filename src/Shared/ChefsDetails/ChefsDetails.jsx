import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefsDetails = () => {
  const chefsDetails = useLoaderData();
  const [isDisabled, setIsDisabled] = useState(false);

  const { id, name, numRecipes, picture, recipes, yearsOfExperience } =
    chefsDetails;
  const handleDisabled = () => {
    if (true) {
      toast("Add your favorites item !!!");
      setIsDisabled(true);
    }
  };

  return (
    <div>
      <div className="relative">
        <LazyLoad className="h-auto" offset={300}>
          <img className="w-full" src={picture} alt="Banner" />
        </LazyLoad>

        <div className="absolute top-0 h-full w-full left-0 opacity-0 hover:opacity-75 transition duration-500 bg-black ">
          <div className="p-10 container text-center">
            <h2 className="font-extrabold mb-2 p-8">
              <span className="text-4xl text-white font-serif">
                Welcome to our
              </span>
              <br />
              <span className="text-5xl text-red-700">Chefs Information.</span>
            </h2>
            <h2 className="font-serif italic font-extrabold text-6xl text-red-400 mt-20 text-center">
              {name}
            </h2>
            <p className="font-bold text-white text-4xl mt-20">
              Number of Recipes :{" "}
              <span className="text-red-600">{numRecipes}</span>
            </p>
            <p className="font-bold text-4xl text-white mt-10">
              Years of Experience :{" "}
              <span className="text-red-600">{yearsOfExperience} years</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-black opacity-75 shadow-xl container mx-auto mt-2 font-serif">
        <div className="card-body bg-amber-300 rounded-xl">
          <div className="mt-4">
            <div>
              <p className="font-bold text-5xl mb-4 text-center">Recipes :-</p>
              <p className="font-bold mb-4 text-amber-950 text-3xl ">
                {recipes[0]?.name}
              </p>
              <p>
                <span className="text-amber-800 text-lg">Descriptions : </span>
                {recipes[0]?.description}.
              </p>
              <p className="mt-2">
                <span className="text-amber-800 text-lg">Ingredients : </span>
                {recipes[0]?.ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient}, </span>
                ))}
              </p>
              <p className="mt-2">
                <span className="text-amber-800 text-lg">Instructions : </span>
                {recipes[0]?.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}, </li>
                ))}
              </p>
            </div>
            <div className="flex justify-between bg-slate-500 p-2 mt-4 rounded-xl">
              <div className="flex  items-center text-xl text-white">
                <p className="">
                  <AiOutlineHeart />
                </p>
                <p className="ml-2">{recipes[2]?.likes}</p>
              </div>
              <div className="text-xl flex  items-center text-white">
                <p className="flex items-center">
                  <AiOutlineShareAlt /> <span>Share</span>
                </p>
              </div>
            </div>
            <div className="mt-5">
              <p className="font-bold mb-4 text-amber-950 text-3xl ">
                {recipes[1]?.name}
              </p>
              <p>
                <span className="text-amber-800 text-lg">Descriptions : </span>
                {recipes[1]?.description}.
              </p>
              <p className="mt-2">
                <span className="text-amber-800 text-lg">Ingredients : </span>
                {recipes[1]?.ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient}, </span>
                ))}
              </p>
              <p className="mt-2">
                <span className="text-amber-800 text-lg">Instructions : </span>
                {recipes[1]?.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}, </li>
                ))}
              </p>
              <div className="flex justify-between bg-slate-500 p-2 mt-4 rounded-xl">
                <div className="flex  items-center text-xl text-white">
                  <p className="">
                    <AiOutlineHeart />
                  </p>
                  <p className="ml-2">{recipes[1]?.likes}</p>
                </div>
                <div className="text-xl flex  items-center text-white">
                  <p className="flex items-center">
                    <AiOutlineShareAlt /> <span>Share</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="font-bold mb-4 text-amber-950 text-3xl ">
                {recipes[2]?.name}
              </p>
              <p>
                <span className="text-amber-800 text-lg">Descriptions : </span>
                {recipes[2]?.description}.
              </p>
              <p className="mt-2">
                <span className="text-amber-800 text-lg">Ingredients : </span>
                {recipes[2]?.ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient}, </span>
                ))}
              </p>
              <p className="mt-2">
                <span className="text-amber-800 text-lg">Instructions : </span>
                {recipes[2]?.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}, </li>
                ))}
              </p>
              <div className="flex justify-between bg-slate-500 p-2 mt-4 rounded-xl">
                <div className="flex  items-center text-xl text-white">
                  <p className="">
                    <AiOutlineHeart />
                  </p>
                  <p className="ml-2">{recipes[2]?.likes}</p>
                </div>
                <div className="text-xl flex  items-center text-white">
                  <p className="flex items-center">
                    <AiOutlineShareAlt /> <span>Share</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <Link to="/">
                <button className="btn btn-primary">Back to Home page</button>
              </Link>

              <button
                className="flex items-center btn-primary p-2 rounded-xl "
                onClick={handleDisabled}
                disabled={isDisabled}
              >
                <AiOutlineShoppingCart /> Add to Favorites
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;
