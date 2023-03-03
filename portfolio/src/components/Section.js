import React from 'react';

import '../styles/Section.css'


function Section () {
    return (
        <section className='section'>
            <div className='mx-[13rem] py-20'>
                <div className=' grid grid-flow-row-dense grid-cols-3 gap-[4rem]'>
                    <div className='col-span-2 text-center text-white text-[5.5rem] leading-[7rem] bg-gradient-to-b from-purple-900 to-blue-400 rounded-full w-80 h-100'>
                        About Me 
                    </div>
                    <div className='mt-12 text-[20px] text-center mx-2'>
                        This is the About me section This is the About me section This is the About me section This is the About me section This is the About me section
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Section;