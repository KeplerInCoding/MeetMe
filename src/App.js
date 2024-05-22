import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-[3000px] overflow-x-hidden w-fit bg-gradient-to-r from-yellow-100 via-rose-200 to-yellow-100 flex flex-col items-center'>
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