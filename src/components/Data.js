// data.js

// Importing images
import project1Image from '../images/MeetMe.png';
import project2Image from '../images/phobias.png';
import project3Image from '../images/vrCare.jpeg';
import project4Image from '../images/topCourses.png';
import project5Image from '../images/planWithLove.png';
import project6Image from '../images/myProfileCard.png';
import project7Image from '../images/weatherApp.png';
import project0Image from '../images/flipzon.png';
import project8Image from '../images/rakshak.png';
// Add more image imports as needed

const projects = [
  {
    projectName: "FlipZone - Ecommerce Website",
    techStack: ["MERN Stack and Tailwind - Individual"],
    description: "Dynamic and responsive admin and user routes, including an admin dashboard for product management (CRUD operations). Product search and filter functionalities. User authentication and secure payment method integration. Utilized React, Redux, and MUI to create a responsive and interactive user interface.",
    codeLink: "https://github.com/KeplerInCoding/E_commerce_website",
    siteLink: "",
    image: project0Image
  },

  {
    projectName: "MeetMe",
    techStack: ["React and Tailwind - Individual"],
    description: "My portfiolio site. A place to showcase my work and connect with others.",
    codeLink: "https://github.com/KeplerInCoding/MeetMe",
    siteLink: "https://meet-me-gilt.vercel.app/",
    image: project1Image
  },

  {
    projectName: "AntiPhobia",
    techStack: ["Frontend, ML, VR - Team"],
    description: "Website targeting individuals with phobias. VR-based exposure therapy for phobias. Comprehensive phobia information. Interactive chatbot for Q&A on phobias. Empowering users to face and conquer fears",
    codeLink: "https://github.com/KeplerInCoding/AntiPhobia",
    siteLink: "https://anti-phobia.vercel.app/",
    image: project2Image
  },

  {
    projectName: "Rakshak",
    techStack: ["React and Tailwind - Individual"],
    description: "Disaster management platform (only Frontend) for SIH idea presentation. ML to detect potential disaster zones and alert local authorities in real time. Satellite scans to predict casualties, data upload for disaster analysis, and a verification system for ML alerts. User-friendly interface for entering disaster-related data, reviewing alerts, and visualizing key insights through maps.",
    codeLink: "https://github.com/KeplerInCoding/Rakhshak",
    siteLink: "https://rakhshak.vercel.app/",
    image: project8Image
  },


  {
    projectName: "VRcare",
    techStack: ["Frontend, ML, VR - Team"],
    description: "Website to assist individual travelers who feelinsecure while journey, by proving them with real-time route tracking GPS feature from website andan SOS button. Alerts to emergency contacts on route deflection. Hotel recommendation. VR tour of destinations.",
    codeLink: "https://github.com/KeplerInCoding/Greedy2Code",
    siteLink: "https://greedy2-code.vercel.app/",
    image: project3Image
  },

  {
    projectName: "Top Courses",
    techStack: ["React and Tailwind - Individual"],
    description: "React app displaying filtered course’ cards(fetch API, useState, useEffect, icons, toasts).",
    codeLink: "https://github.com/KeplerInCoding/Top-Courses",
    siteLink: "https://top-courses-blue.vercel.app/",
    image: project4Image
  },

  {
    projectName: "Plan With Love",
    techStack: ["React and Tailwind - Individual"],
    description: "Cards for places to be travelled withbeautiful UI.",
    codeLink: "https://github.com/KeplerInCoding/Plan-With-Love-REACT-",
    siteLink: "https://plan-with-love-react.vercel.app/",
    image: project5Image
  },

  {
    projectName: "My Profile Card",
    techStack: ["Html and CSS - Individual"],
    description: "With respective links to my social mediaplatforms (inspired by link tree).",
    codeLink: "https://github.com/KeplerInCoding/My-Profile-Card",
    siteLink: "https://myprofilecard-shreyasharma.netlify.app/",
    image: project6Image
  },

  {
    projectName: "Weather Forecast API",
    techStack: ["Html and CSS - Individual"],
    description: "Fetch real time weather forecastof request and current locations.",
    codeLink: "https://github.com/KeplerInCoding/Weather-Forecast",
    siteLink: "https://weather-forecast-001.vercel.app/",
    image: project7Image
  },
];

export default projects;
