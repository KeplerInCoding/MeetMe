import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='h-16 w-full bg-black/50 border-b-2 border-black fixed'>
        <div>
          <div>logo</div>
          <div>SHREYA SHARMA</div>
        </div>
        <div>
          <div>
          <i class="fa-regular fa-user"></i>
          </div>
          <div>Education</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Experience</div>
          <div>Contact Me</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar