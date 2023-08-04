import React , { useEffect, useState , useRef  }from 'react'
import Navbar from './Navbar'
import profile from '../assets/light.jpg'
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';
import { Swiper,  SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation , Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo1 from '../assets/logo5.png'
import logo2 from '../assets/logo26.jpg'
import logo3 from '../assets/logo19.jpg'
import logo4 from '../assets/logo22.jpg'
import logo5 from '../assets/logo14.jpg'
import logo7 from '../assets/logo15.jpg'
import logo8 from '../assets/logo20.jpg'
import logo9 from '../assets/logo13.jpg'
import logo11 from '../assets/logo16.jpg'
import logo10 from '../assets/logo21.jpg'
import logo12 from '../assets/logo23.png'
import logo13 from '../assets/logo18.jpg'
import logo14 from '../assets/logo24.jpg'
import logo15 from '../assets/logo12.png'
import logo16 from '../assets/logo7.png'
import broker1 from '../assets/AMS.jpg';
import broker2 from '../assets/pelican.jpg'
import broker3 from '../assets/miran.jpg'
import broker4 from '../assets/sapon.jpg'
import broker5 from '../assets/acentria.jpg'
import broker6 from '../assets/package.jpg'
import broker7 from '../assets/convenor.jpg'
import broker9 from '../assets/lib.jpg'
import broker10 from '../assets/luxe.jpg'
import Fade from 'react-reveal/Fade';
import {GrUserSettings} from 'react-icons/gr'
import {BsPencilSquare} from 'react-icons/bs'
import {FaPeopleCarry} from 'react-icons/fa'
import {FcCalculator} from 'react-icons/fc'
import {MdOutlineWorkspacePremium} from 'react-icons/md';
import {GrDocumentStore} from 'react-icons/gr'
import {FcMoneyTransfer} from 'react-icons/fc'
import {PiOfficeChairBold} from 'react-icons/pi'
import {MdDocumentScanner} from 'react-icons/md'
import  {PiPhoneCallFill} from 'react-icons/pi';
import {MdMarkEmailUnread} from 'react-icons/md';
import {FcSms} from 'react-icons/fc'

const Home = () => {
  const [sentence1] = useState(" Transform . Achieve");
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  useEffect(() => {
//counter of the sentence
    let interval1 = setInterval(() => {
      setCurrentIndex1((currentIndex) => currentIndex + 1);
    }, 100);
    return () => 
    clearInterval(interval1);
    }, []);
  useEffect(() => {
//counter of clients
    let interval2 = setInterval(() => {
      setCurrentIndex2((currentIndex) => currentIndex + 1);
    }, 50);
    return () => 
    clearInterval(interval2);
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // setting navigation through the circles
SwiperCore.use([Navigation , Autoplay]); 
const [activeSlide, setActiveSlide] = useState(0);
const swiperRef = useRef(null);
const handleSlideChange = (index) => {
  setActiveSlide(index);
  swiperRef.current.swiper.slideTo(index);

   
};
//testimonials
const testimonialsData = [
  {
   image: broker1,
  },
  {
    image: broker2,
   },
   {
    image: broker3,
   },
   {
    image: broker4,
   },
   {
    image: broker5,
   },
   {
    image: broker6,
   },
   {
    image: broker7,
   },
   {
    image: broker9,
   },
   {
    image: broker10,
   },
  // Add more testimonial objects here of testimonials
]; 
  return (
    <div id='home'
    className=' w-full h-screen py-10 '
    > <Navbar/>
    
    {/*starting point */}
    <div className="mx-auto mt-6 py-1 sm:mt-16 flex flex-col sm:flex-row justify-center md:flex-row items-start lg:py-8 bg-scroll " style={{ backgroundImage: `url(${profile})` ,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', width: '100%', 
     }}>
  <div className="w-full md:w-1/2 mr-4  mt-6  ">
    <h1 className=" flex justify-center text-[#000e5d] font-josefin font-bold text-4xl sm:text-1xl p-2">
      Birthmark Limited
    </h1>
    <h2 className="ml-4  text-white  font-josefin flex justify-center font-semibold text-2xl lg:text-3xl">
      Innovate .
      {sentence1.slice(0, currentIndex1)}
    </h2>
    <p className="mt-3 p-2 md:text-white font-nunito flex justify-center text-xl sm:ml-2 ">Innovative software solutions for streamlined insurance brokerage.</p>
    <p className='font-nunito mt-3 p-2 flex justify-center text-xl sm:ml-2 text-white'> Software
    <span className="border-2 border-[#000000d2] mx-2 h-6"></span>
      Training
    <span className="border-2 border-[#000000d2] mx-2 h-6"></span>
      ICT Consultancy
    </p>
    <div className="w-full p-4">
      <div className="bg- mt-5 rounded-lg p-6 with-shadow flex justify-center">
        <div className="w-4">
          <div className="h-full bg-[#000e5d] rounded-lg animate-pulse"></div>
        </div>
        <div className="flex-1">
          <div className="text-center">
          <Fade top>
            <p className="text-2xl font-josefin mb-2 text-[#4c4c62] font-bold ">
              Contact Us
            </p>
            </Fade>
            <p className="mb-2 font-nunito font-semibold md:text-xl">
              <PiPhoneCallFill className="inline-block align-middle mt-1 mr-5" /> +254 20 232 4790
            </p>
            <p className="font-nunito font-semibold md:text-xl  ">
              <MdMarkEmailUnread className="inline-block  align-middle mt-1 mr-2" /> info@birthmark.co.ke
            </p>
          </div>
        </div>
        <div className="w-4">
          <div className="h-full bg-[#000e5d] rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
  
</div>

{/* services offered*/}
<div className="  m-4 py-4 md:mb-12  ">
<div className="w-full mt-4 p-4 ">
  <div className='flex justify-center'>
  
    <h2 className="text-2xl font-josefin text-[#000e5d] mb-1 font-bold">
      Birthmark Insurance System
    </h2>
  
  </div>
  <div className="bg-white rounded-lg p-">
    <Fade left>
    <h2 className="text-xl font-josefin text-[#000e5d] mb-1 font-semibold flex justify-center">
      For Insurance brokers , Bank Assurance and Agents.
    </h2>
    <p className="text-xl flex justify-center font-josefin text-[#2e881cd2]    md:mt-3  ">
        Simple 
        <span className='text-gray-900 ml-2 mr-2'>◆</span>
         Through 
         <span className='text-gray-900 ml-2 mr-2'>◆</span>
          Efficient
      </p>
   
    </Fade>
    <div className="lg:py-2 flex flex-row items-center justify-center ">
      <Fade top>
        <h2 className="text-2xl mt-2 font-josefin text-[#4c4c62]">Product  Features</h2>
      </Fade>
      <Fade top>
        <Link to="/ourProduct">
          <button
            className="px-4 py-3 border-3 ml-2 sm:ml-24 mb-2 mt-3 bg-[#000e5d] justify-center font-josefin text-white hover:bg-[#2e881cd2] hover:border-slate-600 rounded-full "
            onClick={scrollToTop}
          >
            View More
          </button>
        </Link>
      </Fade>
    </div>
  </div>
</div>


     <div className="flex flex-wrap justify-center m-4 p-4">
  <div className="w-full">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
      <Fade top>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <GrUserSettings className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center font-nunito">General Utilities</h1>
        </div>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <BsPencilSquare className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center font-nunito">Underwriting</h1>
        </div>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <FaPeopleCarry className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center font-nunito">Claim management</h1>
        </div>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <FcCalculator className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center font-nunito">Accounting</h1>
        </div>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <MdOutlineWorkspacePremium className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center font-nunito">Internal Premium Finance</h1>
        </div>
      </Fade>
    </div>
  </div>
</div>
<div className="flex justify-center m-4 p-4 ">
  <div className="w-full">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
      <Fade bottom>
        <div className="hover:scale-105  transition-all bg-gray-100 with-shadow">
          <GrDocumentStore className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center mx-auto font-nunito">Document management System</h1>
        </div>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <FcMoneyTransfer className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold  flex justify-center font-nunito">Payroll</h1>
        </div>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <PiOfficeChairBold className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center font-nunito">Front Office</h1>
        </div>
        <div className="hover:scale-105 transition-all bg-gray-100 with-shadow">
          <MdDocumentScanner className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center font-nunito">Reports</h1>
        </div>
        <div className="hover:scale-105  transition-all bg-gray-100 with-shadow ">
          <FcSms className="w-10 h-10 ml-16 flex justify-center" />
          <h1 className="font-semibold flex justify-center mx-auto font-nunito">SMS Intergration</h1>
        </div>
      </Fade>
    </div>
  </div>
</div>


       
       
      
  </div>       

{/* Testimonials  */}
<div className="max-w-4xl mb-3 mx-auto with-shadow">
<Fade left>
  <h1 className='text-2xl font-josefin font-semibold flex justify-center'>Testimonials</h1>
  <p className='flex justify-center font-josefin font-semibold'>What our clients saying....</p>
    </Fade>
      <Swiper
      ref={swiperRef}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 8000, // Transition delay between slides (in milliseconds)
          disableOnInteraction: false,// Continue autoplay even when user interacts with the slider
        }}
        className="mb-8"
        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center ">
              <Fade top>
              <div className="bg-white rounded-lg  p-8 mx-2">
             
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full  "
                  />
              </div>
              </Fade>
            </div>
          </SwiperSlide>
        ))}
        {/* Navigation container */}
      <div className="swiper-navigation-container flex justify-center items-center hover:cursor-pointer">
        {/* Navigation arrows */}
        <div
          className="swiper-button-next"
          onClick={() => handleSlideChange(activeSlide + 1)}
        >
          <FiChevronRight  />
        </div>
        <div
          className="swiper-button-prev"
          onClick={() => handleSlideChange(activeSlide - 1)}
        >
          <FiChevronLeft />
        </div>
        </div>
        {/* Testimonial navigation buttons */}
      <div className="flex justify-center mb-4 ">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${
              activeSlide === index ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
      </Swiper>
      
    </div>
   {/* some clients*/}
   <div 
      className="mx-auto mt-16  flex justify-center">
        
        <p className="font-semibold font-josefin text-2xl text-center italic relative">
          <span className="before-after-line"></span>
          Our Clients
          <span className="before-after-line"></span>
        </p>
      </div> 
      <div className="flex flex-wrap py-6 justify-center">
    
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-gray-100  rounded-lg p-6 with-shadow">
          
            <h2 className="text-3xl font-josefin flex justify-center text-[#4c4c62] font-bold">
              {currentIndex2 > 171 ? 171 : currentIndex2} 
            </h2>
            <p className='flex justify-center font-semibold font-nunito'>Total Clients</p>
           
          </div>
        </div>
        

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-gray-100 rounded-lg p-6 with-shadow">
         
            <h2 className="text-3xl flex font-josefin justify-center text-[#4c4c62] font-bold">
              {currentIndex2 > 81 ? 81 : currentIndex2} 
            </h2>
            <p className='flex justify-center font-semibold font-nunito'>Brokers</p>
            
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-gray-100 rounded-lg p-6 with-shadow">
          
            <h2 className="text-3xl font-josefin flex justify-center text-[#4c4c62] font-bold">
              {currentIndex2 > 86 ? 86 : currentIndex2} 
            </h2>
            <p className='flex justify-center font-semibold font-nunito'>Agents </p>
           
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-gray-100 rounded-lg p-6 with-shadow">
           
            <h2 className="text-3xl font-josefin flex justify-center text-[#4c4c62] font-bold">
              {currentIndex2 > 4 ? 4 : currentIndex2} 
            </h2>
            <p className='flex justify-center font-semibold font-nunito'>Bank Assurance</p>
          </div>
          </div>
        </div>
   

{/* slider of some clients */}
        <div className=" w-full m-4  bg-white  lg:w-full lg:mt-6">
 <Swiper
   
   loop={true}
   
   autoplay={{
     delay: 300, // Transition delay between slides (in milliseconds)
     disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
   }}
   className="mb-6"
   breakpoints={{
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
  }}
 >
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-8 hover:scale-105 transition-all">
      <img src={logo14} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-12 hover:scale-105 transition-all">
      <img src={logo16} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-4  hover:scale-105 transition-all">
      <img src={logo15} className="w-40 h-30 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-8 hover:scale-105 transition-all">
      <img src={logo3} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-8 hover:scale-105 transition-all">
      <img src={logo1} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg  mt-8 hover:scale-105 transition-all">
      <img src={logo4} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>


<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-8  hover:scale-105 transition-all">
      <img src={logo7} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-8 hover:scale-105 transition-all">
      <img src={logo2} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center  justify-center">
 <div className=" rounded-lg  mt-12 hover:scale-105 transition-all">
      <img src={logo8} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>

<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-8 hover:scale-105 transition-all">
      <img src={logo10} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-8 hover:scale-105 transition-all">
      <img src={logo11} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-12 hover:scale-105 transition-all">
      <img src={logo5} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg mt-12 hover:scale-105 transition-all">
      <img src={logo12} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />

    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center justify-center">
 <div className=" rounded-lg  hover:scale-105 transition-all">
      
  <img src={logo13} className='w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100' alt="" />
    </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="flex items-center   justify-center">
 <div className=" rounded-lg  hover:scale-105 transition-all">
      <img src={logo9} className="w-50 h-50 sm:w-50 sm:h-50 hover:bg-gray-100" alt="" />
    </div>
 </div>
</SwiperSlide>
 
 
 </Swiper>

   
</div>
      

      <ScrollToTopButton/>
      <Footer />
    </div>
  
        
     
  )
}

export default Home
