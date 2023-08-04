import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';
import profile from '../assets/hero.jpg';
import lead from '../assets/Martin.jpg';
import trainer from '../assets/Bilha.jpg';
import it from '../assets/val.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollToTopButton from './ScrollToTopButton';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';


const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
//handling dropdown menus 
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
//testimonials
  const data = [
    {
      object: 'Our Purpose',
      answer: 'We exist to positively enhance our clients’ capacities through innovative software systems and training',
    },
    {
      object: 'Mission',
      answer: 'To provide quality and comprehensive support to our clients through innovative software systems, training and compliance.',
    },
    {
      object: 'Vision',
      answer: 'To be the global champion of innovative software systems that promote efficiency to our clients',
    },
    {
      object: 'Core Values',
      answer: ' (a). Integrity, (b). Self Belief, (c). Humility, (d). Creativity & Innovation',
    },
  ];

 
  return (
    <div id="about" className="w-full h-screen py-8 mt-8">
      <Navbar />
      <div className="mx-auto flex flex-col py-10  w-full md:w-full md:flex-row items-center">
  
    {/* starting of the about page */}
    <div className=" sm:ml-8 ">

    
    <h1 className="mt-0  flex justify-start text-[#4c4c62] font-josefin mb-1 ml-12 font-bold text-3xl sm:text-1xl p-2">
      About Us
      
    </h1>
     
    <Link
    to="vision"
    smooth={true}
    duration={500}
    className=" font-josefin md:ml-14 text-[#4c4c62] font-semibold hover:border-b-2 hover:border-[#2e881cd2] hover:text-[#2e881cd2]  hover:cursor-pointer"
  >
    Vision
  </Link>
  <span className="border-l border-[#2e881cd2] mx-2 h-4"></span>
  <Link
    to="mission"
    smooth={true}
    duration={500}
    className=" font-josefin ml-2 text-[#4c4c62] font-semibold hover:border-b-2 hover:border-[#2e881cd2] hover:text-[#2e881cd2]  hover:cursor-pointer"
  >
    Mission
  </Link>
  <span className="border-l border-[#2e881cd2] mx-2 h-4"></span>
  <Link
    to="ourPurpose"
    smooth={true}
    duration={500}
    className=" font-josefin ml-2 text-[#4c4c62] font-semibold hover:border-b-2 hover:border-[#2e881cd2] hover:text-[#2e881cd2]  hover:cursor-pointer"
  >
    Our Purpose
  </Link>
  <span className="border-l border-[#2e881cd2] mx-2 h-4"></span>
  <Link
    to="corevalues"
    smooth={true}
    duration={500}
    className=" font-josefin ml-2 text-[#4c4c62] font-semibold hover:border-b-2 hover:border-[#2e881cd2] hover:text-[#2e881cd2]  hover:cursor-pointer"
  >
    Core Values
  </Link>
  <span className="border-l border-[#2e881cd2] mx-2 h-4"></span>
    
    <Link
    to="ourPeople"
    smooth={true}
    duration={500}
    className=" font-josefin ml-2 text-[#4c4c62] font-semibold hover:border-b-2 hover:border-[#2e881cd2] hover:text-[#2e881cd2]  hover:cursor-pointer"
  >
    Our People
  </Link>
      
  <div className=" sm:block md:block   items-center lg:flex-row lg:items-center md:mt-4">
   
  <LazyLoadImage
        src={profile}
        alt="home"
        
        className="w-3/4 lg:w-[700px] ml-8 rounded-full object-cover mb-1 lg:h-[400px]"
      />
    <p className="text-xl italic flex justify-center font-josefin text-[#2e881cd2]    md:mt-3  ">
        Simple 
        <span className='text-gray-900 ml-2 mr-2'>◆</span>
         Through 
         <span className='text-gray-900 ml-2 mr-2'>◆</span>
          Efficient
      </p>  

  </div>
</div>
<div className=" mr-6 items-center space-x-8  mt-2 lg:py-2 md:mx-12 lg:mx-4  lg:m-12 w-full sm:w-3/4 ">
   <Fade right>
    <h2 className="text-2xl ml-8 py-1 font-josefin">
      <span className="border-b border-[#0000ff] text-[#000e5d]">Who we are </span>
    </h2> </Fade>
    <Fade bottom>
    <p className="text-small  font-nunito   lg:mt-1">
    <span className='font-semibold'>Birthmark Limited </span> is a Kenyan company registered in 2004 as Birthmark Systems and incorporated as Birthmark Limited in 2015. <br />
      We specialize in providing high-quality management software systems and training services primarily for the insurance brokerage sector. <br />
      Our services include custom software development, systems evaluation and audit, management reporting, database consultancy, and needs analysis for proposed systems. <br />
      We believe in building technological capacity to enhance operational efficiency and effectiveness. <br />
      Our goal is to empower clients with efficient software solutions for transparent and cost-effective service delivery. <br />
      We optimize software resources for client success and provide valuable evaluation tools to measure impact.
    </p>

    <h2 className="text-2xl font-josefin text-[#000e5d] mb-1  mt-2 ">
    
     <span className="border-b border-[#0000ff] text-[#000e5d]"> How we deliver </span>
    </h2>
    <p className="font-nunito">
    <span className='font-semibold'>Birthmark Limited </span> empowers clients with top-notch insurance management software and training services.
      <br />
      We provide efficient solutions for streamlined operations and cost-effective service delivery, ensuring that our
      clients receive the best possible support in the insurance industry.
      
    </p>
    </Fade>
  </div>
 
</div>
{/* dropdown menus */}
      <div 
       id='ourPurpose'
      className="flex-col py-8 flex  justify-center w-full space-x-0 sm:flex-row md:space-x-14 md:space-y-8 mx-auto bg-scroll " >
      
        <div className="max-w-md mx-6 mt-8 md:w-1/2">
      <Fade top>
        {data.slice(0, 2).map((about, index) => (
          <div key={index} id="mission" className="mb-8 with-shadow">
            <button
              className={`bg-[#000e5d] font-josefin text-white text-xl py-5 px-4 rounded w-full text-center transition-colors duration-300 ${
                activeIndex === index ? 'bg-[#2e881cd2]' : ''
              }`}
              onClick={() => handleToggle(index)}
            >
              {about.object}{' '}
              {activeIndex === index ? (
                <BiSolidUpArrow className="inline ml-1" />
              ) : (
                <BiSolidDownArrow className="inline ml-1" />
              )}
            </button>
            {activeIndex === index && (
              <div className="bg-gray-100 p-4 font-nunito font-semibold">{about.answer}</div>
            )}
          </div>
        ))}
      </Fade>
    </div>
    <div id='vision' className="max-w-md mx-6 mt-8 md:w-1/2">
  <Fade top>
    {data.slice(2, 4).map((about, index) => (
      <div key={index} id="corevalues" className="mb-8 with-shadow">
        <button
          className={`bg-[#000e5d] font-josefin text-white text-xl py-5 px-4 rounded w-full text-center transition-colors duration-300 ${
            activeIndex === index + 2 ? 'bg-[#2e881cd2]' : ''
          }`}
          onClick={() => handleToggle(index + 2)}
        >
          {about.object}{' '}
          {activeIndex === index + 2 ? (
            <BiSolidUpArrow className="inline ml-1" />
          ) : (
            <BiSolidDownArrow className="inline ml-1" />
          )}
        </button>
        {activeIndex === index + 2 && (
          <div 
          
          className="bg-gray-100 p-4 font-nunito font-semibold">
            {about.object === 'Vision' ? (
              <p>{about.answer}</p>
            ) : (
              <ul>
                {about.answer.split(', ').map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    ))}
  </Fade>
</div>
     </div>
{/*Our people */}
      <div 
     id='ourPeople'
      className="mx-auto lg:mt-16 lg:py-8 sm:mt-16 flex justify-center">
        <p className="font-semibold text-2xl font-josefin text-center italic relative">
          <span className="before-after-line"></span>
          Our People
          <span className="before-after-line"></span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <Slide left>
          <div className="bg-gray-100 rounded-lg p-6 hover:scale-105 transition-all">
            <img src={lead} className="rounded-full  animate-bounce-moderate" alt="" />
            <Fade top>
            <h2 className="text-xl font-josefin text-[#4c4c62] flex justify-center font-semibold">
              Martin <br />
              General Manager <br />
              Operations & Technical Support
            </h2>
            </Fade>
            <p className="mt-2 font-nunito ">
              I ensure smooth operations and customer satisfaction at Birthmark. My responsibilities include system evaluations
              and keeping users happy on the Birthmark Platform.
            </p>
            <Fade bottom>
            <p className="font-semibold italic mt-2">"Smile! A great experience awaits you."</p>
            </Fade>
          </div>
          </Slide>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <Slide right>
          <div className="bg-gray-100 rounded-lg p-6 hover:scale-105 transition-all">
            <img src={trainer} className="rounded-full animate-bounce-moderate" alt="" />
            <Fade top>
            <h2 className="text-xl font-josefin text-[#4c4c62] flex justify-center font-semibold">
              Bilha <br />
              Lead Trainer <br />
              Underwriting & Claims
            </h2>
            </Fade>
            <p className="mt-2 font-nunito">
              I provide training and support for Birthmark users, ensuring they have the necessary skills to utilize the
              Underwriting and Claims sections. I onboard non-insurance users to the Birthmark Platform.
            </p>
            <Fade bottom>
            <p className="font-semibold italic mt-2">"Transforming users, transforming businesses."</p>
            </Fade>
          </div>
          </Slide>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
         <Slide right>
          <div className="bg-gray-100 rounded-lg p-6 hover:scale-105 transition-all">
            <img src={it} className="rounded-full md:mt-3 animate-bounce-moderate" alt="" />
           <Fade top>
            <h2 className="text-xl md:mt-9 font-josefin text-[#4c4c62]  flex justify-center font-semibold">
               
              Valentine <br />
Technical Support
            </h2>
            </Fade>
            <p className="md:mt-4 font-nunito mt-2">
            “My roles involve making sure that the system is technically stable and running flawlessly at all times for
all clients.
 I oversee the seamless operation and ensure that our clients receive a reliable experience.
            </p>
            <Fade bottom>
            <p className="font-semibold italic mt-2">“ Got a technical issue? Get in touch!”</p>
            </Fade>
          </div>
          </Slide>
        </div>
        
      </div>
      <ScrollToTopButton />
      <Footer /> 
    </div>
  );
};

export default About;
