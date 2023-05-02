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
      <div className="bg-red-200">
        <div className="container mx-auto pt-10 pb-10">
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
