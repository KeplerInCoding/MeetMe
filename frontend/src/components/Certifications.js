import React from 'react';
import "../style.css";
import cd from "../images/code_help.png";
import pp from "../images/programming_pathsala.png";
import ac from "../images/awscloud.png";

const certificationsData = [
  {
    name: 'Data Structures and Algorithms & Fundamentals of Web Development Course',
    image: cd // Replace with the actual path to the image
  },
  {
    name: 'Web Development Bootcamp-MERN',
    image: pp
  },
  {
    name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    image: ac
  },
  {
    name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    image: ac
  }
];

const Certifications = () => {
  return (
    <div className="my-20 w-fit flex flex-col items-center p-4">
      <div className='heading font-extrabold text-black text-5xl mb-10 text-center'>CERTIFICATIONS</div>
      <div className='w-1/2 h-[2px] bg-black text-center mb-20'></div>
      <div className='flex flex-wrap justify-center gap-10'>
        {certificationsData.map((cert, index) => (
          <div key={index} className='bg-black/10 shadow-lg overflow-hidden w-80 shadow-pink-900'>
            <img src={cert.image} alt={cert.name} className='w-fit h-60 object-cover'/>
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>{cert.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
