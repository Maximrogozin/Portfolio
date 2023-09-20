import React from "react";

const TextField = ({ name, type = "text", register, rules, style, error }) => {
  return (
    <>
      <input {...register(name, rules)} className={style} type={type} />
      {error && (
        <span className="text-[#DE6636] text-xs pl-2 pt-0.5">
          {error.message}
        </span>
      )}
    </>
  );
};

export default TextField;
