import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { scrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/Section.css'

import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


function Section () {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo( el, 
      { x: 1000 },
      {

        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: el,
          start: "top 55%"
          
        },
      }
    );
  }, []);


    return (
        <body id="about-me" class="flex flex-row h-[60vh]">
        
        <div class="flex-1 bg-white flex items-center justify-center">
          <h1 class="text-purple-800 text-right text-[6rem] leading-[5.4rem] border-l-[1rem] border-b-[1rem] tracking-wider">Here is<br></br>a little <br></br>about<br></br><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-400'>Myself</span></h1>
        </div>
        <div ref={containerRef} class="about-me flex-1 bg-purple-800 flex items-center justify-center rounded-[4rem] shadow-2xl mr-40 overscroll-contain">
          <h1 class="text-white text-center text-2xl mx-16 flex flex-wrap">This is the about me section this is the about me section This is the about me section this is the about me section This is the about me section this is the about me section This is the about me section this is the about me section This is the about me section this is the about me section</h1>



        </div>
      </body>
   
    )
}

export default Section;

