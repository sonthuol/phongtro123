import React, { memo } from "react";

const InputForm = ({
  id,
  lable,
  value,
  setValue,
  type,
  keyPayload,
  invalidFields,
  setInvalidFields,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-xs">
        {lable}
      </label>
      <input
        type={type || "text"}
        id={id}
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
        }
        onFocus={() => setInvalidFields([])}
      />
      {invalidFields.length > 0 &&
        invalidFields.some((i) => i.name === keyPayload) && (
          <small className="text-red-500 italic">
            {invalidFields.find((i) => i.name === keyPayload)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(InputForm);
