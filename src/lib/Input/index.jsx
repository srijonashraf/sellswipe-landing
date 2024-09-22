import React, { forwardRef } from "react";
import cn from "../../utils";

const Input = forwardRef(
  (
    {
      className,
      label,
      type = "text",
      placeholder = "This is a placeholder",
      value,
      disabled = false,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex w-full flex-col">
        {label && <label className="mb-1 text-sm font-medium">{label}</label>}
        <input
          ref={ref}
          type={type}
          className={cn(
            "flex h-10 flex-grow rounded-md border p-3 outline-none",
            disabled && "cursor-not-allowed opacity-50",
            className
          )}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
