import React, { memo } from "react";

const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) => {
  return (
    <button
      type="button"
      className={`p-2 outline-none rounded-md hover:underline ${textColor} ${bgColor} ${
        fullWidth && "w-full"
      } flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span>{IcAfter && <IcAfter />}</span>
    </button>
  );
};

export default memo(Button);
