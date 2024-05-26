import React from 'react'
import SlideCards from './SlideCards'
import "../style.css"

const Projects = () => {
  return (
    <div className='w-fit flex flex-col items-center'>
      <div className='heading font-extrabold text-black text-5xl mb-10'>PROJECTS</div>
      <div>
        <div className='overflow-x-scroll w-screen no-scrollbar'>
          <SlideCards/>
        </div>
      </div>
      <div className='w-full h-[1px] bg-slate-400 my-5'></div>
    </div>
  )
}

export default Projects