import React, { memo } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function PageNumber({ page, currentPage, isNotClick, setCurrentPage, icon }) {
  const notActive = `w-[46px] h-[48px] flex items-center justify-center bg-white hover:bg-gray-300 rounded-md ${
    isNotClick ? "" : "cursor-pointer"
  } `;
  const active =
    "w-[46px] h-[48px] flex items-center justify-center bg-[#E13427] text-white rounded-md";

  const navigage = useNavigate();

  const [paramsSearch] = useSearchParams();
  let entries = paramsSearch.entries();
  const location = useLocation();

  const addpend = (entries) => {
    let params = [];
    paramsSearch.append("page", +page);
    for (let entry of entries) {
      params.push(entry);
    }
    let a = {};
    params?.map((i) => (a = { ...a, [i[0]]: i[1] }));
    return a;
  };

  const handleChangePage = () => {
    setCurrentPage(+page);
    navigage({
      pathname: location.pathname,
      search: createSearchParams(addpend(entries)).toString(),
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
