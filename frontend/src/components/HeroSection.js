import React from 'react';
import me from '../images/ME.jpg';
import "../style.css"

const HeroSection = () => {

  return (
    <>
      <div className='pt-20 w-full flex flex-col items-center'>
          <div className='relative h-fit py-16 w-full z-10 text-black flex justify-center flex-wrap items-center gap-10'>
            <img src={me} alt="Me" className='w-[250px] shadow-lg shadow-red-900 rounded-md'/>
            <div className='flex flex-col items-center'>
              <div className='text-5xl md:text-5xl font-bold '>Hiii !!</div>
              <div className='text-5xl md:text-5xl font-bold '>~~I'm Shreya~~</div>
              <div className='text-3xl font-bold '>A MERN Stack Developer</div>
              <div className='text-3xl font-bold pb-10'>(CSE'25)</div>


              <a href="https://drive.google.com/file/d/1LLutdSv3L9FV7S_KPQXvGk9F7CoqkUxs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div
                className="relative px-8 py-10 text-4xl font-extrabold text-black border-2 border-black hover:bg-black/40 transition-transform transform hover:bg-red-300 "
              >
                <span className="relative z-10" >Download Resume</span>
                <div className="absolute inset-0  bg-gradient-to-br from-gray-500 to-rose-500 rotate-12 transform origin-center -z-10"></div>
              </div>
              </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
