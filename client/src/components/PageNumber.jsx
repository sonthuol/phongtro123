import React, { memo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function PageNumber({ page, currentPage, isNotClick, setCurrentPage, icon }) {
  const navigage = useNavigate();

  const notActive = `w-[46px] h-[48px] flex items-center justify-center bg-white hover:bg-gray-300 rounded-md ${
    isNotClick ? "" : "cursor-pointer"
  } `;
  const active =
    "w-[46px] h-[48px] flex items-center justify-center bg-[#E13427] text-white rounded-md";

  const handleChangePage = () => {
    setCurrentPage(+page);
    navigage({
      pathname: "/",
      search: createSearchParams({
        page,
      }).toString(),
    });
  };

  return (
    <div
      className={+page === +currentPage ? active : notActive}
      onClick={isNotClick ? () => {} : handleChangePage}
    >
      {icon || page}
    </div>
  );
}

export default memo(PageNumber);
