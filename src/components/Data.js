// data.js

// Importing images
import project1Image from '../images/MeetMe.png';
import project2Image from '../images/phobias.png';
import project3Image from '../images/vrCare.jpeg';
import project4Image from '../images/topCourses.png';
import project5Image from '../images/planWithLove.png';
import project6Image from '../images/myProfileCard.png';
import project7Image from '../images/weatherApp.png';
// Add more image imports as needed

const projects = [
  {
    projectName: "MeetMe",
    techStack: ["React and Tailwind"],
    description: "My portfiolio site. A place to showcase my work and connect with others.",
    codeLink: "https://github.com/KeplerInCoding/MeetMe",
    siteLink: "https://meet-me-gilt.vercel.app/",
    image: project1Image
  },

  {
    projectName: "AntiPhobia",
    techStack: ["Frontend, ML, VR (in team)"],
    description: "Website targeting individuals with phobias. VR-based exposure therapy for phobias. Comprehensive phobia information. Interactive chatbot for Q&A on phobias. Empowering users to face and conquer fears",
    codeLink: "https://github.com/KeplerInCoding/AntiPhobia",
    siteLink: "https://anti-phobia.vercel.app/",
    image: project2Image
  },
  {
    projectName: "VRcare",
    techStack: ["Frontend, ML, VR (in team)"],
    description: "Website to assist individual travelers who feelinsecure while journey, by proving them with real-time route tracking GPS feature from website andan SOS button. Alerts to emergency contacts on route deflection. Hotel recommendation. VR tour of destinations.",
    codeLink: "https://github.com/KeplerInCoding/Greedy2Code",
    siteLink: "https://greedy2-code.vercel.app/",
    image: project3Image
  },

  {
    projectName: "Top Courses",
    techStack: ["React and Tailwind"],
    description: "React app displaying filtered course’ cards(fetch API, useState, useEffect, icons, toasts).",
    codeLink: "https://github.com/KeplerInCoding/Top-Courses",
    siteLink: "https://top-courses-blue.vercel.app/",
    image: project4Image
  },

  {
    projectName: "Plan With Love",
    techStack: ["React and Tailwind"],
    description: "Cards for places to be travelled withbeautiful UI.",
    codeLink: "https://github.com/KeplerInCoding/Plan-With-Love-REACT-",
    siteLink: "https://plan-with-love-react.vercel.app/",
    image: project5Image
  },

  {
    projectName: "My Profile Card",
    techStack: ["Html and CSS"],
    description: "With respective links to my social mediaplatforms (inspired by link tree).",
    codeLink: "https://github.com/KeplerInCoding/My-Profile-Card",
    siteLink: "https://myprofilecard-shreyasharma.netlify.app/",
    image: project6Image
  },

  {
    projectName: "Weather Forecast API",
    techStack: ["Html and CSS"],
    description: "Fetch real time weather forecastof request and current locations.",
    codeLink: "https://github.com/KeplerInCoding/Weather-Forecast",
    siteLink: "https://weather-forecast-001.vercel.app/",
    image: project7Image
  },
];

export default projects;
