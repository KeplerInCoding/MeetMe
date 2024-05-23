
import React from 'react';
import projects from './Data'; 

const SlideCards = () => {
  return (
    <div className="flex md:mx-10 mx-5 w-fit slider-container">
      {projects.map((project, index) => (
        <div key={index} className="w-96 border border-black shrink-0 rounded overflow-hidden shadow-lg mx-2 bg-black/20">
          <img className="w-full" src={project.image} alt={project.projectName} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.projectName}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
          <div className="px-6 py-4 flex flex-col justify-centre text-center">
            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 m-5">
              Tech Stack: {project.techStack.join(', ')}
            </div>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold mr-2 m-5">
              Code
            </a>
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold m-5">
              Live Site
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideCards;
