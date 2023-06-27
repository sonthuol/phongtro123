import React, { useEffect } from "react";
import { text } from "../../utils/constant";
import { ItemSidebar, Pagination, Province } from "../../components";
import { PostList } from "./index";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";

function Homepage() {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(action.getCategories());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="mt-2">
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <span className="text-sm text-gray-700">{text.HOMT_DESCRIPTION}</span>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-full lg:w-[70%]">
          <PostList page={params?.get("page")} />
          <Pagination page={params?.get("page")} />
        </div>
        <div className="hidden lg:w-[30%] border border-gray-600 lg:flex lg:flex-col justify-start items-center gap-4">
          <ItemSidebar title="Danh mục cho thuê" content={categories} />
          <ItemSidebar title="Xem theo giá" />
          <ItemSidebar title="Xem theo diện tích" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
