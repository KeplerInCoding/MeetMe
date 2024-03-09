import React from 'react'
import SlideCards from './SlideCards'

const Projects = () => {
  return (
    <div className='w-fit pt-20 flex flex-col items-center'>
      <div className=' font-mono font-extrabold text-black text-4xl'>PROJECTS</div>
      <div>
        <div className=' overflow-x-scroll md:w-5/6 px-5 w-screen no-scrollbar'>
          <SlideCards/>
        </div>
      </div>
    </div>
  )
}

export default Projects