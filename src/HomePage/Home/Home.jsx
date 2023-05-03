import React from "react";
import Banner from "../Banner/Banner";
import ChefsList from "../ChefsList/ChefsList";
import Process from "../Process/Process";
import MenuPrice from "../MenuPrice/MenuPrice";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefsData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="bg-black">
        <div className="container mx-auto pt-10 pb-10">
          <p className="font-mono font-extrabold text-6xl text-center italic text-orange-700 pb-8">
            Our Experience Chefs Teams
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chefsData.map((chefs) => (
              <ChefsList key={chefs.id} chefs={chefs}></ChefsList>
            ))}
          </div>
        </div>
      </div>
      <Process></Process>
      <MenuPrice></MenuPrice>
    </div>
  );
};

export default Home;
