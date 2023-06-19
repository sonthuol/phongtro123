import React, { memo } from "react";

const InputForm = ({ id, lable }) => {
  return (
    <div>
      <label htmlFor={id} className="text-xs">
        {lable}
      </label>
      <input
        type="text"
        id={id}
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
      />
    </div>
  );
};

export default memo(InputForm);
