import React, { useState } from "react";
import { Button, Input } from "../lib";
import { Search } from "lucide-react";

const Hero2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="w-full bg-gray-50 py-12 shadow-sm md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl/none">
              Discover. Buy. Sell.{" "}
              <span className="text-brand-primary">Repeat!</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Your one-stop marketplace for amazing deals and hidden treasures.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                className="focus-visible:ring-2 focus-visible:ring-brand-primary"
                placeholder="Search for items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button className="h-10">
                <Search size={20} />
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
