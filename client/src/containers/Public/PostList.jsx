import React, { useEffect } from "react";
import { Button } from "../../components";
import { PostItem } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/actions/post";

function PostList() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="w-full p-2 bg-white shadow-md px-4">
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
        {posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              address={post?.address}
              attributes={post?.attributes}
              description={JSON.parse(post?.description)}
              images={JSON.parse(post?.images?.image)}
              star={post?.star}
              title={post?.title}
              user={post?.user}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
