import React from "react";
import Button from "../lib/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewArrivals = () => {
  const generateImage = () => {
    return `https://picsum.photos/200/300?random=${Math.random()}`;
  };
  const products = [
    {
      name: "Vintage Camera",
      img: generateImage(),
      price: 99.99,
    },
    {
      name: "Retro Typewriter",
      img: generateImage(),
      price: 75.0,
    },
    {
      name: "Antique Vase",
      img: generateImage(),
      price: 49.99,
    },
    {
      name: "Vintage Typewriter",
      img: generateImage(),
      price: 125.0,
    },
  ];
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 z-10 -translate-x-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 z-10 translate-x-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex w-full flex-col items-center bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="mb-6 flex flex-col items-center space-y-3">
          <p className="inline-flex rounded-md bg-white px-3 py-1 text-sm">
            New Arrivals
          </p>
          <h1 className="text-center text-3xl font-bold tracking-wide sm:text-5xl md:tracking-normal">
            Check Out Our Latest Listings
          </h1>
          <p className="text-center text-xl text-gray-700 sm:text-2xl">
            Discover the newest and most exciting items added to our platform.
            You can also list yours to sell.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <ul className="grid grid-cols-1 gap-4 max-sm:hidden md:grid-cols-2 lg:grid-cols-4">
            {products?.map((product, idx) => (
              <li key={idx}>
                <div className="flex flex-col items-center gap-2 border p-5">
                  <img src={product.img} className="h-full w-auto" />
                  <div className="flex flex-col items-center space-y-3">
                    <p className="text-xl font-bold">{product.name}</p>
                    <p className="text-md text-gray-500">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <Button className="bg-brand-secondary text-white hover:bg-brand-secondary/90">
                    View Listing
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 gap-5 sm:hidden">
            <Slider {...settings}>
              {products?.map((product, idx) => (
                <li key={idx}>
                  <div className="flex flex-col items-center gap-2 border p-5">
                    <img
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="flex flex-col items-center space-y-3">
                      <p className="text-xl font-bold">{product.name}</p>
                      <p className="text-md text-gray-500">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <Button className="bg-brand-secondary text-white hover:bg-brand-secondary/90">
                      View Listing
                    </Button>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
