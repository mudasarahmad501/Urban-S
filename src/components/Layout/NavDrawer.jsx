import React from 'react'
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
function NavDrawer({navbarOpen, toggleNavbarDrawer}) {
  return (
    <div className={`fixed top-0 left-0 w-1/2 h-full bg-white
        shadow-lg transform transition-transform duration-300 flex flex-col z-50 
        ${navbarOpen? "translate-x-0" : "-translate-x-full"}`}>
          <div className='flex justify-end p-4 cursor-pointer'> 
            <button onClick={toggleNavbarDrawer}>
            <IoMdClose className='w-5 h-5 text-gray-600'/>
            </button>
          </div>

          {/* Navs */}
            <div className='flex flex-col p-4 h-full gap-4'>
                <h1 className='font-semibold text-md'>Menu</h1>
                <Link to="/collections/all" onClick={toggleNavbarDrawer} className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to="#" onClick={toggleNavbarDrawer} className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>women</Link>
                <Link to="#" onClick={toggleNavbarDrawer} className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>top wear</Link>
                <Link to="#" onClick={toggleNavbarDrawer} className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>bottom wear</Link>
            </div>
          
    </div>
  )
}

export default NavDrawer
