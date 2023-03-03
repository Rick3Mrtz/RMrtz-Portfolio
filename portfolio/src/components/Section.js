import React from 'react';

import '../styles/Section.css'


function Section () {
    return (
        <section className='section'>
            <div className='mx-[13rem] py-20'>
                <div className=' grid grid-flow-row-dense grid-cols-3 gap-[4rem]'>
                    <div className='about-me col-span-2 relative text-center text-white text-[5.5rem] leading-[7rem] bg-gradient-to-b from-purple-900 to-blue-400 rounded-full w-80 h-100'>
                        About Me 
                    </div>
                    <div className='mt-12 text-[18px] text-center mx-2'>
                        From working with hundreds of healthcare workers the past 6 years, now I'm looking forward to working with hundreds of Web Developers!
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Section;