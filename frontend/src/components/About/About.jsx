import React from 'react'
import BannerImg from '../../assets/women/hpimg4.png'
const About = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white dark:text-white duration-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">  Handicraft Business </p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              These business appears to focus on sustainability and craftsmanship, offering unique, 
              handmade pieces that promote the traditional handicraft industry. Each product seems carefully crafted,
               likely using eco-friendly materials, which reflects both the beauty and cultural heritage of handcrafted goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
