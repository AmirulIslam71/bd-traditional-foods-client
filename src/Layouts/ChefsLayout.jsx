import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const ChefsLayout = () => {
  return (
    <div>
      <div className="bg-slate-600">
        <Header></Header>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ChefsLayout;
