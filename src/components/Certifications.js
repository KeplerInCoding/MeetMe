import React from 'react';
import "../style.css";
import cd from "../images/code_help.png";
import pp from "../images/programming_pathsala.png";

const certificationsData = [
  {
    name: 'Data Structures and Algorithms & Fundamentals of Web Development Course',
    description: 'Completed a comprehensive course on Data Structures, Algorithms, and Web Development fundamentals from Programming Pathshala.',
    image: cd // Replace with the actual path to the image
  },
  {
    name: 'Web Development Bootcamp-MERN',
    description: 'Participated in an intensive Web Development Bootcamp focused on the MERN stack, conducted by Love Babbar.',
    image: pp
  }
];

const Certifications = () => {
  return (
    <div className="container mx-auto p-4">
      <div className='heading font-extrabold text-black text-5xl mb-10 text-center'>CERTIFICATIONS</div>
      <div className='flex flex-wrap justify-center gap-20'>
        {certificationsData.map((cert, index) => (
          <div key={index} className='bg-black/10 shadow-lg overflow-hidden w-80 shadow-pink-900'>
            <img src={cert.image} alt={cert.name} className='w-fit h-60 object-cover'/>
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>{cert.name}</h3>
              <p className='text-gray-700'>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
