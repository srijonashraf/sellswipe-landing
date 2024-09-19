import React, { forwardRef } from "react";
import cn from "../../utils";

const CardBase = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex rounded-sm bg-gray-100 p-6", className)}
    {...props}
  ></div>
));

CardBase.displayName = "CardBase";

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props}>
    Hi Bagladesh
  </div>
));

CardHeader.displayName = "CardHeader";

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props}>
    Hi Bagladesh
  </div>
));

CardFooter.displayName = "CardFooter";

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props}>
    Hi Bagladesh
  </div>
));

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props}>
    Hi Bagladesh
  </div>
));

CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props}>
    Hi Bagladesh
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
