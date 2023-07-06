import React, { useEffect, useState } from "react";
import icons from "../utils/icons";

const { BiArrowBack } = icons;

const Model = ({ setIsShowModal, content, name, title }) => {
  content = content?.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.code === value.code && t.value === value.value)
  );
  const [persentStart, setPersentStart] = useState(0);
  const [perSentEnd, setPersentEnd] = useState(100);

  useEffect(() => {
    const activeTrackEl = document.getElementById("track-active");
    activeTrackEl.style.left = `${persentStart}%`;
  }, [persentStart]);

  useEffect(() => {
    const activeTrackEl = document.getElementById("track-active");
    activeTrackEl.style.right = `${100 - perSentEnd}%`;
  }, [perSentEnd]);

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
        {(name === "categories" || name === "provinces") && (
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
        )}
        {(name === "prices" || name === "acreages") && (
          <div className="p-12">
            <div className="flex flex-col items-center justify-center relative">
              <div className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-md"></div>
              <div
                id="track-active"
                className="slider-track:active h-[5px] absolute top-0 bottom-0 bg-orange-500 rounded-md"
              ></div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={persentStart}
                onChange={(e) => setPersentStart(e.target.value)}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
              />
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={perSentEnd}
                onChange={(e) => setPersentEnd(e.target.value)}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Model;
