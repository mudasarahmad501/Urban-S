import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import login from '../assets/login.webp'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("User Login:", {email, password});
    }
  return (
    <div className='flex'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
        <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-6 md:p-8 rounded-lg border shadow-md'>
            <h2 className='text-center mb-3 text-lg md:text-xl font-medium '>UrbanStitch</h2>
            <h2 className='text-center mb-6 text-lg md:text-2xl font-bold '>Hey there!👋</h2>
            <p className='text-center text-sm md:text-[16px] mb-4 md:mb-6'>Enter your user name and password to login</p>
            <div className='mb-4'>
                <label className='block text-sm md:text-lg font-semibold mb-2'>
                    Email
                </label>
                <input type="email" value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className='w-full p-2 border rounded placeholder:text-sm md:placeholder:text-[16px]'
                placeholder='Enter your email adress' />
            </div>
            <div className='mb-4'>
                <label className='block text-sm md:text-lg font-semibold mb-2'>
                    Password
                </label>
                <input type="password" value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='w-full p-2 border rounded placeholder:text-sm md:placeholder:text-[16px]'
                placeholder='Enter your password' />
            </div>
            <button type='submit'
            className='w-full cursor-pointer bg-black p-2 rounded-lg text-white text-sm md:text-lg font-semibold hover:bg-gray-800 transition'>
                Sign In
            </button>
            <p className='mt-6 text-xs md:text-sm text-center'>
                Don't have an Account?
                <Link to="/register" className='text-blue-500'> Register</Link>
            </p>
        </form>
      </div>

      {/* Right image */}
      <div className='hidden lg:block w-1/2 bg-gray-800'>
        <div className='flex h-full flex-col justify-center items-center'>
            <img src={login} alt="Login to Account" 
            className='h-[750px] w-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Login
