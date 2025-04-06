import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

function FeaturesSection() {
  return (
    <section className='py-10 px-4 bg-white'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center'>
            {/* Feature 1 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2 md:mb-4'>
                    <HiShoppingBag className='text-3xl'/>
                </div>
                <h4 className='tracking-tighter text-sm md:text-lg mb-2'>
                    FREE INTERNATIONAL SHIPPING
                </h4>
                <p className='text-gray-600 tracking-tighter text-xs md:text-sm lg:text-[17px]'>
                    On all orders over $100.00
                </p>
            </div>
            {/* Feature 2*/}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2 md:mb-4'>
                    <HiArrowPathRoundedSquare className='text-3xl'/>
                </div>
                <h4 className='tracking-tighter text-sm md:text-lg mb-2'>
                    45 DAYS RETURN
                </h4>
                <p className='text-gray-600 tracking-tighter text-xs md:text-sm lg:text-[17px]'>
                    Money back guarantee
                </p>
            </div>
            {/* Feature 3 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2 md:mb-4'>
                    <HiOutlineCreditCard className='text-3xl'/>
                </div>
                <h4 className='tracking-tighter text-sm md:text-lg mb-2'>
                    SECURE CHECKOUT
                </h4>
                <p className='text-gray-600 tracking-tighter text-xs md:text-sm lg:text-[17px]'>
                    100% secure checkout process
                </p>
            </div>
            
            
        </div>
    </section>
  )
}

export default FeaturesSection
