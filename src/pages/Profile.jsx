import React from 'react'
import MyOrdersPage from './MyOrdersPage'

function Profile() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="container flex-grow mx-auto p-4 md:p-6">
        <div className="flex flex-col lg:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className='w-full lg:w-1/4 flex justify-center gap-1 md:gap-2 flex-col items-start  shadow-md rounded-lg p-6'>
                <h2 className='mb-2 text-[15px] md:text-lg font-bold'>John Doe</h2>
                <p className='text-sm md:text-[15px] text-gray-600 mb-3'>John@example.com</p>
                <button className='w-full cursor-pointer bg-red-500 text-white py-2 rounded px-4 hover:bg-red-600 '>
                    Logout
                </button>
            </div>

            {/* Right Section: Orders table */}
            <div className='w-full lg:w-3/4'>
                <MyOrdersPage/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
