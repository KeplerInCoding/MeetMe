import React from 'react'

const Projects = () => {
  return (
    <div className='w-full pt-20 flex flex-col items-center'>
      <div className=' font-mono font-extrabold text-black text-4xl'>PROJECTS</div>
      <div>
        //horizontal card slider
        <div className='flex gap-10 overflow-x-auto scrollbar-hide p-10'>
          <div className='flex-none w-80 h-80 bg-black/20 rounded-md shadow-md p-5'>
            <div className='font-semibold text-lg'>Project 1</div>
            <div className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis auctor, aliquam odio vitae, tincidunt odio. Nam ac purus ac felis.</div>
          </div>
          <div className='flex-none w-80 h-80 bg-black/20 rounded-md shadow-md p-5'>
            <div className='font-semibold text-lg'>Project 2</div>
            <div className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis auctor, aliquam odio vitae, tincidunt odio. Nam ac purus ac felis.</div>
          </div>
          <div className='flex-none w-80 h-80 bg-black/20 rounded-md shadow-md p-5'>
            <div className='font-semibold text-lg'>Project 3</div>
            <div className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis auctor, aliquam odio vitae, tincidunt odio. Nam ac purus ac felis.</div>
          </div>
          <div className='flex-none w-80 h-80 bg-black/20 rounded-md shadow-md p-5'>
            <div className='font-semibold text-lg'>Project 4</div>
            <div className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis auctor, aliquam odio vitae, tincidunt odio. Nam ac purus ac felis.</div>
          </div>
          <div className='flex-none w-80 h-80 bg-black/20 rounded-md shadow-md p-5'>
            <div className='font-semibold text-lg'>Project 5</div>
            <div className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis auctor, aliquam odio vitae, tincidunt odio. Nam ac purus ac felis.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects