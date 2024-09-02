import React from "react";
import Img1 from "../../components/pg/img/41.jpg";
import Img2 from "../../components/pg/img/133.jpg";
import Img3 from "../../components/pg/img/94.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Lippon Art",
    description:
      "The image displays lippon art with a mandala-like pattern.",
  },
  {
    id: 2,
    img: Img2,
    title: "Chocolate Box",
    description:
      "A small red gift box with a ribbon bow adds to the festive atmosphere.",
  },
  {
    id: 3,
    img: Img3,
    title: "Wall Hanging",
    description:
      "The image features a decorative wall hanging with a crescent-shaped arrangement of yellow flowers and green leaves.",
  },
];


const Products = () => {
    return (
      <div className="py-14 dark:bg-dark bg-white dark:text-white duration-200">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-24 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Products
          </h1>
        </div>
          {/* Body section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                {/* image section */}
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                {/* details section */}
                <div className="p-4 text-center">
                  {/* star rating */}
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Products
