import React from "react";
import Button from "./../lib/Button/index";
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <div className="flex w-full flex-col items-center py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col gap-12 px-4 md:flex-row md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-5">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-wide sm:text-5xl md:tracking-normal">
              Start Buying and Selling
            </h1>
            <p className="max-w-[600px] text-left text-xl text-gray-700 sm:text-2xl">
              Join our platform and start buying and selling items in your local
              community today.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-5">
            <Button className="h-10 bg-brand-secondary px-5 hover:bg-brand-secondary/90">
              Buy Now
            </Button>
            <Button className="h-10 px-5">Sell Your Item</Button>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-5">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-wide sm:text-5xl md:tracking-normal">
              About Us
            </h1>
            <p className="max-w-[600px] text-left text-xl text-gray-700 sm:text-2xl">
              Learn more about our mission and how we can help you buy and sell
              items in your local community.
            </p>
          </div>
          <div className="flex gap-5">
            <Button className="h-10 bg-brand-secondary px-5 hover:bg-brand-secondary/90">
              <NavLink to={`/about`}>Learn More</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
