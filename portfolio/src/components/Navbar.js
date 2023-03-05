import React, { useState } from 'react';

import '../styles/Navbar.css';
import {HiMenu} from 'react-icons/hi'
import {FaReact} from 'react-icons/fa'

function Navbar () {
  
    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
          <h1 className='text-white text-[2.2rem]'> <FaReact className='text-cyan-300 inline-block mb-2 mr-3' size={35} />Portfolio 
          </h1>
          
          <div>
            <ul className='flex items-center gap-[2rem] justify-center text-gray-100 font-semibold text-2xl'>
              <li className=' hover:ring-4 hover:ring-rose-300 ease-in-out duration-200 px-3 py-2 rounded-lg cursor-pointer z-10'>Home</li>
              <li className=' hover:ring-4 hover:ring-rose-300 ease-in-out duration-200 px-3 py-2 rounded-lg cursor-pointer text-center z-10'>About Me</li>
              <li className=' hover:ring-4 hover:ring-rose-300 ease-in-out duration-200 px-3 py-2 rounded-lg cursor-pointer z-10'>Contact</li>
            </ul>
          </div>
        </div>
    )
}

export default Navbar;


// THIS WAS THE CODE USED TO TOGGLE HAMBURGER

// function Navbar () {
//   const[nav, setNav] = useState(false)
//   const handleNav = () => {
//     setNav(!nav);
//     if(!nav) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'scroll'
//     }
//   }
//     return (
//         <div className='absolute w-full flex justify-between p-4 items-center'>
//           <h1 className='text-white text-[2.2rem]'> <FaReact className='text-cyan-300 inline-block mb-2 mr-3' size={35} />Portfolio 
//           </h1>
//           <HiMenu onClick={handleNav} className=' text-white z-20 cursor-pointer' size={33} />
//           <div className={nav ? 'hamburger fixed text-indigo-800 right-0 top-0 w-1/5 md:w-1/5 sm:w-2/5 h-screen bg-white/40 py-20 flex-col z-10 ease-in-out duration-500' : 'absolute top-0 h-screen ease-in duration-500 z-10 hidden'}>
//             <ul className='flex flex-col fixed w-1/5 items-center justify-center'>
//               <li className='font-bold text-3xl p-6 cursor-pointer'>Home</li>
//               <li className='font-bold text-3xl p-6 cursor-pointer text-center'>About Me</li>
//               <li className='font-bold text-3xl p-6 cursor-pointer'>Contact</li>
//             </ul>
//           </div>
//         </div>
//     )
// }
