import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <Navigation />
      <div className="w-full flex flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
