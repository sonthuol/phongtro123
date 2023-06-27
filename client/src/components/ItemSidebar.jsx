import React from "react";
import icons from "../utils/icons";

const { GrNext } = icons;

function ItemSidebar({ title, content }) {
  return (
    <div className="p-4 rounded-md bg-white w-full">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <div className="flex flex-col gap-2">
        {content?.length &&
          content.map((item) => {
            return (
              <div
                key={item.code}
                className="flex gap-1 items-center cursor-pointer hover:text-orange-500 border-b border-gray-300 pb-1 border-dashed"
              >
                <GrNext size={10} color="#ccc" />
                <p>{item.value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ItemSidebar;
