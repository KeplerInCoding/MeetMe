import React from 'react'
import { FaTrophy, FaMedal, FaCode } from 'react-icons/fa';
import "../style.css"

const Achievements = () => {
  return (
    <div className='my-20 w-fit flex flex-col items-center'>
      <div className='heading font-extrabold text-black text-5xl mb-10 text-center'>ACHIEVEMENTS</div>
      <div className='w-2/3 h-[2px] bg-black text-center mb-20'></div>

      <div className=' flex flex-wrap justify-center items-center'>
        <div className=' w-60 h-60 text-2xl p-4 flex flex-col items-center justify-center bg-gradient-to-br from-gray-500 to-rose-500 shadow-lg shadow-black rounded-full'>  
          <div><FaTrophy className="text-black text-5xl mb-2" /></div>
          <div className=' text-center'>2nd position in Cognizant Nurture Ideathon’23</div>
        </div>

        <div className=' w-60 h-60 text-2xl p-4 flex flex-col items-center justify-center bg-gradient-to-br from-gray-500 to-rose-500 shadow-lg shadow-black rounded-full'>  
          <div><FaMedal className="text-black text-5xl mb-2" /></div>
          <div className=' text-center'>Regional Topper in Class 10th CBSE Board with 96.6%</div>
        </div>

        <div className=' w-60 h-60 text-2xl p-4 flex flex-col items-center justify-center bg-gradient-to-br from-gray-500 to-rose-500 shadow-lg shadow-black rounded-full'>  
          <div><FaCode className="text-black text-5xl mb-2" /></div>
          <div className=' text-center'>Solved 250+ problems on LeetCode and 100+ on other platforms</div>
        </div>

      </div>
      
    
    </div>
  )
}

export default Achievements