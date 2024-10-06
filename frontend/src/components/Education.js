import React from 'react';
import Card from './Card';
import "../style.css"

const Education = () => {
  return (
    <div className='py-20  w-full flex flex-col items-center'>
      <div className='heading font-extrabold text-black text-5xl my-10'>EDUCATION</div>
      <div className='w-1/2 h-[2px] bg-black text-center mb-20'></div>
      
      <div className='flex md:w-8/12  flex-col gap-10 '>
        <div className=' place-self-start'><Card grade={'CGPA : 8'} name={'KIET Groups of Institutions'} time={'2021-25'} place={'Ghaziabad, Delhi NCR'} degree={'B.Tech - CSE'}/></div>
        <div className=' place-self-center'><Card grade={'95%'} name={'K.V. Akkulam'} time={'2020'} place={'Thiruvananthapuram'} degree={'Class 12th (CBSE)'}/></div>
        <div className=' place-self-end'><Card grade={'97%'} name={'K.V. Uttarlai'} time={'2018'} place={'Rajasthan'} degree={'Class 10th (CBSE)'}/></div>
      </div>
    </div>
  );
}

export default Education;
