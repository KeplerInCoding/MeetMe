import React from 'react'
import { FaLaptopCode, FaPython, FaRobot } from 'react-icons/fa';
import "../style.css"

const Internships = () => {
  return (
    <div className='my-20 w-fit flex flex-col items-center p-4'>
      <div className='heading font-extrabold text-black text-5xl mb-10 text-center'>INTERNSHIPS</div>
      <div className='w-1/2 h-[2px] bg-black text-center mb-20'></div>

      <div className=' flex flex-wrap justify-center items-center gap-5'>
        <div className=' w-60 h-60 text-2xl p-4 flex flex-col items-center justify-center bg-gradient-to-br from-gray-400 to-rose-400 shadow-lg shadow-black rounded-3xl'>  
          <div><FaLaptopCode className="text-black text-5xl mb-2" /></div>
          <div className=' text-center'>Web Development Intern - Bharat Intern (09/2023)</div>
        </div>

        <div className=' w-60 h-60 text-2xl p-4 flex flex-col items-center justify-center bg-gradient-to-br from-gray-400 to-rose-400 shadow-lg shadow-black rounded-3xl'>  
          <div><FaPython className="text-black text-5xl mb-2" /></div>
          <div className=' text-center'>Python Programming Internship - YBI (09/2023)</div>
        </div>

        <div className=' w-60 h-60 text-2xl p-4 flex flex-col items-center justify-center bg-gradient-to-br from-gray-400 to-rose-400 shadow-lg shadow-black rounded-3xl'>  
          <div><FaRobot className="text-black text-5xl mb-2" /></div>
          <div className=' text-center'>ML Intern - Oasis Infobyte (04/2023)</div>
        </div>

      </div>
    
    </div>
  )
}

export default Internships