import React from "react";
import { ShoppingBasket } from "lucide-react";

const Footer = () => {
  const images = [
    "/socials/facebook.png",
    "/socials/whatsapp.png",
    "/socials/linkedin.png",
    "/socials/telegram.png",
  ];
  return (
    <div className="flex w-full flex-col items-center bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col flex-wrap justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-start gap-3">
            {/* Social Links */}
            <div>
              <a href="#" className="inline-flex items-baseline gap-1.5">
                <ShoppingBasket
                  size={30}
                  className="self-center text-brand-primary"
                />
                <span className="text-2xl font-bold text-brand-secondary">
                  SellSwipe
                </span>
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-3">
                {images?.map((image, idx) => (
                  <li
                    key={idx.toString()}
                    className="cursor-pointer transition duration-300 ease-in-out hover:brightness-90"
                  >
                    <img
                      src={image}
                      alt={`Social icon ${idx + 1}`}
                      className="h-8 w-8 rounded-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            {/* Quick Links */}

            <h1 className="text-lg font-bold">Quick Links</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3">
            {/* Information */}
            <h1 className="text-lg font-bold">Information</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3">
            {/* Support */}
            <h1 className="text-lg font-bold">Support</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
