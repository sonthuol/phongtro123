import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Search, Navigation } from "./index";

const Home = () => {
  return (
    <div className="w-full  h-full flex flex-col items-center">
      <Header />
      <Navigation />
      <Search />
      <div className="lg:w-4/5 w-full flex flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
