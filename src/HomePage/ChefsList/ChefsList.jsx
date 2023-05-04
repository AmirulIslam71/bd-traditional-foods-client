import React from "react";
import { Link } from "react-router-dom";

const ChefsList = ({ chefs }) => {
  const { id, name, picture, numRecipes, yearsOfExperience, recipes } = chefs;
  return (
    <div className="card w-96 glass">
      <figure className="">
        <img className="h-60 w-full p-4" src={picture} alt="chefs" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-extrabold font-serif text-4xl text-cyan-400">
          {name}
        </h2>
        <div>
          <p className="text-cyan-200 text-xl">
            Number Of Recipes :{" "}
            <span className="text-red-500">{numRecipes}</span>
          </p>
          <p className="text-cyan-200 text-xl">
            Years Experience :{" "}
            <span className="text-red-500">{yearsOfExperience}</span>
          </p>
          <div className="text-slate-100">
            <p className="font-extrabold text-2xl text-red-500">Recipes</p>
            <div className="divide-y">
              <p>
                <span className="text-2xl font-mono">{recipes[0]?.name}</span> :{" "}
                <span>{recipes[0]?.description}</span>
              </p>
              <p>
                <span className="text-2xl font-mono">{recipes[1]?.name}</span> :{" "}
                <span>{recipes[1]?.description}</span>
              </p>
              <p>
                <span className="text-2xl font-mono">{recipes[2]?.name}</span> :{" "}
                <span>{recipes[2]?.description}</span>
              </p>
            </div>
            <Link to={`/chefsDetails/${id}`}>
              <button className="btn btn-primary w-full mb-0">
                View details Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsList;
