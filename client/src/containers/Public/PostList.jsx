import React from "react";
import { Button } from "../../components";
import { PostItem } from "./index";

function PostList() {
  return (
    <div className="w-full p-2 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-xl">Danh sách tin đăng</h4>
        <span className="text-sm text-gray-700">
          Cập nhật: 12:05 24/06/2023
        </span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span className="text-sm">Sắp xếp: </span>
        <Button bgColor="bg-gray-200" text="Mặc định" small />
        <Button bgColor="bg-gray-200" text="Mới nhất" small />
      </div>
      <div className="flex flex-col items-center gap-1">
        <PostItem />
        {/* <PostItem />
        <PostItem /> */}
      </div>
    </div>
  );
}

export default PostList;
