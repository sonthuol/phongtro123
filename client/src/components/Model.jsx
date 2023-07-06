import React from "react";
import icons from "../utils/icons";

const { BiArrowBack } = icons;

const Model = ({ setIsShowModal, content, name, title }) => {
  content = content?.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.code === value.code && t.value === value.value)
  );
  return (
    <div
      onClick={() => setIsShowModal(false)}
      className="fixed top-0 bottom-0 left-0 right-0 bg-gray-400 z-10 bg-overlay-40 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowModal(true);
        }}
        className="w-1/3 bg-white rounded-md"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-100">
          <span
            className="w-[5%] cursor-pointer "
            onClick={(e) => {
              e.stopPropagation();
              setIsShowModal(false);
            }}
          >
            <BiArrowBack size={24} />
          </span>
          <span className="w-[95%] text-center">{title}</span>
        </div>
        <div className="p-4 flex flex-col">
          {content
            ?.filter((item, index) => content?.indexOf(item) === index)
            ?.map((item) => {
              return (
                <span
                  key={item.code}
                  className="py-1 flex items-center gap-2 border-b border-gray-100"
                >
                  <input
                    type="radio"
                    name={name}
                    id={item.code}
                    value={item.code}
                  />
                  <label
                    className="w-full hover:text-blue-600"
                    htmlFor={item.code}
                  >
                    {item.value}
                  </label>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Model;
