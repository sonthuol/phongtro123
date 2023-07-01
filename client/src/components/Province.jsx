import React from "react";
import { location } from "../utils/constant";
import { ProvinceBtn } from "./index";

const Province = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-3">
      {location.map((item) => {
        return (
          <ProvinceBtn key={item.id} name={item.name} image={item.image} />
        );
      })}
    </div>
  );
};

export default Province;
