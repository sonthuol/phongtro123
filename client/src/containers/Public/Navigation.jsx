import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../services/category";
import { convertToSlug } from "../../utils/constant";

const noActive =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2";

const Navigation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetCategories();
      if (response?.data.error === 0) {
        setCategories(response.data.data);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-screen flex justify-center items-center h-[40px] text-white bg-secondary1 mb-3">
      <div className="w-1100 flex h-full items-center text-sm font-medium">
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
