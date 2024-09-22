import React from "react";
import { HandCoins, MapPinned, Rainbow } from "lucide-react";

const Benefit = () => {
  return (
    <div className="flex w-full flex-col items-center py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="rounded-md bg-gray-100 px-3 py-1 text-sm">Benefits</p>
          <h1 className="text-center text-3xl font-bold tracking-wide sm:text-5xl md:tracking-normal">
            Why Choose Our App?
          </h1>
          <p className="text-center text-xl text-gray-700 sm:text-2xl">
            Our app offers a range of benefits to make your buying and selling
            experience seamless and enjoyable.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl rounded-lg border max-md:divide-y-2 md:grid-cols-3 md:divide-x-2">
          <div className="grid gap-1 p-8 md:p-10">
            <Rainbow size={30} className="text-brand-primary" />
            <h3 className="whitespace-nowrap text-xl font-semibold">
              Convenience
            </h3>
            <p>
              Buy and sell items with just a few taps on your phone, no matter
              where you are.
            </p>
          </div>
          <div className="grid gap-1 p-8 md:p-10">
            <MapPinned size={30} className="text-brand-primary" />
            <h3 className="whitespace-nowrap text-xl font-semibold">
              Local Community
            </h3>
            <p>
              Connect with buyers and sellers in your local area for faster,
              more reliable transactions.
            </p>
          </div>
          <div className="grid gap-1 p-8 md:p-10">
            <HandCoins size={30} className="text-brand-primary" />
            <h3 className="whitespace-nowrap text-xl font-semibold">Savings</h3>
            <p>
              Find great deals on items you need, and earn extra cash by selling
              the things you no longer use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
