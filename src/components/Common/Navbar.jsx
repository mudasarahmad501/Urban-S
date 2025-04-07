import React from 'react'
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';
import NavDrawer from '../Layout/NavDrawer';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
        const toggleCartDrawer = ()=>{
            setDrawerOpen(!drawerOpen);
        }

    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbarDrawer = ()=>{
        setNavbarOpen(!navbarOpen);
    }
    return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
            <div>
                <Link to="/" className="text-md md:text-xl font-medium">UrbanStitch</Link>
            </div>

            <div className='hidden md:flex space-x-6'>
                <Link to="/collections/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>women</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>top wear</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>bottom wear</Link>
            </div>

            <div className='flex items-center space-x-4'>
                <Link to="/login" className='hover:text-black'><HiOutlineUser className='h-5 w-5 text-gray-700'/></Link>
                <button onClick={toggleCartDrawer} className='relative hover:text-black cursor-pointer'>
                    <HiOutlineShoppingBag className='h-5 w-5 text-gray-700'/>
                    <span className='absolute -top-2 bg-[#ea2e0e] text-white text-xs rounded-full px-1.5 py-0.5'>4</span>
                </button>
                {/* Search functionality do it later  */}
                <div className='overflow-hidden '>
                <SearchBar/>
                </div>

                <button className='md:hidden'>
                    <HiBars3BottomRight onClick={toggleNavbarDrawer} className='h-6 w-6 text-gray-700'/>
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
        <NavDrawer navbarOpen={navbarOpen} toggleNavbarDrawer={toggleNavbarDrawer}/>
    </>
  )
}

export default Navbar
