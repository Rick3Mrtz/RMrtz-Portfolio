import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Header.css'



function Header () {
    const myRef = useRef(null);

    useEffect(() => {
        let fromVar = gsap.from(myRef.current, {
            opacity: 0,
            duration: 2,
            y: 40,
            immediateRender: false,
        });
        return () => {
            fromVar.kill();
        };
    }, []);

    const webDev = useRef(null);

    useEffect(() => {
        let fromDev = gsap.from(webDev.current, {
            opacity: 0,
            duration: 2,
            y: 40,
            immediateRender: false,
        });
        return () => {
            fromDev.kill();
        };
    }, []);
    


    return (
        <header className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover absolute' src='https://e1.pxfuel.com/desktop-wallpaper/183/423/desktop-wallpaper-mystical-stylised-lonely-mountain-vista-1920x1200-mystical-moonlight.jpg'></img>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white text-center'>
                <div ref={myRef}>
                    <h1 className='text-7xl py-[16rem] drop-shadow-2xl md:text-8xl lg:text-9xl'>Welcome.</h1></div>
                    <div ref={webDev}>
                    <p className='text-3xl pb-4 md:text-4xl lg:text-5xl'>Rick Martinez</p>
                    <p>Full Stack WebDev</p></div>
                
            </div>
            


        </header>
    )
}

export default Header;


{/* <div className=' text-center text-7xl text-white leading-[220px]'>Welcome.
                <div className='text-3xl text-white mt-[14rem] mx-[630px]'>
                    Rick Martinez <span class=' text-sm text-white'>Full Stack WebDev</span>
                </div>
            
            </div> */}