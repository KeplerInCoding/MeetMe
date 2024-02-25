// data.js

// Importing images
import project1Image from './images/project1.jpg';
import project2Image from './images/project2.jpg';
// Add more image imports as needed

const projects = [
  {
    projectName: "Project 1",
    techStack: ["HTML", "CSS", "JavaScript"],
    time: "2 months",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio quis nulla eleifend blandit.",
    codeLink: "https://github.com/your-username/project1",
    siteLink: "https://www.project1.com",
    image: project1Image
  },
  {
    projectName: "Project 2",
    techStack: ["React", "Node.js", "MongoDB"],
    time: "3 weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio quis nulla eleifend blandit.",
    codeLink: "https://github.com/your-username/project2",
    siteLink: "https://www.project2.com",
    image: project2Image
  },
  // Add more projects as needed
];

export default projects;
