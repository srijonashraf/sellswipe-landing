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
        "inline-flex h-9 w-auto flex-shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-brand-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary focus-visible:ring-offset-1 disabled:pointer-events-none",
        disabled && "cursor-not-allowed opacity-50",
        loading && "cursor-not-allowed opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {loading && <Spin className="mr-2 h-4 text-white" />}
    </button>
  );
};

export default Button;
