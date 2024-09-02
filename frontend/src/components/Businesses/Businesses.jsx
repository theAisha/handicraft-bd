import React from "react";
import Img1 from "../../assets/women/women4.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women.jpg";
import Img5 from "../../assets/women/women5.jpeg";
import Img6 from "../../assets/women/women6.jpg";
import Img7 from "../../assets/women/women7.jpg";
import Img8 from "../../assets/women/women8.jpg";
import Img9 from "../../assets/women/women9.jpg";
import Img10 from "../../assets/women/women10.jpg";
import Img11 from "../../assets/women/women11.jpg";
import Img12 from "../../assets/women/women12.jpg";
import Img13 from "../../assets/women/women13.jpg";
import Img14 from "../../assets/women/women14.jpg";
import Img15 from "../../assets/women/women15.png";
import Img16 from "../../assets/women/women16.jpg";
import Img17 from "../../assets/women/women17.jpg";
import Img18 from "../../assets/women/women18.jpg";
import Img19 from "../../assets/women/women19.jpg";
import Img20 from "../../assets/women/women20.jpg";

import { FaStar } from "react-icons/fa6";

const BusinessesData = [
    {
        id: 1,
        img: Img1,
        title: "শকুন্ত ",
        link: "/src/components/Pg/1.html"
      },
      {
        id: 2,
        img: Img6,
        title: "Crochet Craft",
        link: "/src/components/Pg/2.html"
      },
      {
        id: 3,
        img: Img19,
        title: "Craft Bangladesh",
        link: "/src/components/Pg/3.html"
      },
      {
        id: 4,
        img: Img4,
        title: "Handcraft & decor",
        link: "/src/components/Pg/4.html"
      },
      {
        id: 5,
        img: Img9,
        title: "Handicraft 24 bd ",
        link: "/src/components/Pg/5.html"
      },
      {
        id: 6,
        img: Img20,
        title: "Wooden bd.com",
        link: "/src/components/Pg/6.html"
      },
      {
        id: 7,
        img: Img7,
        title: "শিমলা কুঠির শিল্প",
        link: "/src/components/Pg/7.html"
      },
      {
        id: 8,
        img: Img13,
        title: "Handmade crafts bd.com",
        link: "/src/components/Pg/8.html"
      },
      {
        id: 9,
        img: Img5,
        title: "Handicraft Zone ",
        link: "/src/components/Pg/9.html"
      },
      {
        id: 10,
        img: Img11,
        title: "Handicraft by Sonia",
        link: "/src/components/Pg/18.html"
      },
      {
        id: 11,
        img: Img16,
        title: "Handicraft by Faiza",
        link: "/src/components/Pg/10.html"
      },
      {
        id: 12,
        img: Img10,
        title: "Hlwcraft.com",
        link: "/src/components/Pg/12.html"
      },
      {
        id: 13,
        img: Img18,
        title: "Nokshi Handicrafts ",
        link: "/src/components/Pg/11.html"
      },
      {
        id: 14,
        img: Img15,
        title: "Bamboo Handicraft.BD",
        link: "/src/components/Pg/14.html"
      },
      {
        id: 15,
        img: Img14,
        title: "Nokshi Katha & Bedsheet",
        link: "/src/components/Pg/15.html"
      },
      {
        id: 16,
        img: Img12,
        title: "Hand Paint and Crafts",
        link: "/src/components/Pg/16.html"
      },
      {
        id: 17,
        img: Img17,
        title: "CustomizeBD.com",
        link: "/src/components/Pg/17.html"
      },
      {
        id: 18,
        img: Img8,
        title: "Art Gallery",
        link: "/src/components/Pg/13.html"
      },
      {
        id: 19,
        img: Img3,
        title: "Nokshi Katha & Bedsheet",
        link: "/src/components/Pg/19.html"
      },
      {
        id: 20,
        img: Img2,
        title: "Naksha",
        link: "/src/components/Pg/20.html"
        
      },
]
const Businesses = () => {
    return (
        <div className="py-14 dark:bg-dark bg-white dark:text-white duration-200">
          <div className="container">
            {/* Header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
              <p data-aos="fade-up" className="text-sm text-primary">
                Top Selling Products for you
              </p>
              <h1 data-aos="fade-up" className="text-3xl font-bold">
                Businesses
              </h1>
            </div>
            {/* Body section */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                {/* card section */}
                {BusinessesData.map((data) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className="space-y-3"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="h-[220px] w-[150px] object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{data.title}</h3>
                      <p className="text-sm text-gray-600">{data.color}</p>
                      <div className="items-left gap-1">
                      <p>Years of Operation: 5</p>
                      <p>Number of Products: 100</p>
                      <p>Likes: 36K</p>
                      </div>
                      <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                        <button
                        className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                        >
                          See Details
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
export default Businesses
