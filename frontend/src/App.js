import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import "./style.css"
import Internships from './components/Internships'
import Cocurricular from './components/Cocurricular'

const App = () => {
  return (
    <div className='content overflow-x-hidden w-fit bg-gradient-to-r from-yellow-100 via-rose-200 to-yellow-100 flex flex-col items-center'>
      <Navbar/>
      <HeroSection/>
      <Education/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Certifications/>
      <Internships/>
      <Cocurricular/>
      <ContactMe/>
    </div>
  )
}

export default App