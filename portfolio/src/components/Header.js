import React from 'react';

import '../styles/Header.css'

function Header () {
    return (
        <header className='header h-full w-full'>
            <div className=' text-center text-7xl text-white leading-[220px]'>Welcome.
                <div className='text-3xl text-white mt-[14rem] mx-[630px]'>
                    Rick Martinez <span class=' text-sm text-white'>Full Stack WebDev</span>
                </div>
            
            </div>


        </header>
    )
}

export default Header;