
import React, { useEffect, useState } from 'react';
import {FaTwitterSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs';

import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

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

  return (
    <footer
      className={`bg-gradient-to-r from-[#2e881cd2] to-from-blue-800 to-[#000e5d] py-12 px-0 sm:px-16 flex justify-between  items-center bottom-0 left-0 w-full ${
        isFixed ? 'z-1' : 'z-auto'
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-4 gap-4">
          <div>
          <h3 className="text-lg font-josefin text-gray-900 font-bold relative">
  <span className=" ml-4">
    Birthmark Limited
  </span>
  <span className="absolute left-0 top-1 h-5  bg-white w-1"></span>
</h3>

            <p className="mb-3 mt-2 text-white font-nunito ">
            Innovate.Transform.Achieve
              </p>
          </div>
          <div>
          <h3 className="text-lg font-josefin text-gray-900 font-bold relative">
  <span className=" ml-4">
    How to find Us
  </span>
  <span className="absolute left-0 top-1 h-5  bg-white w-1"></span>
</h3>
            <p className='font-nunito text-white'>
             Aqua Plaza , 4th floor , Muranga road <br/>
              P.O Box 66042 - 00800 Nairobi. <br/>
              Email: info@birthmark.co.ke <br />
              Tel: +254 20 232 4790 
            </p>
          </div>
          <div>
          <h3 className="text-lg font-josefin text-gray-900 font-bold relative">
  <span className=" ml-4">
    Connect with Us
  </span>
  <span className="absolute left-0 top-1 h-5  bg-white w-1"></span>
</h3>
              <h4 className='mt-2 text-gray-100 ml-2 '>@birthmarklimited</h4>
            <p className="mb-3 mt-3 font-nunito animate-bounce-moderate">
            
             <a
              href="https://www.linkedin.com/in/birthmark-limited-98b224234"
            >
              <button className='bg-white ml-6'><BsLinkedin/></button>
            </a>
             <a
              href="https://instagram.com/birthmarklimited?igshid=MzRlODBiNWFlZA=="
            >
              <button className=' ml-4'><BsInstagram/></button>
            </a>
            <a
              href="https://twitter.com/BackupBirthmark?t=3X-cTNExtlPmJVIOczj6Ig&s=09"
            >
              <button className='bg-white ml-4 '><FaTwitterSquare/></button>
            </a>
            </p>
          </div>
        </div>
        <div className='flex justify-center mt-4 font-josefin font-bold italic'>Copyright @2023 - Birthmark Limited</div>
      </div>
    </footer>
  );
};

export default Footer;
