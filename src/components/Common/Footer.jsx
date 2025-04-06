import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='border-t py-12 bg-white'>
        <div className='grid grid-cols-1  text-gray-500 md:grid-cols-4 gap-4 md:gap-12 px-6 md:px-4 '>
            {/* News Letter  */}
            <div>
                <h3 className='text-lg text-gray-800 mb-2'>Newsletter</h3>
                <p className='text-sm  mb-2'>
                Be the first to hear new products, exclusive events, and online offers. 🚀 Shop Now
                </p>
                <p className='text-sm mb-2'>Sign up and get 10% of discount on your first order.</p>

                {/* Newsletter Form */}
                <form className='flex '>
                    <input type="email" placeholder='Enter your email' 
                    className='w-full text-sm  p-2 rounded-l-sm focus:outline-none 
                    focus:ring-1 focus:ring-gray-500 transition-all border-l border-t border-b
                     border-gray-800' required/>
                    <button type='submit'
                    className='cursor-pointer bg-black text-white px-8 md:px-4 py-3 text-sm rounded-r-sm
                     hover:bg-gray-800 transition-all'>
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Shop Links */}
            <div>
            <h3 className='text-lg text-gray-800 mb-2'>Shop</h3>
            <ul className='space-y-2 text-gray-600 text-sm'>
                <li>
                    <Link to="#" >Men's Top Wear</Link>
                </li>
                <li>
                    <Link to="#" >Women's Top Wear</Link>
                </li>
                <li>
                    <Link to="#" >Men's Bottom Wear</Link>
                </li>
                <li>
                    <Link to="#" >Women's Bottom Wear</Link>
                </li>
            </ul>
            </div>

            {/* Support Links */}
            <div>
            <h3 className='text-lg text-gray-800 mb-2'>Support</h3>
            <ul className='space-y-2 text-gray-600 text-sm'>
                <li>
                    <Link to="#" >Contact Us</Link>
                </li>
                <li>
                    <Link to="#" >About Us</Link>
                </li>
                <li>
                    <Link to="#" >FAQs</Link>
                </li>
                <li>
                    <Link to="#" >Features</Link>
                </li>
            </ul>
            </div>

            {/* Follow us */}
            <div>
                <h3 className='text-lg text-gray-800 mb-2'>Follow Us</h3> 
                <div className='flex space-x-4 mb-6'>
                    <a 
                    href="https://www.facebook.com"
                    target='_black'
                    rel='noopener noreferrer'
                    className='hover:text-gray-400'><TbBrandMeta className='w-5 md:w-6 md:h-6 h-5'/>
                    </a>
                    <a 
                    href="https://www.facebook.com"
                    target='_black'
                    rel='noopener noreferrer'
                    className='hover:text-gray-400'><IoLogoInstagram className='w-5 md:w-6 md:h-6 h-5'/>
                    </a>
                    <a 
                    href="https://www.facebook.com"
                    target='_black'
                    rel='noopener noreferrer'
                    className='hover:text-gray-400'><RiTwitterXLine className='w-5 md:w-5 md:h-5 h-5'/>
                    </a>
                </div>
                <p className='mb-1'>Call Us</p>
                <p className='text-sm'><FiPhoneCall className='w-4 md:w-4 md:h-4 h-4 inline-block mr-2'/>+1 (234) 567-890</p>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className='container mx-auto mt-12 px-6 md:px-4 border-t border-gray-300 pt-6'>
            <p className='text-sm text-center tracking-tighter text-gray-500'>© 2025, Mudasar_Ahmad. All rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
