import React, { useState } from 'react';
import logo from '../images/OIG2__1_-removebg-preview.png';
import leetcode from '../images/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-screen'>
      <div className='h-16 z-20 w-screen bg-slate-800/60 backdrop-blur-sm border-b border-white fixed flex place-content-evenly items-center mb-16'>
        <div className='flex items-center'>
          <div className=' flex-shrink-0'><img src={logo} alt="logo" width="50px" /></div>
          <div className='font-serif font-extrabold text-gray-200 text-3xl'>HREYA SHARMA</div>
        </div>
        <div className='gap-4 text-2xl text-gray-200 flex-shrink-0 hidden md:flex'>
        <a href="https://www.linkedin.com/in/shreya-sharma-104278198/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/shr.yey/"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/Shreya___20"><i className="fab fa-twitter"></i></a>
          <a href="https://github.com/KeplerInCoding"><i className="fab fa-github"></i></a>
          <a href="https://open.spotify.com/user/au3j9dyoyj8pdrn04aul2u1t3"><i className="fab fa-spotify"></i></a>
          <a href="https://leetcode.com/shreyakv8/"><img src={leetcode} width="35px" alt="leetcode"/></a>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div className={`font-semibold md:hidden absolute text-2xl place-content-end right-0 top-[65px] p-5 bg-slate-800/60 text-white px-5 items-center flex gap-5 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
          <a href="https://www.linkedin.com/in/shreya-sharma-104278198/"><i className="hover:text-pink-200 fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/shr.yey/"><i className="hover:text-pink-200 fab fa-instagram"></i></a>
          <a href="https://twitter.com/Shreya___20"><i className="hover:text-pink-200 fab fa-twitter"></i></a>
          <a href="https://github.com/KeplerInCoding"><i className="hover:text-pink-200 fab fa-github"></i></a>
          <a href="https://open.spotify.com/user/au3j9dyoyj8pdrn04aul2u1t3"><i className="hover:text-pink-200 fab fa-spotify"></i></a>
          <a href="https://leetcode.com/shreyakv8/"><img src={leetcode} width="35px" alt="leetcode"/></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
