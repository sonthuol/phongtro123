import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { convertToSlug } from "../../utils/Common/convertVietNameseToSlug";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";

const noActive =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2";

const Navigation = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(action.getCategories());
  }, [dispatch]);

  return (
    <div className="hidden w-screen lg:flex md:flex justify-center items-center h-[40px] text-white bg-secondary1 mb-3">
      <div className="w-4/5 flex h-full items-center text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : noActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex justify-center items-center"
              >
                <NavLink
                  to={convertToSlug(item.value)}
                  className={({ isActive }) => (isActive ? active : noActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
