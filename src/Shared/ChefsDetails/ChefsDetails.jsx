import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faComment,
  faCommentDots,
  faHeart,
  faShareNodes,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const ChefsDetails = () => {
  const chefsDetails = useLoaderData();

  const { id, name, numRecipes, picture, recipes, yearsOfExperience } =
    chefsDetails;

  return (
    <div className="card lg:card-side bg-black opacity-75 shadow-xl container mx-auto mt-8 font-serif">
      <figure className="w-1/2 p-4">
        <img className="rounded-2xl" src={picture} alt="chefs" />
      </figure>
      <div className="card-body bg-amber-300">
        <h2 className="font-serif italic font-extrabold text-6xl text-red-950 text-center">
          {name}
        </h2>
        <div className="mt-4">
          <p className="font-bold text-2xl mb-4">
            Number of Recipes :{" "}
            <span className="text-red-600">{numRecipes}</span>
          </p>
          <p className="font-bold text-2xl mb-4">
            Years of Experience :{" "}
            <span className="text-red-600">{yearsOfExperience} years</span>
          </p>
          <div>
            <p className="font-bold text-4xl mb-4">Recipes :-</p>
            <p className="font-bold mb-4 text-amber-950 text-2xl ">
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
            <div className="flex items-center bg-slate-500 p-2 rounded-2xl">
              <p className="text-red-900 text-2xl ">
                <FontAwesomeIcon icon={faHeart} />{" "}
                <span className="font-extrabold">{recipes[0]?.likes}</span>
              </p>
              <p className="text-2xl text-white">
                <Link>
                  <FontAwesomeIcon icon={faCommentDots} className="mr-5" />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faShareNodes} />
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-bold mb-4 text-amber-950 text-2xl ">
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
            <div className="flex items-center bg-slate-500 p-2 rounded-2xl">
              <p className="text-red-900 text-2xl ">
                <FontAwesomeIcon icon={faHeart} />{" "}
                <span className="font-extrabold">{recipes[1]?.likes}</span>
              </p>
              <p className="text-2xl text-white">
                <Link>
                  <FontAwesomeIcon icon={faCommentDots} className="mr-5" />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faShareNodes} />
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-bold mb-4 text-amber-950 text-2xl ">
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
            <div className="flex items-center bg-slate-500 p-2 rounded-2xl">
              <p className="text-red-900 text-2xl ">
                <FontAwesomeIcon icon={faHeart} />{" "}
                <span className="font-extrabold">{recipes[2]?.likes}</span>
              </p>
              <p className="text-2xl text-white">
                <Link>
                  <FontAwesomeIcon icon={faCommentDots} className="mr-5" />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faShareNodes} />
                </Link>
              </p>
            </div>
          </div>
          <div className="items-center mt-4">
            <Link to="/">
              <button className="btn btn-primary">Back to Home page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;
