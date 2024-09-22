import React from "react";
import { CardBase, CardContent, CardHeader, CardTitle } from "../lib/Card";
import { Button } from "../lib";
import { ArrowRight, Mail, Phone, ShoppingBag, Users, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex w-full flex-col items-center py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col gap-12 px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* About Section */}
          <div className="space-y-3">
            <h1 className="text-center text-3xl font-bold tracking-wide sm:text-5xl md:tracking-normal">
              About SellSwipe
            </h1>
            <p className="rounded-md border p-3 text-justify text-base text-gray-500 sm:text-xl">
              SellSwipe is a revolutionary platform where you can buy and sell
              almost everything! Our mission is to simplify the process of
              buying and selling items, making it accessible to everyone. Use
              our location-based search to find great deals near you or explore
              our wide range of categories.
            </p>
          </div>

          {/* Sell and Buy Cards */}
          <div className="flex gap-5">
            <CardBase className="rounded-md">
              <CardHeader>Have items to sell?</CardHeader>
              <CardContent className="space-y-3">
                Sign up for a free account to start selling your items! It takes
                less than 2 minutes to post an ad. Check out our "How to sell
                fast" guide for tips on creating great ads that generate a lot
                of buyer interest. <br /> For power sellers, consider our
                premium membership to enjoy additional benefits and make your
                ads stand out from the rest.
                <br />
                <Button className="flex self-start bg-brand-primary hover:bg-brand-primary/90">
                  Start Selling
                </Button>
              </CardContent>
            </CardBase>

            <CardBase className="rounded-md">
              <CardHeader>Looking to buy something?</CardHeader>
              <CardContent className="space-y-3">
                SellSwipe offers the widest selection of items across more than
                50 different categories. Whether you're looking for a car,
                mobile phone, house, computer, or pet, you'll find the best deal
                on SellSwipe. <br /> Our advanced search and filters make it
                super easy to find exactly what you're looking for!
                <br />
                <Button className="flex self-start bg-brand-secondary hover:bg-brand-secondary/90">
                  Browse Products
                </Button>
              </CardContent>
            </CardBase>
          </div>

          {/* Why Choose SellSwipe Section */}
          <div className="space-y-3">
            <h2 className="text-left text-2xl font-bold tracking-wide md:tracking-normal">
              Why Choose SellSwipe?
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Responsive grid */}
              {/* Card 1: Easy Transactions */}
              <CardBase className="rounded-md text-center">
                <CardHeader className="flex flex-col items-center justify-center space-y-2">
                  <ShoppingBag size={30} className="text-brand-primary" />
                  <span className="text-lg font-semibold">
                    Easy Transactions
                  </span>
                </CardHeader>
                <CardContent>
                  Buy and sell with just a few swipes. Our intuitive interface
                  makes transactions a breeze.
                </CardContent>
              </CardBase>
              {/* Card 2: Community-Driven */}
              <CardBase className="rounded-md text-center">
                <CardHeader className="flex flex-col items-center justify-center space-y-2">
                  <Users size={30} className="text-brand-primary" />
                  <span className="text-lg font-semibold">
                    Community-Driven
                  </span>
                </CardHeader>
                <CardContent>
                  Join a thriving community of buyers and sellers. Build trust
                  through ratings and reviews.
                </CardContent>
              </CardBase>
              {/* Card 3: Lightning Fast */}
              <CardBase className="rounded-md text-center">
                <CardHeader className="flex flex-col items-center justify-center space-y-2">
                  <Zap size={30} className="text-brand-primary" />
                  <span className="text-lg font-semibold">Lightning Fast</span>
                </CardHeader>
                <CardContent>
                  Find what you need quickly with our powerful search and
                  filtering options.
                </CardContent>
              </CardBase>
            </div>
          </div>
          {/* Questions? Get in touch! */}
          <div>
            <CardBase className="rounded-md">
              <CardHeader>
                <CardTitle>Questions? Get in touch!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-base">
                <p>We're here to help every day from 9:00 AM to 9:00 PM</p>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2">
                    <span>
                      <Phone size={20} />
                    </span>
                    <a
                      href="tel:09000000000"
                      className="font-semibold hover:underline"
                    >
                      09000000000
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>
                      <Mail size={20} />
                    </span>
                    <a
                      href="mailto:support@sellswipe.com"
                      className="font-semibold hover:underline"
                    >
                      {" "}
                      support@sellswipe.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </CardBase>
          </div>
          <div className="flex justify-center">
            <NavLink to={`/`}>
              <Button className="group h-12 bg-brand-secondary px-10 text-xl font-bold hover:bg-brand-secondary/90">
                Start Swipping Today{" "}
                <span>
                  <ArrowRight
                    className="translate-x-0 transform transition duration-300 ease-linear group-hover:translate-x-1"
                    size={30}
                  />
                </span>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
