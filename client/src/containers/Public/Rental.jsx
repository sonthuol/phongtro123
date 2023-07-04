import React, { useEffect, useState } from "react";
import {
  ItemSidebar,
  Pagination,
  Province,
  RelatedPost,
} from "../../components";
import { PostList } from "./index";
import { useLocation, useSearchParams } from "react-router-dom";
import { convertToSlug } from "../../utils/Common/convertVietNameseToSlug";
import { useSelector } from "react-redux";

const RentalApartment = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const { prices, acreages, categories } = useSelector((state) => state.app);

  const [categoryCode, setCategoryCode] = useState();
  const [categoryCurrent, setCategoryCurrent] = useState([]);

  useEffect(() => {
    const category = categories.find(
      (item) => `/${convertToSlug(item.value)}` === location.pathname
    );
    setCategoryCurrent(category);
    if (category) {
      setCategoryCode(category.code);
    }
  }, [categories, location]);

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="mt-2">
        <h1 className="text-[28px] font-bold">{categoryCurrent?.header}</h1>
        <span className="text-sm text-gray-700">
          {categoryCurrent?.subheader}
        </span>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-full lg:w-[70%]">
          <PostList categoryCode={categoryCode} />
          <Pagination />
        </div>
        <div className="hidden lg:w-[30%] lg:flex lg:flex-col justify-start items-center gap-4">
          <ItemSidebar
            title="Xem theo giá"
            type="priceCode"
            content={prices}
            isDouble
            currentCode={params?.get("priceCode")}
          />
          <ItemSidebar
            title="Xem theo diện tích"
            type="acreageCode"
            content={acreages}
            isDouble
            currentCode={params?.get("acreageCode")}
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default RentalApartment;
