import React, { memo } from "react";

function SearchItem({ iconStart, iconEnd, text, fontWeight, defaultText }) {
  return (
    <div className="bg-white py-2 px-4 w-full rounded-md text-gray-500 text-[13px] flex items-center justify-between">
      <div className="flex items-center gap-1 w-full">
        {iconStart}
        <span
          className={`${
            (fontWeight || text) && "font-medium text-black"
          } w-[120px] overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {text || defaultText}
        </span>
      </div>
      {iconEnd}
    </div>
  );
}

export default memo(SearchItem);
