import React from "react";
import RelatedItemPost from "./RelatedItemPost";
import { useSelector } from "react-redux";

const RelatedPost = () => {
  const { newPosts } = useSelector((state) => state.app);

  return (
    <div className="p-4 rounded-md bg-white w-full">
      <h4 className="text-xl font-semibold mb-4">Tin mới đăng</h4>
      <div className="w-full flex flex-col gap-3">
        {newPosts.map((item) => {
          return (
            <RelatedItemPost
              key={item?.id}
              image={JSON.parse(item?.images?.image)}
              title={item?.title}
              price={item?.attributes?.price}
              createdAt={item?.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPost;
