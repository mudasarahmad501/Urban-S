import React from 'react'
import {TbBrandMeta} from 'react-icons/tb';
import { RiTwitterXLine } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';

function Topbar() {
  return (
    <div className='bg-[#ea2e0e] text-white'>
      <div className='container mx-auto flex items-center justify-center md:justify-between py-1 px-4'>
        <div className='hidden md:flex items-center space-x-2'>
            <a href="#" className='hover:text-gray-300'>
                <TbBrandMeta className='w-5 md:w-6 md:h-6 h-5'/>
            </a>
            <a href="#" className='hover:text-gray-300'>
                <IoLogoInstagram className='w-5 md:w-6 md:h-6 h-5'/>
            </a>
            <a href="#" className='hover:text-gray-300'>
                <RiTwitterXLine className='w-5 md:w-5 md:h-5 h-5'/>
            </a>
        </div>
        <div className=' items-center text-sm '>
            <span >We Ship Worldwide - Fast and Reliable Shipping!</span>
        </div>
        <div className='hidden md:flex text-center text-sm'>
            <a href="tel: +123456789" className='hover:text-gray-300'>+1 (234) 567-890</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
