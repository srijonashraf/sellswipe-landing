import React from "react";
import { ShoppingBasket } from "lucide-react";
import Button from "../lib/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <NavLink to={`/`} className="inline-flex items-baseline gap-1.5">
          {/* <img src="/favicon.png" alt="" className="h-6 w-6" /> */}
          <ShoppingBasket className="self-center text-brand-primary" />
          <span className="text-xl font-bold text-brand-secondary">
            SellSwipe
          </span>
        </NavLink>
        <div className="flex gap-3">
          <Button>Post Ad</Button>
          <Button className="border bg-white text-black shadow-none hover:bg-brand-primary hover:text-white">
            Buy Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
