
import React from 'react';
import projects from './Data'; 

const SlideCards = () => {
  return (
    <div className="flex md:mx-10 mx-5 w-fit slider-container">
      {projects.map((project, index) => (
        <div key={index} className="w-96 border border-black flex flex-col place-content-between shrink-0 rounded overflow-hidden shadow-lg mx-2 bg-black/20">
          <div>
            <img className="w-full" src={project.image} alt={project.projectName} />
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">{project.projectName}</div>
              <p className="text-gray-800 text-lg">{project.description}</p>
            </div>
          </div>
          <div className=" font-sans px-6 flex flex-col justify-centre text-center text-white">
            <div className="inline-block bg-gradient-to-l from-teal-900 via-teal-700 to-teal-900 hover:bg-gradient-to-l px-3 py-1 font-semibold mr-2 m-2">
              {project.techStack.join(', ')}
            </div>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-l from-rose-700 to-gray-700 hover:bg-gradient-to-l hover:from-black/70 hover:to-red-800 inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold mr-2 m-2">
              Code
            </a>
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-l from-green-900 to-black/70 hover:bg-gradient-to-l hover:from-black/70 mb-5 hover:to-green-800 rounded-full px-3 py-1 text-sm font-semibold m-2">
              Live Site
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideCards;
