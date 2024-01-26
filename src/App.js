import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' bg-blue-400'>
      <Navbar/>
      <HeroSection/>
      <Education/>
      <Skills/>
      <Projects/>
      <Experience/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App