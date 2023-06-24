import React from "react";
import { text } from "../../utils/constant";
import { Province } from "../../components";
import { PostList } from "./index";

function Homepage() {
  return (
    <div className="border border-red-400 w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <span className="text-sm text-gray-700">{text.HOMT_DESCRIPTION}</span>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-full lg:w-[70%]">
          <PostList />
        </div>
        <div className="hidden lg:w-[30%] lg:inline border border-gray-600">
          Side bar
        </div>
      </div>
    </div>
  );
}

export default Homepage;
