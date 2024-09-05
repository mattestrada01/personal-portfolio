import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className="w-full flex justify-between items-center max-w-9xl mx-auto">
        <Link to="/" className="flex items-center gap-4" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Matt Estrada
          </p>        
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">

          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins cursor-pointer text-[18px] ${styles.navLink} ${styles.navLinkHover} 
              ${active === nav.title ? "text-white" : "text-secondary"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

            <button
              onClick={() => window.open('https://drive.google.com/file/d/1HmjsNAedleWM6wi1X9xeljGJoKyLCGjI/view?usp=sharing', '_blank')}
              className="hidden sm:flex flex-row gap-10 bg-transparent relative transition-all duration-300
                text-cyan-500 text-[17px] py-1 px-2 rounded-xl shadow-lg hover:bg-cyan-600 hover:text-white 
                transition-colors duration-400 ease-in-out -mt-1" style={{ border: '2px solid #06b6d4' }} aria-label="Resume"
             >
              Resume
            </button>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt='menu'
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${styles.navLink} 
                  ${styles.navLinkHover} ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              
              <li className="font-poppins font-medium cursor-pointer text-[16px] ${styles.navLink} ${styles.navLinkHover}">
                <button
                  onClick={() => window.open('https://drive.google.com/file/d/1HmjsNAedleWM6wi1X9xeljGJoKyLCGjI/view?usp=sharing', '_blank')}
                  className="bg-transparent border-2 border-cyan-500 text-cyan-500 text-[16px] py-1 px-2 rounded-2xl shadow-lg 
                  hover:bg-cyan-600 hover:text-white transition-colors duration-300 ease-in-out" aria-label="Resume"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
