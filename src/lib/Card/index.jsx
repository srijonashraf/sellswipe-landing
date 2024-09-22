import React, { forwardRef } from "react";
import cn from "../../utils";

const CardBase = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full flex-col space-y-3 rounded-sm bg-gray-100 p-6",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

CardBase.displayName = "CardBase";

const CardHeader = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full flex-col space-y-1.5 text-2xl font-semibold",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = "CardHeader";

const CardFooter = forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex w-full", className)} {...props}>
    {children}
  </div>
));

CardFooter.displayName = "CardFooter";

const CardTitle = forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex w-full font-bold", className)} {...props}>
    {children}
  </div>
));

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm text-gray-500", className)} {...props}>
    {children}
  </div>
));

CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex w-full flex-col", className)} {...props}>
    {children}
  </div>
));

CardContent.displayName = "CardContent";

export {
  CardBase,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
