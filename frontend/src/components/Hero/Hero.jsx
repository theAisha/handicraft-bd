import React from 'react'
import BannerImg from '../../assets/women/women5.jpeg'


const BgStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
}
const Hero = ({toggleLoginPopup}) => {
  return (
    <div style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 "
    >
      <div className="bg-white/40  dark:bg-black/80 duration-300 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold"
            >
              Handicraft Business of Bangladesh
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              “The rich cultural heritage of Bangladesh by offering a curated collection of sustainable, handcrafted products made by skilled local artisans.”{" "}
            </p>
            <button data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"} className='primary-btn text-white font-bold py-2 px-4 rounded-full'
         onClick={() => toggleLoginPopup(true)} >Join Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
