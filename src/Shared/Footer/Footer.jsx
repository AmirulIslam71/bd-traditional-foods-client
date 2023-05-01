import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white mt-4 grid lg:grid-cols-5 gap-20">
      <div className="col-span-2">
        <div className="text-amber-900 font-extrabold text-4xl italic">
          BD Traditional Foods
        </div>
        <p>
          Bangladesh has a rich culinary tradition that reflects its diverse
          history and culture. Some of the most popular traditional foods in
          Bangladesh include rice, lentils, fish, beef, and vegetables. These
          ingredients are often cooked in flavorful spices and served with
          chutneys and pickles.
        </p>
      </div>
      <div>
        <span className="footer-title">Our Services</span>
        <a className="link link-hover">Fast Delivery</a>
        <a className="link link-hover">Fresh Products</a>
        <a className="link link-hover">Skilled Chefs</a>
        <a className="link link-hover">Great Tea</a>
      </div>
      <div>
        <span className="footer-title">For Contacts</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Our Team</a>
        <a className="link link-hover">Blog</a>
      </div>
      <div>
        <span className="footer-title">Latest Posts</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
