import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Skills from './components/Skills'
import "./style.css"

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
      <Experience/>
      <ContactMe/>
      <Footer/>
      <div className=' text-center font-extrabold text-red-600 text-2xl m-20'>(WEBSITE UNDER DEVELOPMENT...)</div>
      
    </div>
  )
}

export default App