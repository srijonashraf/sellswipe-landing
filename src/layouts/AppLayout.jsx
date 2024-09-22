import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
