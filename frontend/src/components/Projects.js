import React from 'react'
import SlideCards from './SlideCards'
import "../style.css"
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className='w-fit flex flex-col items-center'>
      <div className='heading font-extrabold text-black text-5xl mb-10'>PROJECTS</div>
      <div className='w-1/2 h-[2px] bg-black text-center mb-10'></div>
      <div className='flex items-center place-self-end text-xl pr-10 text-rose-800 font-sans gap-4'>
        <div>Scroll</div>
        <div> <FaArrowRight/></div>
      </div>
      
      <div>
        <div className='overflow-x-scroll w-screen no-scrollbar'>
          <SlideCards/>
        </div>
      </div>
    </div>
  )
}

export default Projects