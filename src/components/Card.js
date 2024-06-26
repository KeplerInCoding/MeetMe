import React from 'react'

const Card = ({grade, name, time, place, degree}) => {

  return (
    <div className='flex gap-4'>
            <i className="fa-solid fa-paintbrush text-3xl text-gray-700 "></i>
            <div className='bg-black/20 w-72 border border-black shadow-black shadow-lg p-4 rounded-sm'>
                <div className='flex text-xl place-content-between border-b font-semibold py-2 border-black items-center'>       
                    <div >{name}</div>
                    <div>{time}</div>
                </div>
                <div className='mt-3 flex flex-col gap-1'>
                    <div className='flex  items-center gap-2'>
                      <i class="fa-solid fa-location-dot"></i>
                      <p>{place}</p>
                    </div>
                    <p>{degree}</p>
                    <p>{grade}</p>
                </div>
                
            </div>
    </div>
  )
}

export default Card