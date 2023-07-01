import React, { memo } from "react";

function ProvinceBtn({ name, image }) {
  return (
    <div className="shadow-md rounded-bl-md rounded-br-md cursor-pointer  text-blue-600 hover:text-orange-500">
      <img
        src={image}
        alt={name}
        className="h-[110px] w-[190px] object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="font-bold p-2 text-sm text-center">{name}</div>
    </div>
  );
}

export default memo(ProvinceBtn);
