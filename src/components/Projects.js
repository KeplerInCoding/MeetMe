import React from 'react'
import SlideCards from './SlideCards'

const Projects = () => {
  return (
    <div className='w-fit pt-20 flex flex-col items-center'>
      <div className=' font-mono font-extrabold text-black text-4xl'>PROJECTS</div>
      <div>
        <div className=' text-center font-extrabold text-red-600 text-2xl m-20'>(WEBSITE UNDER DEVELOPMENT...)</div>
        <div className='overflow-x-scroll w-screen no-scrollbar'>
          <SlideCards/>
        </div>
      </div>
      <div className='w-full h-[1px] bg-slate-400 my-5'></div>
    </div>
  )
}

export default Projects