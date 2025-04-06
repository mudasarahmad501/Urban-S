import React from 'react'
import mencollImg from '../../assets/mens-collection.webp'
import womencollImg from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'

function GenderCollectionSection() {
  return (
    <section className='py-6 md:py-12 px-6 md:px-10 lg:px-20 '>
        <div className='container mx-auto flex flex-col  md:flex-row gap-8 md:gap-x-10 '>
            {/* Womens Collection */}
            <div className='relative flex-1'>
                <img src={womencollImg} alt="Women's Collections" 
                className='w-full h-[450px] md:h-[600px]  object-cover'/>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} 
                className='absolute bottom-8 left-8 p-4'>
                    <h2 className='text-sm md:text-lg  font-bold text-gray-900 mb-1'>
                        Women's Collection
                    </h2>
                    <Link to="/collections/all?gender=Women"
                    className='text-gray-900 underline text-sm md:text-lg '>Shop Now</Link>
                </div>
            </div>

            {/* Mens Collections */}
            <div className='relative flex-1'>
                <img src={mencollImg} alt="Women's Collections" 
                className='w-full h-[450px] md:h-[600px]  object-cover'/>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} 
                className='absolute bottom-8 left-8 p-4'>
                    <h2 className='text-sm md:text-lg font-bold text-gray-900 mb-1'>
                        Men's Collection
                    </h2>
                    <Link to="/collections/all?gender=Women"
                    className='text-gray-900 underline text-sm md:text-lg'>Shop Now</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection
