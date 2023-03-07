import React, { useEffect, useRef } from 'react';
import '../styles/Background.css';
import background1 from './assets/images/background1.png';
import Michael from './assets/images/michael.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Background () {
    // const myMichael = useRef(null);

    // useEffect(() => {
    //     let fromVar = gsap.to(myMichael.current, {
    //         x: 1000,
    //     duration: 3,
    //     rotation: 360,
    //     // immediateRender: false,
    //     scrollTrigger: {
    //         trigger: ".michael",
    //         start: "top center",
    //         end: "top 30%",
    //         scrub: 1,
    //         toggleActions: "restart none none none",
    //         pin: true,
    //     }
   
    //     })
    //     return () => {
    //         fromVar.kill();
    //     }
    // }, []);

   
    
    const containerRef = useRef(null);

  useEffect(() => {
    // const el = containerRef.current;
    gsap.to( '.michael', 
      
      {

        x: 1000,
        rotation: 360,
        duration: 4,
        scrollTrigger: {
          trigger: '.michael',
          toggleActions: "restart none none none",
        //   start: "top center",
          
        //   pin: true,
          
        },
      }
    );
  }, []);


    
    return (
    <div>
        <img src= {Michael} alt='King' className="michael h-[rem] w-[10rem]" ref={containerRef}/>
        <div className=" bg-gradient-to-r from-teal-500 to-orange-600 h-[30vh]">
            <p>Goooo michael goooooo!</p>
            

        </div>
        
        
    </div>
    )
}


export default Background;