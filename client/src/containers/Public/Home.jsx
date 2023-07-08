import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Search, Navigation } from "./index";
import { Contact, Intro } from "../../components";
import * as action from "../../store/actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getCategories());
    dispatch(action.getPrices());
    dispatch(action.getAcreages());
    dispatch(action.getNewPosts());
    dispatch(action.getProvinces());
  }, [dispatch]);

  return (
    <div className="w-full  h-full flex flex-col items-center">
      <Header />
      <Navigation />
      <Search />
      <div className="lg:w-4/5 w-full flex flex-col items-center justify-start">
        <Outlet />
      </div>
      <Intro />
      <Contact />
    </div>
  );
};

export default Home;
