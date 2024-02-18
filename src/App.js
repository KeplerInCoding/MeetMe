import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-[3000px] w-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 flex flex-col items-center'>
      <Navbar/>
      <HeroSection/>
      <Education/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App