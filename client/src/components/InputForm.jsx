import React, { memo } from "react";

const InputForm = ({
  id,
  lable,
  value,
  setValue,
  type,
  invalidFields,
  setInvalidFields,
}) => {
  const item = () => {
    return invalidFields.find((i) => i.name === type)?.name;
  };
  console.log(item);
  return (
    <div>
      <label htmlFor={id} className="text-xs">
        {lable}
      </label>
      <input
        type="text"
        id={id}
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [type]: e.target.value }))
        }
        onFocus={() =>
          setInvalidFields(
            invalidFields.filter((filed) => {
              return (
                invalidFields
                  .find((i) => i.name === type)
                  ?.name.indexOf(filed.name) <= -1
              );
            })
          )
        }
      />
      {invalidFields.length > 0 &&
        invalidFields.some((i) => i.name === type) && (
          <small className="text-red-500 italic">
            {invalidFields.find((i) => i.name === type)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(InputForm);
