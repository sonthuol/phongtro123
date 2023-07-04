import React from "react";
import moment from "moment";

import "moment/locale/vi";

function RelatedItemPost({ title, price, image, createdAt }) {
  return (
    <div className="w-full flex items-center gap-1 border-b">
      <img
        className="w-[65px] h-[65px] flex-none object-cover rounded-md"
        src={image[0]}
        alt=""
      />
      <div className="w-full flex-auto flex-col justify-between ">
        <h4 className="text-blue-600 text-[14px]">{title?.slice(0, 50)}...</h4>
        <div className="w-full flex items-center justify-between">
          <span className="text-sm font-bold text-green-400">{price}</span>
          <span className="text-sm text-gray-400">
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RelatedItemPost;
