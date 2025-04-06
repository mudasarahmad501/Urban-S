import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';


function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setisOpen] = useState(false);

    const handleSearchToggle = ()=>{
        setisOpen(!isOpen);
    }

    const handleSearch = (e)=>{
        e.preventDefault();
        console.log("Search Term ", searchTerm);
        setisOpen(false);
    }

  return (
    <div className={`flex justify-center items-center w-full transition-all duration-300 
        ${isOpen? "absolute top-0 left-0 bg-white h-24 z-50" : "w-auto"}`}>
      {isOpen ? (
        <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
            <div className='relative w-1/2'>
                <input type="text" placeholder='Search' value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700' />
                <button type='submit' className='cursor-pointer text-gray-600 absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-gray-800'>
                    <HiMagnifyingGlass className='h-5 w-5'/>
                </button>
            </div>
            {/* Close Button */}
            <button onClick={handleSearchToggle} type='button' className='absolute right-4 top-1/2 transform -translate-y-1/2
            text-gray-600 hover:text-gray-800 cursor-pointer'>
                <HiMiniXMark/>
            </button>
        </form>
        ) : (
        <button onClick={handleSearchToggle} className='cursor-pointer'>
            <HiMagnifyingGlass className='w-5 h-5'/>
        </button>
    )}
    </div>
  )
}

export default SearchBar
