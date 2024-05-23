import React from 'react';
import me from '../images/ME.jpg';

const HeroSection = () => {

  return (
    <>
      <div className='pt-20 w-full flex flex-col items-center'>
          <div className='relative md:h-[500px] h-fit w-full z-10 text-black flex justify-center flex-wrap items-center gap-10'>
            <img src={me} alt="Me" className='w-[250px]'/>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-sans font-bold '>~~Hi ! I'm Shreya~~</div>
              <div className='text-2xl font-sans font-bold '>A Frontend Developer</div>
              <div className='text-2xl font-sans font-bold '>(CSE'25)</div>
              <div className='flex items-center gap-4 my-7'>
                <a href="https://drive.google.com/file/d/1s8I8DUn7auf3W1F-HBr7mtjcAGtTK9Hc/view?usp=sharing"><div className='cursor-pointer bg-gradient-to-br from-gray-800 to-rose-800 hover:bg-gradient-to-br hover:to-gray-800 hover:from-rose-800 text-white font-extrabold px-6 py-4 shadow-pink-200 shadow-xl hover:shadow-pink-200 hover:shadow-lg transform transition-transform hover:scale-110'>DOWNLOAD RESUME</div></a>
              </div>
            </div>
        </div>
        <div className='w-full h-[1px] bg-slate-400 my-5'></div>
      </div>
    </>
  );
}

export default HeroSection;
