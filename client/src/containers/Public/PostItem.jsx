import React, { memo, useState } from "react";
import icons from "../../utils/icons";

const { GrStar, RiHeartFill, RiHeartLine, BsFillBookmarkStarFill } = icons;

const indexs = [1, 2, 3, 4];

function PostItem({
  address,
  attributes,
  description,
  images,
  star,
  title,
  user,
}) {
  const [isHoverHeart, setIsOverHeart] = useState(false);
  images = images.filter(
    (image) => image?.includes("jpg") || image?.includes("png")
  );

  address = address.split(",");
  address = `${address[address.length - 2]}, ${address[address.length - 1]}`;

  const handleStar = (star) => {
    let stars = [];
    for (let index = 1; index <= +star; index++) {
      stars.push(<GrStar size="18" color="orange" className="inline-block" />);
    }
    return stars;
  };
  return (
    <div className="w-full flex border-t border-red-500 py-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        {images.length >= 0 &&
          images
            .filter((image, index) => indexs.some((i) => i === index))
            ?.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt="images"
                  className="w-[140px] h-[120px] object-cover"
                />
              );
            })}
        <span className="bg-overlay-70 px-2 py-1 rounded-md text-sm text-white absolute left-1 bottom-4">
          {images.length} ảnh
        </span>
        <span
          className="text-white absolute right-8 bottom-4"
          onMouseEnter={() => setIsOverHeart(true)}
          onMouseLeave={() => setIsOverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartFill color="#f83759" size={24} />
          ) : (
            <RiHeartLine size={24} />
          )}
        </span>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-red-600 text-[18px] font-semibold">
            {handleStar(+star).map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
            <span>{title}</span>
          </div>
          <div>
            <BsFillBookmarkStarFill size="20" color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <span className="text-green-600 font-bold">{attributes?.price}</span>
          <span>{attributes?.acreage}</span>
          <span>{address}</span>
        </div>
        <p className="text-sm text-gray-800 float-right">
          {attributes?.published}
        </p>
        <p className="text-gray-500 text-sm w-full h-[100px] text-ellipsis overflow-hidden text-justify">
          {description}
        </p>
        <div className="my-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-[30px] h-[30px]"
              src="https://fintech.ptit.edu.vn/assets/images/no-avatar.png"
              alt=""
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white p-1 text-sm rounded-md">
              Gọi {user?.phone}
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
