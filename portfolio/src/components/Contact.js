import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'
gsap.registerPlugin(ScrollTrigger);



function Contact() {

  const divRef = useRef(null);

  useEffect(() => {
    const el = divRef.current;
    gsap.fromTo(el,
      {
        y: 50,
        opacity: 0,
        // immediateRender: false
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

    
    <div ref={divRef} className=' relative'>


      <body id="contact-section" class="flex flex-row h-[55vh] pt-24">


        <div class=" bg-purple-800 flex justify-between p-4 items-center rounded-[4rem] shadow-2xl ml-40 max-w-[450px] ">
          <div class="text-white text-center text-2xl mx-20"><BsLinkedin className='text-white cursor-pointer m-5' size={60}></BsLinkedin>
            <FiGithub className='text-white cursor-pointer m-5' size={60}></FiGithub>
            <FaTwitterSquare className='text-white cursor-pointer m-5' size={60}></FaTwitterSquare>
            <FaFacebookSquare className='text-white cursor-pointer m-5' size={60}></FaFacebookSquare>
            <AiOutlineMail className='text-white cursor-pointer m-5' size={60}></AiOutlineMail>

          </div>

        </div>

        <div class="flex-1 bg-white flex items-center justify-center ">
          <h1 class="text-purple-800 text-left text-[5rem] leading-[5.6rem] border-r-[1rem] border-b-[1rem] tracking-wide">Want to<br></br>Get in touch?<br></br><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-400'>Contact Me</span></h1>
        </div>
      </body>
      
    </div>
  
    
  )
}

export default Contact;
