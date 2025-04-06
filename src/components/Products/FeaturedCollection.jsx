import React from 'react'
import { Link } from 'react-router-dom'
import feature from '../../assets/feature1.png'

function FeaturedCollection() {
  return (
    <section className='py-8 md:py-16 px-4 '>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row 
        rounded-xl lg:rounded-3xl items-center bg-green-50'>
            {/* Left Content */}
            <div className='lg:w-1/2 p-8 text-center lg:text-left'>
                <h2 className='text-[18px] md:text-lg font-semibold text-gray-700 mb-2'>
                    Comfort and Style
                </h2>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                    Apparel made for your everyday life.
                </h2>
                <p className='text-sm md:text-lg text-gray-600 mb-6'>
                    Discover high-quality, comfortable clothing that effortlessly blends 
                    fashion and function. Design to make you look and feel great every day.
                </p>
                <Link to="/collections/all" className='
                bg-black text-white px-6 py-2 md:py-3 rounded-md md:rounded-lg text-[14px] md:text-lg hover:bg-gray-800'>
                    Shop Now
                </Link>
            </div>

            {/* Right Content */}
            <div className='lg:w-1/2'>
                <img src={feature} alt="Featured Collection" 
                className='lg:rounded-tr-3xl rounded-tl-xl lg:rounded-tl-none rounded-tr-xl lg:rounded-br-3xl '/>
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection
