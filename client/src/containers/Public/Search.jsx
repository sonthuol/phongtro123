import React, { useCallback, useState } from "react";
import { Model, SearchItem } from "../../components";
import icons from "../../utils/icons";
import { useSelector } from "react-redux";

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  TbBuilding,
  LuDelete,
  FiSearch,
} = icons;

function Search() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState(false);
  const [name, setName] = useState();
  const [queries, setQueries] = useState({});
  const [arrMaxMin, setArrMinMax] = useState({});

  const { categories, provinces, prices, acreages } = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content, name, title) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  const handleSubmit = useCallback((e, query, arrMaxMin) => {
    e.stopPropagation();
    setQueries((prev) => ({ ...prev, ...query }));
    arrMaxMin && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    setIsShowModal(false);
  }, []);

  return (
    <>
      <div className="p-[10px] w-full lg:w-4/5 bg-[#febb02] rounded-lg flex flex-col lg:flex-row md:flex-row items-center justify-around gap-2">
        <span
          className="flex-1 cursor-pointer"
          onClick={() =>
            handleShowModal(categories, "category", "Phòng trọ, nhà trọ")
          }
        >
          <SearchItem
            text={queries.category}
            defaultText="Phòng trọ, nhà trọ"
            iconStart={<TbBuilding />}
            iconEnd={<LuDelete color="black" fontWeight="blod" fontSize="18" />}
            fontWeight
          />
        </span>

        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal(provinces, "province")}
        >
          <SearchItem
            text={queries.province}
            defaultText="Toàn quốc"
            iconStart={<HiOutlineLocationMarker />}
            iconEnd={<BsChevronRight color="rgb(156, 163,175)" />}
          />
        </span>

        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal(prices, "price")}
        >
          <SearchItem
            text={queries.price}
            defaultText="Chọn giá"
            iconStart={<TbReportMoney />}
            iconEnd={<BsChevronRight color="rgb(156, 163,175)" />}
          />
        </span>
        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal(acreages, "acreage")}
        >
          <SearchItem
            text={queries.acreage}
            defaultText="Chọn diện tích"
            iconStart={<RiCrop2Line />}
            iconEnd={<BsChevronRight color="rgb(156, 163,175)" />}
          />
        </span>
        <button className="flex w-fit items-center justify-center gap-1 py-2 px-4 rounded-md text-[13px] bg-secondary1 text-white">
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && (
        <Model
          setIsShowModal={setIsShowModal}
          content={content}
          name={name}
          handleSubmit={handleSubmit}
          queries={queries}
          arrMaxMin={arrMaxMin}
        />
      )}
    </>
  );
}

export default Search;
