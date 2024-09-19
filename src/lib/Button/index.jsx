import React from "react";
import cn from "./../../utils/index";
import Spin from "../Spin";

const Button = ({
  className,
  children = "Button",
  type = "button",
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-brand-primary hover:bg-brand-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow transition-all focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none flex-shrink-0",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {loading && <Spin className="h-4 text-white" />}
    </button>
  );
};

export default Button;
