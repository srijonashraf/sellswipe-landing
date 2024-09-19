import React from "react";
import Button from "../lib/Button";

const Hero = () => {
  return (
    <div className="flex-1">
      <section className="w-full bg-gradient-to-r from-slate-700 to-slate-900 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid place-items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
            <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-5xl">
              Buy and Sell with Ease
            </h1>
            <p className="text-2xl text-white">
              Our app makes it simple to buy and sell items in your local
              community. Find great deals or list your own items in just a few
              clicks.
            </p>
            <div className="flex gap-2">
              <Button className="bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
              <Button className="bg-white text-black hover:bg-white/90">
                Learn More
              </Button>
            </div>
          </div>
          <img src="/favicon.png" alt="" className="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
