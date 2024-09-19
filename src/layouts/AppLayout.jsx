import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PopularCategories from "../components/PopularCategories";
import HowItWorks from "../components/HowItWorks";
import Benefit from "../components/Benefit";
import NewArrivals from "../components/NewArrivals";
import CTA from "../components/CTA";

const AppLayout = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <Hero />
      <PopularCategories />
      <HowItWorks />
      <Benefit />
      <NewArrivals />
      <CTA />
      <Footer />
    </div>
  );
};

export default AppLayout;
