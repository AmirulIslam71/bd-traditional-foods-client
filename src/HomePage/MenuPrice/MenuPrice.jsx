import React from "react";

const MenuPrice = () => {
  return (
    <div>
      <div>
        <p>From Our Menu</p>
        <p>Delicious Food Forever</p>
        <div className="relative">
          <img
            className="w-full h-auto"
            src="https://tds-images.thedailystar.net/sites/default/files/feature/images/food_9.jpg"
            alt="Banner"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition duration-500">
            <div className="bg-white text-gray-900 p-4">
              <h2 className="font-bold text-2xl mb-2">
                Welcome to our website!
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPrice;
