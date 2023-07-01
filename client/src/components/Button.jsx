import React, { memo } from "react";

const Button = ({
  text,
  small,
  textColor,
  bgColor,
  IcAfter,
  onClick,
  fullWidth,
  buttonHeader,
}) => {
  return (
    <button
      type="button"
      className={`p-2 outline-none rounded-md hover:underline ${textColor} ${bgColor} ${
        fullWidth && "w-full"
      } ${
        buttonHeader && "hidden md:inline lg:inline"
      } flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      <span className={small && "text-sm"}>{text}</span>
      <span>{IcAfter && <IcAfter />}</span>
    </button>
  );
};

export default memo(Button);
