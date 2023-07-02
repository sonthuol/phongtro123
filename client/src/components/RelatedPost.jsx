import React, { useEffect } from "react";
import RelatedItemPost from "./RelatedItemPost";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const RelatedPost = () => {
  const { newPosts } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getNewPosts());
  }, [dispatch]);

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
