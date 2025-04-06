// import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';

function CartDrawer({drawerOpen, toggleCartDrawer}) {

    
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white
    shadow-lg transform transition-transform duration-300 flex flex-col z-50 
    ${drawerOpen? "translate-x-0" : "translate-x-full"}`}>
      <div className='flex justify-end p-4 cursor-pointer'> 
        <button onClick={toggleCartDrawer}>
        <IoMdClose className='w-5 h-5 text-gray-600'/>
        </button>
      </div>
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl mb-4 font-semibold'>Your Cart</h2>
        {/* Component for cart content */}
        <CartContent/>
      </div>
      <div className='p-4 bg-white sticky bottom-0'>
        <button className='w-full bg-black text-white font-semibold py-3 rounded-lg 
        cursor-pointer hover:bg-gray-800 transition'>Checkout</button>
        <p className='text-xs tracking-tighter text-gray-500 text-center
         mt-2'>Shipping , taxes and discount codes calculated at checkout</p>
      </div>
    </div>
  )
}

export default CartDrawer
