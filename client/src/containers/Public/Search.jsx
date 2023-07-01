import React from "react";
import { SearchItem } from "../../components/index";
import icons from "../../utils/icons";

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
  return (
    <div className="p-[10px] w-full lg:w-4/5 bg-[#febb02] rounded-lg flex flex-col lg:flex-row md:flex-row items-center justify-around gap-2">
      <SearchItem
        text="Phòng trọ, nhà trọ"
        iconStart={<TbBuilding />}
        iconEnd={<LuDelete color="black" fontWeight="blod" fontSize="18" />}
        fontWeight
      />
      <SearchItem
        text="Toàn quốc"
        iconStart={<HiOutlineLocationMarker />}
        iconEnd={<BsChevronRight color="rgb(156, 163,175)" />}
      />
      <SearchItem
        text="Chọn giá"
        iconStart={<TbReportMoney />}
        iconEnd={<BsChevronRight color="rgb(156, 163,175)" />}
      />
      <SearchItem
        text="Chọn diện tích"
        iconStart={<RiCrop2Line />}
        iconEnd={<BsChevronRight color="rgb(156, 163,175)" />}
      />
      <button className="flex items-center justify-center gap-1 py-2 px-4 w-full rounded-md text-[13px] bg-secondary1 text-white">
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  );
}

export default Search;
