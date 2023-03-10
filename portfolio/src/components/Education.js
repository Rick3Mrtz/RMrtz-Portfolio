import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { scrollTrigger } from 'gsap/ScrollTrigger';
import Darren from './assets/images/darren.png';
import { ScrollTrigger } from 'gsap/all';


function Education () {
  const divRef = useRef(null);

  useEffect(() => {
    const el = divRef.current;
    gsap.fromTo( el,
      { 
        y: 50,
        opacity: 0,     
      },
      { 
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          
        },
      }
      );
  }, []);





    return (
        <div ref={divRef} className='bg-purple-900'>
            <div class="flex-1 bg-purple-900 text-[5rem] flex items-center h-[22vh] justify-center">
          <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-400 mb-8 tracking-wider'>Education</div>
          
        </div>
        <div class="flex-1 bg-white flex items-center justify-center rounded-[4rem] shadow-2xl mx-[20rem]">
          <div  class="text-purple-600 text-center text-[3rem] my-6 mx-20">University of Texas at Austin<br></br>
          Full Stack Developer Bootcamp<br></br>
          Class of 2023</div>
        </div>
        <div className='bg-purple-900 h-[4rem]'></div>

        </div>
    )
}

export default Education;