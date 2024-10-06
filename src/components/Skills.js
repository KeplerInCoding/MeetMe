import React from 'react';
import "../style.css"

const skills = {
  languages: ['C++/C', 'JavaScript', 'HTML/CSS', 'Node,js', 'Python'],
  tools: ['VS Code', 'Canva', 'Postman', 'GitHub', 'Git Bash'],
  frameworks: ['React.js', 'Tailwind', 'Material UI', 'Express.js'],
  course: ['SQL', 'DBMS', 'DSA', 'OOPS', 'CN']
};

const SkillCard = ({ title, skills }) => (
    <div className="relative p-6 m-4 w-60 h-80 flex justify-center items-center">
      <div className="absolute inset-0 bg-black/30 transform -rotate-6 rounded-lg shadow-lg"></div>
      <div className="relative h-60 w-60 bg-gradient-to-br from-yellow-100 to-rose-300 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <ul className="list-disc list-inside space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-700">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 p-6">
      <div className='heading text-black text-5xl my-10'>SKILLS</div>
      <div className='w-1/2 h-[2px] bg-black text-center mb-20'></div>

      <div className="flex flex-wrap justify-center items-center">
        <SkillCard title="Languages" skills={skills.languages} />
        <SkillCard title="Tools" skills={skills.tools} />
        <SkillCard title="Frameworks" skills={skills.frameworks} />
        <SkillCard title="Course Work" skills={skills.course} />
      </div>
    </div>
  );
};

export default Skills;
