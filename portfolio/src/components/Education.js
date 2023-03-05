import React from 'react';


function Education () {
    return (
        <div className='bg-purple-900'>
            <div class="flex-1 bg-purple-900 text-[5rem] pt-4 flex items-center h-[25vh] justify-center">
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-400 mb-8 tracking-wider'>Education</h1>
        </div>
        <div class="flex-1 bg-white flex items-center justify-center rounded-[4rem] shadow-2xl mx-[20rem]">
          <h1 class="text-purple-600 text-center text-[3rem] my-6 mx-20">University of Texas at Austin<br></br>
          Full Stack Developer Bootcamp<br></br>
          Class of 2023</h1>
        </div>
        <div className='bg-purple-900 h-[4rem]'></div>

        </div>
    )
}

export default Education;