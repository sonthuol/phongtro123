import React, { memo, useEffect, useState } from "react";
import icons from "../utils/icons";
import { getNumberAcreages, getNumberPrices } from "../utils/Common/getNumbers";
import { getAcreages, getPrices } from "../utils/Common/getCodes";

const { BiArrowBack } = icons;

const Model = ({
  setIsShowModal,
  content,
  name,
  handleSubmit,
  queries,
  arrMaxMin,
}) => {
  content = content?.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.code === value.code && t.value === value.value)
  );

  const [persentStart, setPersentStart] = useState(
    name === "price"
      ? arrMaxMin?.price?.[0]
      : name === "acreage"
      ? arrMaxMin?.acreage?.[0]
      : 0
  );
  const [persentEnd, setPersentEnd] = useState(
    name === "price"
      ? arrMaxMin?.price?.[1]
      : name === "acreage"
      ? arrMaxMin?.acreage?.[1]
      : 100
  );

  const [codeActive, setCodeActive] = useState("");

  useEffect(() => {
    const activeTrackEl = document.getElementById("track-active");
    if (persentEnd === undefined || persentStart === undefined) {
      setPersentStart(0);
      setPersentEnd(100);
    }
    if (activeTrackEl) {
      if (persentEnd <= persentStart) {
        activeTrackEl.style.left = `${persentEnd}%`;
        activeTrackEl.style.right = `${100 - persentStart}%`;
      } else {
        activeTrackEl.style.left = `${persentStart}%`;
        activeTrackEl.style.right = `${100 - persentEnd}%`;
      }
    }
  }, [persentEnd, persentStart]);

  const handleTrack = (e) => {
    e.stopPropagation();
    const trackEl = document.getElementById("track");
    const trackReact = trackEl.getBoundingClientRect();
    let percent = Math.round(
      ((e.clientX - trackReact.left) * 100) / trackReact.width
    );
    if (Math.abs(percent - persentStart) <= Math.abs(percent - persentEnd)) {
      setPersentStart(percent);
    } else {
      setPersentEnd(percent);
    }
  };

  const convert100ToTarget = (percent) => {
    if (name === "price")
      return (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10;
    if (name === "acreage") return Math.ceil(Math.round(percent * 0.9) / 5) * 5;
  };

  const convertTargetTo100 = (price) => {
    let target = name === "price" ? 15 : name === "acreage" ? 90 : 1;
    return Math.floor((price / target) * 100);
  };

  const handlePrices = (code, value) => {
    setCodeActive(code);
    let arrMaxMin =
      name === "price" ? getNumberPrices(value) : getNumberAcreages(value);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPersentStart(0);
        setPersentEnd(convertTargetTo100(1));
      }
      if (arrMaxMin[0] === 20) {
        setPersentStart(0);
        setPersentEnd(convertTargetTo100(20));
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPersentStart(100);
        setPersentEnd(100);
      }
    }

    if (arrMaxMin.length === 2) {
      setPersentStart(convertTargetTo100(arrMaxMin[0]));
      setPersentEnd(convertTargetTo100(arrMaxMin[1]));
    }
  };

  const handleBeforSubmit = (e) => {
    const gaps =
      name === "price"
        ? getPrices(
            [convert100ToTarget(persentStart), convert100ToTarget(persentEnd)],
            content
          )
        : name === "acreage"
        ? getAcreages(
            [convert100ToTarget(persentStart), convert100ToTarget(persentEnd)],
            content
          )
        : [];
    handleSubmit(
      e,
      {
        [`${name}Code`]: gaps?.map((item) => item.code),
        [name]:
          +convert100ToTarget(persentStart) === 0
            ? `Dưới ${convert100ToTarget(persentEnd)} triệu`
            : +convert100ToTarget(persentStart) !==
              convert100ToTarget(persentEnd)
            ? `Từ ${convert100ToTarget(persentStart)} đến ${convert100ToTarget(
                persentEnd
              )} triệu`
            : `Trên ${convert100ToTarget(persentStart)} triệu`,
      },
      { [name]: [persentStart, persentEnd] }
    );
  };

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
        className="w-1/2 bg-white rounded-md"
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
        </div>
        {(name === "category" || name === "province") && (
          <div className="p-12 flex flex-col">
            {content
              ?.filter((item, index) => content?.indexOf(item) === index)
              ?.map((item) => {
                return (
                  <span
                    key={item.code}
                    className="py-1 flex items-center gap-3 border-b border-gray-100"
                  >
                    <input
                      type="radio"
                      name={name}
                      id={item.code}
                      value={item.code}
                      defaultChecked={
                        item.code === queries[`${name}Code`] ? true : false
                      }
                      onClick={(e) =>
                        handleSubmit(e, {
                          [name]: item.value,
                          [`${name}Code`]: item.code,
                        })
                      }
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
        {(name === "price" || name === "acreage") && (
          <div className="p-12">
            <div className="flex flex-col items-center justify-center relative">
              <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-500 mt-1">
                {persentStart === 100 && persentEnd === 100
                  ? `Trên ${
                      persentEnd >= persentStart
                        ? convert100ToTarget(persentEnd)
                        : convert100ToTarget(persentStart)
                    } ${
                      name === "price"
                        ? " triệu"
                        : name === "acreage"
                        ? "m2"
                        : ""
                    }`
                  : `${name === "price" ? "Từ" : ""} ${
                      persentStart <= persentEnd
                        ? convert100ToTarget(persentStart)
                        : convert100ToTarget(persentEnd)
                    }
                -
                ${
                  persentEnd >= persentStart
                    ? convert100ToTarget(persentEnd)
                    : convert100ToTarget(persentStart)
                } ${
                      name === "price"
                        ? " triệu"
                        : name === "acreage"
                        ? "m2"
                        : ""
                    }`}
              </div>
              <div
                onClick={handleTrack}
                id="track"
                className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-md"
              ></div>
              <div
                onClick={handleTrack}
                id="track-active"
                className="slider-track:active h-[5px] absolute top-0 bottom-0 bg-orange-500 rounded-md"
              ></div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={persentStart || 0}
                onChange={(e) => {
                  setPersentStart(+e.target.value);
                  codeActive && setCodeActive("");
                }}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
              />
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={persentEnd || 100}
                onChange={(e) => {
                  setPersentEnd(+e.target.value);
                  codeActive && setCodeActive("");
                }}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
              />
              <div className="absolute z-30 top-6 left-0 right-0 flex items-center justify-between">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setPersentStart(0);
                  }}
                  className="cursor-pointer"
                >
                  0
                </span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setPersentEnd(100);
                  }}
                  className="cursor-pointer"
                >
                  {name === "price"
                    ? "15 triệu +"
                    : name === "acreage"
                    ? 90
                    : ""}
                </span>
              </div>
            </div>
            <div className="mt-16 ml-[-30px]">Chọn nhanh:</div>
            <div className="flex gap-3 items-center flex-wrap w-full mt-2">
              {content?.map((item) => {
                return (
                  <button
                    key={item.code}
                    onClick={() => handlePrices(item.code, item.value)}
                    className={`text-center px-5 py-2 rounded-md w-[200px] cursor-pointer text-sm  ${
                      item.code === codeActive
                        ? "bg-blue-500 text-white"
                        : " bg-gray-200"
                    }`}
                  >
                    {item.value}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {(name === "price" || name === "acreage") && (
          <button
            className="w-full bg-[#febb02] py-2 font-medium uppercase rounded-bl-md rounded-br-md"
            onClick={handleBeforSubmit}
          >
            Áp dụng
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(Model);
