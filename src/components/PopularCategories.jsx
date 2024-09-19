import React from "react";
import categories from "../db/categories.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const PopularCategories = () => {
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
    <div className="flex w-full flex-col items-center py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center gap-12 px-4 md:px-6">
        <div className="flex flex-col gap-3">
          <p className="flex self-center rounded-md bg-gray-100 px-3 py-1 text-sm">
            Explore
          </p>
          <h2 className="text-center text-3xl font-bold tracking-wide sm:text-5xl md:text-4xl md:tracking-normal">
            Explore Popular Categories
          </h2>
        </div>
        <div className="w-full max-w-6xl">
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category._id.$oid} className="border px-2">
                <div className="group flex cursor-pointer flex-col items-center p-4">
                  <img
                    src={category.categoryImg.url}
                    alt={category.categoryName}
                    className="h-36 w-36 rounded-full object-cover shadow-lg transition duration-300 ease-in-out group-hover:brightness-90"
                  />
                  <p className="mt-2 text-lg font-medium group-hover:text-gray-500">
                    {category.categoryName}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
