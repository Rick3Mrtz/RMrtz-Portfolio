import React, { useEffect, useState } from 'react';
import '../styles/Background.css';
import background1 from './assets/images/background1.png';
import background2 from './assets/images/back2.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import ScrollSmoother from "gsap/dist/ScrollSmoother";


function Background() {
  
  return (
    <body>
    <div className="wrapper" >
    <div className="background-image-1 w-full h-full"  />
        <div className="content-inner">
          
        </div>
      </div>
      
      <div className="background-image-2" />
    
    </body>
  );
}  


export default Background;







  // <div className="wrapper">
  //     style={{backgroundPosition: `right center ${backgroundPositionX}`}}
  //   <img src= {background1} alt="backg" className='backg top-0 left-0 w-full h-screen object-cover bg-no-repeat'/>
  //   </div>





//   gsap.registerPlugin(ScrollTrigger);

// function Background() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollPosition(window.scrollX);
//     window.removeEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const backgroundPositionX = `-${scrollPosition / 3}px`;
// );

// }