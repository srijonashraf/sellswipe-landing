import React from "react";
import AppLayout from "../layouts/AppLayout";
import Hero from "../components/Hero";
import PopularCategories from "../components/PopularCategories";
import HowItWorks from "../components/HowItWorks";
import Benefit from "../components/Benefit";
import NewArrivals from "../components/NewArrivals";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <PopularCategories />
      <HowItWorks />
      <Benefit />
      <NewArrivals />
      <CTA />
    </AppLayout>
  );
};

export default Home;
