import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  (
    { type, placeholder, className, labelClass, register, name, error },
    ref
  ) => {
    return (
      <div className="w-full border-black flex flex-col gap-1">
        <span htmlFor={name} className={clsx("text-white", labelClass)}></span>

        <div>
          <input
            type={type || "text"}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={clsx(
              "border-gray-800 bg-transparent px-3 py-2.5 2xl:py-3 border text-sm btext:white placeholder-black  dark:text-black outline-none  focus:ring-2 focus:text-black ",
              className
            )}
            {...register}
            aria-invalid={error ? "true" : "false"}
          />
        </div>
        {error && (
          <span className="text-xs text-[#f64949fe] mt-0.5 ">{error}</span>
        )}
      </div>
    );
  }
);

export default Textbox;
