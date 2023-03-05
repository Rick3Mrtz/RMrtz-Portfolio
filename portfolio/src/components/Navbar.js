import React, { useState } from 'react';

import '../styles/Navbar.css';
import {HiMenu} from 'react-icons/hi'
import {FaReact} from 'react-icons/fa'

function Navbar () {
  const[nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }
    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
          <h1 className='text-white text-[2.2rem]'> <FaReact className='text-cyan-300 inline-block mb-2 mr-3' size={35} />Portfolio 
          </h1>
          <HiMenu onClick={handleNav} className=' text-white z-20 cursor-pointer' size={33} />
          <div className={nav ? 'hamburger fixed text-indigo-800 right-0 top-0 w-1/5 md:w-1/5 sm:w-2/5 h-screen bg-white/40 py-20 flex-col z-10 ease-in-out duration-500' : 'absolute top-0 h-screen ease-in duration-500 z-10 hidden'}>
            <ul className='flex flex-col fixed w-1/5 items-center justify-center'>
              <li className='font-bold text-3xl p-6 cursor-pointer'>Home</li>
              <li className='font-bold text-3xl p-6 cursor-pointer text-center'>About Me</li>
              <li className='font-bold text-3xl p-6 cursor-pointer'>Contact</li>
            </ul>
          </div>
        </div>
    )
}

export default Navbar;


{/* <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">React Portfolio</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">About Me</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 hover:text-red-700 md:p-0 ">Resume</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav> */}