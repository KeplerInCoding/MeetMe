// SlideCards.js

import React from 'react';
import projects from './Data'; // Importing the projects array

const SlideCards = () => {
  return (
    <div className="flex m-10 p-5">
      {projects.map((project, index) => (
        <div key={index} className="w-96 shrink-0 rounded overflow-hidden shadow-lg mx-2">
          <img className="w-full" src={project.image} alt={project.projectName} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.projectName}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Tech Stack: {project.techStack.join(', ')}
            </span>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
              Code
            </a>
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
              Live Site
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideCards;
