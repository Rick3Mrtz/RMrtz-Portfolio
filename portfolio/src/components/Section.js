import React from 'react';

import '../styles/Section.css'


function Section () {
    return (
        <section className='section'>
            <div className='mx-[15rem] py-20'>
                <div className=' grid grid-cols-2 gap-[15rem]'>
                    <div className='text-center text-black text-[7rem] leading-[7rem]'>
                        About Me 
                    </div>
                    <div className='mt-20 text-lg text-right'>
                        From working with hundreds of healthcare workers the past 6 years, I am now ready to work with hundreds of Web Developers!
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Section;