import React from "react";

const Process = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="card w-full shadow-2xl">
        <figure>
          <img
            className="p-4"
            src="https://www.ghostkitchen.com.bd/wp-content/uploads/2020/08/WhatsApp-Image-2020-11-25-at-9.26.51-PM.jpeg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center text-white">
          <h2 className="text-3xl font-extrabold text-center italic">
            Clean Kitchen
          </h2>
          <p>
            A clean kitchen promotes a healthy home. Regular cleaning and proper
            storage of food waste are important for food quality and safety.
          </p>
        </div>
      </div>
      <div className="card w-full shadow-2xl">
        <div className="card-body text-center text-white">
          <h2 className="text-3xl font-extrabold text-center italic">
            Skilled Chefs
          </h2>
          <p>
            Skilled chefs possess extensive knowledge and experience in culinary
            arts, creating delicious and visually appealing dishes.
          </p>
        </div>
        <figure>
          <img
            className="p-4"
            src="https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/styles/hero_desktop/public/Shorno%20Chef.jpg?itok=5GfI_m6B"
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card w-full shadow-2xl">
        <figure>
          <img
            className="p-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Panta_Ilish.jpg/800px-Panta_Ilish.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center text-white">
          <h2 className="text-3xl font-extrabold text-center italic">
            Feel Healthy
          </h2>
          <p>
            Feeling healthy involves physical, mental, and emotional well-being.
            It is achieved through regular exercise, a balanced diet, and
            self-care practices.
          </p>
        </div>
      </div>
      <div className="card w-full shadow-2xl">
        <div className="card-body text-center text-white">
          <h2 className="text-3xl font-extrabold text-center italic">
            Vegan Cuisine
          </h2>
          <p>
            Vegan cuisine is plant-based and excludes animal products. It is a
            sustainable and healthy dietary choice for many.
          </p>
        </div>
        <figure>
          <img
            className="p-4"
            src="https://whatson.guide/wp-content/uploads/2019/04/indian-food.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default Process;
