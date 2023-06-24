import React, { memo } from "react";
import icons from "../../utils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/16/ee3772d09e054f5b1614_1686900370.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/16/4b728a98664db713ee5c_1686900369.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/16/5d298e2162f4b3aaeae5_1686900369.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/16/86b658a1b474652a3c65_1686900369.jpg",
];

const { GrStar, RiHeartFill, RiHeartLine, BsFillBookmarkStarFill } = icons;

function PostItem() {
  return (
    <div className="w-full flex border-t p-2 border-red-500">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center">
        <img
          src={images[0]}
          alt="images"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[1]}
          alt="images"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[2]}
          alt="images"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[3]}
          alt="images"
          className="w-[140px] h-[120px] object-cover"
        />
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-red-600 text-[18px] font-semibold">
            <GrStar size="18" color="orange" className="inline-block" />
            <GrStar size="18" color="orange" className="inline-block" />
            <GrStar size="18" color="orange" className="inline-block" />
            <GrStar size="18" color="orange" className="inline-block" />
            <GrStar size="18" color="orange" className="inline-block" />
            <span>
              Tổng hợp ký túc xá - sleepbox bình thạnh giá rẻ gần các trường Đại
              học lớn
            </span>
          </div>
          <div>
            <BsFillBookmarkStarFill size="20" color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <span className="text-green-600 font-bold">1.8 triệu/tháng</span>
          <span>20m²</span>
          <span>Quận Tân Phú, Hồ Chí Minh</span>
        </div>
        <span className="text-gray-500">
          Giá Phòng từ 1800k (hiện vẫn còn phòng 1800k ) đến xem đảm bảo ưng ý,
          cam kết hình đúng với thực tếPhòng mới sửa chữa 7/2022 , địa chỉ 48/13
          Lương…
        </span>
        <div className="my-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-[30px] h-[30px]"
              src="https://fintech.ptit.edu.vn/assets/images/no-avatar.png"
              alt=""
            />
            <p>Sơn Thươl</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white p-1 text-sm rounded-md">
              Gọi 0938864405
            </button>
            <button className="border border-blue-500 p-1 rounded-md text-sm">
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PostItem);
