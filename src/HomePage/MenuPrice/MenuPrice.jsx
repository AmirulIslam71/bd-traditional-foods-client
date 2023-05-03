import React from "react";

const MenuPrice = () => {
  return (
    <div className="relative mt-4">
      <img
        className="w-full h-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhkP2_W6z6VRA0nHV7dQbOAF4WJXZZPq4Dg&usqp=CAU"
        alt="Banner"
      />
      <div className="absolute top-0 h-full w-full left-0 ">
        <div className="p-4 container text-center">
          <p className="text-rose-600 text-4xl font-mono italic font-extrabold">
            From Our Menu
          </p>
          <p className="text-rose-900 text-6xl font-serif font-extrabold">
            Delicious Food Forever
          </p>
          <div className="container mx-auto p-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5 text-rose-600 text-4xl font-mono italic font-extrabold">
            <div className=" mt-10">
              <p className="mb-10">
                <span>Biriyani</span> --------<span>250</span>
              </p>
              <p className="mb-10">
                <span>Pitha</span> --------<span>120</span>
              </p>
              <p className="mb-10">
                <span>Fish curry</span> --------<span>200</span>
              </p>
              <p className="mb-10">
                <span>Khichuri</span> --------<span>150</span>
              </p>
              <p className="mb-10">
                <span>Korma</span> --------<span>300</span>
              </p>
              <p className="mb-10">
                <span>Bhorta </span> --------<span>100</span>
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-10">
                <span>Beef bhuna </span> --------<span>170</span>
              </p>
              <p className="mb-10">
                <span>Chotpoti </span> --------<span>170</span>
              </p>
              <p className="mb-10">
                <span>Mango chutney </span> --------<span>170</span>
              </p>
              <p className="mb-10">
                <span>Gulab jamun </span> --------<span>170</span>
              </p>
              <p className="mb-10">
                <span>Samosas </span> --------<span>170</span>
              </p>
              <p className="mb-10">
                <span>Chicken rezala </span> --------<span>170</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPrice;
