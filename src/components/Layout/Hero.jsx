import React from 'react'
import heroImg from '../../assets/urban-hero.webp'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='relative'>
        <img src={heroImg} alt="HeroImage"
        className='w-full h-[450px] md:h-[600px]  object-cover' 
        />
        <div className='absolute inset-0  flex items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            <div className='text-center text-white p-6'>
                <h1 className='text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-4'>Vacation <br /> Ready</h1>
                <p className='text-sm md:text-lg tracking-tighter mb-6'>
                    Explore our vacation-ready outfits with fast worlwide shipping
                </p>
                <Link to="#" className='bg-white text-gray-950 px-8 py-3 md:py-4 rounded-sm text-sm md:text-lg'>
                    Shop Now
                </Link>

            </div>

        </div>
    </section>
  )
}

export default Hero
