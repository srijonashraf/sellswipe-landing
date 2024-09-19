import React from "react";
import { Search, Upload, ShoppingBasket } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="mb-6 flex flex-col items-center space-y-3">
          <p className="inline-flex rounded-md bg-white px-3 py-1 text-sm">
            How it works
          </p>
          <h1 className="text-center text-3xl font-bold tracking-wide sm:text-5xl md:tracking-normal">
            A Simple, Streamlined Process
          </h1>
          <p className="text-center text-xl text-gray-700 sm:text-2xl">
            Our app makes it easy to buy and sell items in your local community.
            Follow these simple steps to get started.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl rounded-lg border max-md:divide-y-2 md:grid-cols-3 md:divide-x-2">
          <div className="grid gap-1 p-8 md:p-10">
            <Search size={30} />
            <h3 className="whitespace-nowrap text-xl font-semibold">
              Search and browse
            </h3>
            <p>
              Use our intuitive search and browse features to find the items
              you're looking for.
            </p>
          </div>
          <div className="grid gap-1 p-8 md:p-10">
            <Upload size={30} />
            <h3 className="whitespace-nowrap text-xl font-semibold">
              List Your Items
            </h3>
            <p>
              Easily create listings for the items you want to sell, with
              options to customize your ads.
            </p>
          </div>
          <div className="grid gap-1 p-8 md:p-10">
            <ShoppingBasket size={30} />
            <h3 className="whitespace-nowrap text-xl font-semibold">
              Complete buy or sell
            </h3>
            <p>
              Securely complete your transactions through our app, with options
              for local pickup or delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
