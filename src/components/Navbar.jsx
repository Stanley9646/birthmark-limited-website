import React, { useEffect, useState } from 'react';
import logo from '../assets/birth.png'
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { Fade } from 'react-reveal';
import {Slide} from 'react-reveal'


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
//setting a fixed navabar at the top
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0 && !isFixed) {
        setIsFixed(true);
      } else if (window.pageYOffset === 0 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <nav
      id="navbar"
      className={`py-1 px-0 font-nunito  sm:px-16  flex justify-center   fixed top-0 left-0 w-full lg:flex flex-col    ${
        isFixed ? 'z-10 bg-[#2e881cd2]' : 'z-auto bg-[#000e5d]'
      }`}
    >
       <div className="mt-1 bg-slate-300 w-40 lg:w-60  rounded-lg">
        <Link to="/home">
          <img src={logo}
          onClick={scrollToTop}
          className='h-16 rounded hover:with-shadow' alt="" />
        </Link>
      </div>
     {/* the toggle/menu and remove buttons */}
     <Fade top>
      <div className="sm:hidden relative flex justify-end">
        <button
          onClick={toggleDropdown}
          className="text-white  hover:text-gray-400 transition-colors duration-300"
        >
          {isDropdownOpen ? (
            <HiX className=" h-6 w-6" />
          ) : (
            <HiMenuAlt2 className="h-6 w-6" />
          )}
        </button>

        {/*in smaller screens*/}
        <Slide top>
        {isDropdownOpen && (  
          <div className="absolute top-7 right-0 w-full bg-[#00000080] py-4 px-4 transform translate-y-0 transition-transform duration-300 ease-in-out ">
            <Fade right>
            <div className="  space-y-3 flex flex-col items-center ">
              <Link
                to="/home"
                className={`text-white hover:text-gray-100 transition-colors duration-300 py-3 ${
                  location.pathname === '/home' ? ' text-blue-600 font-semibold with-shadow' : ''
                }`}
                onClick={() => {
                  closeDropdown();
                  scrollToTop();
                }}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-blue-600 transition-colors duration-300 py-3 ${
                  location.pathname === '/about' ? 'text-blue-600 font-semibold with-shadow' : ''
                }`}
                onClick={() => {
                  closeDropdown();
                  scrollToTop();
                }}
              >
                ABOUT US
              </Link>
              <Link
                to="/ourProduct"
                className={`text-white hover:text-blue-600 transition-colors duration-300 py-3 ${
                  location.pathname === '/ourProduct' ? 'text-blue-600 font-semibold with-shadow' : ''
                }`}
                onClick={() => {
                  closeDropdown();
                  scrollToTop();
                }}
              >
                OUR PRODUCT
              </Link>
              <Link
                to="/clients"
                
                className={`text-white hover:text-blue-600 transition-colors duration-300 py-3 ${
                  location.pathname === '/clients' ? 'text-blue-600 font-semibold with-shadow' : ''
                }`}
                onClick={() => {
                  closeDropdown();
                  scrollToTop();
                }}
              >
                OUR CLIENTS
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className={`text-white hover:text-gray-100 transition-colors duration-300 py-3 ${
                  location.pathname === '/contact' ? 'text-blue-600 font-semibold with-shadow' : ''
                }`}
              >
                CONTACT
              </Link>
              
            </div>
            </Fade>
          </div>
        )}
        </Slide>
      </div>
      </Fade>
      {/* larger screen*/}
      <div
        className={`sm:flex items-center mr-4 justify-end mb-3   space-x-4 hidden ${
          isDropdownOpen ? 'block' : 'hidden'
        } mt-0`}
      >
<div className='mr- space-x-12 '>
        <Link
          to="/home"
          onClick={scrollToTop}
          className={`text-white  hover:text-blue-600   transition-colors duration-300 ${
            location.pathname === '/home' ? 'text-blue-600 with-shadow' : ''
          }`}
        >
          HOME
        </Link>
        <Link
          to="/about"
          onClick={scrollToTop}
          className={`text-white  hover:text-blue-600   transition-colors duration-300 ${
            location.pathname === '/about' ? 'text-blue-600 font-semibold with-shadow' : ''
          }`}
        >
          ABOUT US
        </Link>
        <Link
                to="/ourProduct"
                className={`text-white hover:text-blue-600 transition-colors duration-300 py-3 ${
                  location.pathname === '/ourProduct' ? 'text-blue-600 font-semibold with-shadow' : ''
                }`}
                onClick={scrollToTop}
              >
                OUR PRODUCT
              </Link>
        <Link
          to="/clients"
          onClick={scrollToTop}
          className={`text-white hover:text-blue-600   transition-colors duration-300 ${
            location.pathname === '/clients' ? 'text-blue-600 font-semibold with-shadow' : 'text-gray-100'
          }`}
        >
        OUR CLIENTS
        </Link>
        <Link
          to="/contact"
          onClick={scrollToTop}
          className={`text-white    hover:text-blue-600   transition-colors duration-300 ${
            location.pathname === '/contact' ? 'text-blue-600 font-semibold with-shadow' : ''
          }`}
        >
          CONTACT US
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
