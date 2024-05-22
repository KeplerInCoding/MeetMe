import React from 'react';
// import bg from '../images/mathew-schwartz-3SWQCLmxH1U-unsplash-removebg-preview.png';
import me from '../images/me1.png';
//import css
import './style.css'

const HeroSection = () => {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/drive/my-drivehttps://drive.google.com/file/d/18JeyLK4MlfXXQIL5smlZpgoGCcFxH7GC/view?usp=sharinghttps://drive.google.com/file/d/18JeyLK4MlfXXQIL5smlZpgoGCcFxH7GC/view?usp=sharing", "_blank");
  };

  return (
    <>
      <div className='pt-20 w-full flex flex-col items-center'>
          <div className='relative md:h-[500px] h-fit w-full z-10 text-black flex justify-center flex-wrap items-center'>
            <img src={me} alt="Me" className='w-[390px]'/>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-sans font-bold '>~~Hi ! I'm Shreya~~</div>
              <div className='text-2xl font-sans font-bold '>A Frontend Developer</div>
              <div className='text-2xl font-sans font-bold '>(CSE'25)</div>
              <div className='flex items-center gap-4 my-7'>
                <div onClick={handleDownloadResume} className='cursor-pointer bg-gradient-to-br from-gray-800 to-rose-800 hover:bg-gradient-to-br hover:to-gray-800 hover:from-rose-800 text-white font-extrabold px-6 py-4 shadow-pink-200 shadow-xl hover:shadow-pink-200 hover:shadow-lg transform transition-transform hover:scale-110'>DOWNLOAD RESUME</div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
