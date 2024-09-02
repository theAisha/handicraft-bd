import React from 'react'

const Hero = ({toggleLoginPopup}) => {
  return ( <>
     <main>
      <div className='w-full h-screen flex flex-col justify-center items-center gap-6'>
        <h1 className='md:w-[500px] text-center font-Poppins font-bold text-5xl sm:text-6xl md:text-7xl text-white mix-blend-difference'>Handicraft Business of Bangladesh</h1>
         <p className='text-white mix-blend-difference'>The rich cultural heritage of Bangladesh by offering a curated collection of sustainable, handcrafted products made by skilled local artisans</p>
         <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full'
         onClick={() => toggleLoginPopup(true)} >Join Now</button>
        </div></main> 
   </>
  )
}

export default Hero
