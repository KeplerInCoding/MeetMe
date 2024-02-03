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
    <div className='h-[3000px] w-full bg-gradient-to-b from-teal-600 to-teal-950'>
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