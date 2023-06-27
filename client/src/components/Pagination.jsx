import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PageNumber } from "./index";
import icons from "../utils/icons";

const { GrLinkNext, GrLinkPrevious } = icons;

const Pagination = ({ page }) => {
  const { count, posts } = useSelector((state) => state.posts);
  const [pageArray, setPageArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(page <= 0 && 1);
  const [isHidentEnd, setIsHidentEnd] = useState(false);
  const [isHidentStart, setIsHidentStart] = useState(false);

  useEffect(() => {
    let maxPage = Math.floor(count / posts.length);
    let start =
      +currentPage - 3 > maxPage
        ? maxPage
        : +currentPage - 3 > 0
        ? +currentPage - 3
        : 1;
    let end = +currentPage + 3 > maxPage ? maxPage : +currentPage + 3;
    let temp = [];
    for (let i = start; i <= end; i++) {
      temp.push(i);
    }
    setPageArray(temp);
    currentPage + 3 >= maxPage ? setIsHidentEnd(true) : setIsHidentEnd(false);
    currentPage - 3 <= 1 ? setIsHidentStart(true) : setIsHidentStart(false);
  }, [count, posts, currentPage]);

  return (
    <div className="flex items-center justify-center gap-2 py-5">
      {!isHidentStart && (
        <>
          <PageNumber
            icon={<GrLinkPrevious />}
            page={1}
            setCurrentPage={setCurrentPage}
          />
          <PageNumber page="..." isNotClick />
        </>
      )}
      {pageArray.length > 0 &&
        pageArray.map((pageNumber) => {
          return (
            <PageNumber
              key={pageNumber}
              page={pageNumber}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          );
        })}
      {!isHidentEnd && (
        <>
          <PageNumber page="..." isNotClick />
          <PageNumber
            icon={<GrLinkNext />}
            page={Math.floor(count / posts.length)}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Pagination;
