import React, { useState } from 'react';
import logo from '../images/OIG2__1_-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='h-16 w-full bg-slate-800/60 backdrop-blur-sm border-b border-white fixed flex place-content-evenly items-center'>
        <div className='flex items-center'>
          <div className=' flex-shrink-0'><img src={logo} alt="logo" width="50px" /></div>
          <div className='font-serif font-extrabold text-gray-200 text-3xl'>HREYA SHARMA</div>
        </div>
        <div className='gap-4 text-2xl text-gray-200 flex-shrink-0 hidden md:flex'>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-discord"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-spotify"></i>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div className={`font-semibold md:hidden absolute text-2xl place-content-end right-0 top-[65px] p-5 bg-slate-800/60 text-white px-5 items-center flex gap-5 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
          <i className="hover:text-pink-200 fab fa-linkedin"></i>
          <i className="hover:text-pink-200 fab fa-instagram"></i>
          <i className="hover:text-pink-200 fab fa-discord"></i>
          <i className="hover:text-pink-200 fab fa-twitter"></i>
          <i className="hover:text-pink-200 fab fa-github"></i>
          <i className="hover:text-pink-200 fab fa-spotify"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
