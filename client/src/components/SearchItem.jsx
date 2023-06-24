import React, { memo } from "react";

function SearchItem({ iconStart, iconEnd, text, fontWeight }) {
  return (
    <div className="bg-white py-2 px-4 w-full rounded-md text-gray-500 text-[13px] flex items-center justify-between">
      <div className="flex items-center gap-1 w-full">
        {iconStart}
        <span
          className={`${
            fontWeight && "font-medium text-black"
          } w-[100px] overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {text}
        </span>
      </div>
      {iconEnd}
    </div>
  );
}

export default memo(SearchItem);
