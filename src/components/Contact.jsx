import React , {useState , useRef}from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
 import Fade from 'react-reveal/Fade';
 import { PiPhoneCallFill } from 'react-icons/pi';
 import { MdMarkEmailUnread } from 'react-icons/md';
 import {FaTwitterSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com';
import {BsInstagram} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'
import phone from '../assets/phone.jpg'
;

const Contact = () => {
 
  
  const [showMessage, setShowMessage] = useState(false);

  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    message: '',
    
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    
  });
  const form = useRef();
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
  
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      // If there are no errors, send the email
      const formElement = document.getElementById('contactForm');
      if (formElement) {
        emailjs
          .sendForm('service_p4c9q7i', 'template_e4uiceq', formElement, 'oWvYhnKR3tjLDhfW_')
          .then(
            (result) => {
              console.log(result.text);
              // Reset form data if needed after sending the email
              setFormData({
                name: '',
                email: '',
                message: '',
              });
              setErrors({});
              setShowMessage(true); // Set showMessage to true after successful submission
              setTimeout(() => {
                setShowMessage(false);
              }, 4000);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div id="contact" className=" w-full h-screen justify-center items-center py-12 mt-6">
      <Navbar />
      
      <div className='w-full flex flex-col md:flex-row md:space-x-6  space-y-10  p-10 text-white shadow-lg items-center'>
      <div className='py-3 space-x-2 h-80 items-center w-full md:w-1/2 lg:w-1/2 sm:rounded-full 'style={{ backgroundImage: `url(${phone})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
    }}>
        
      <p className="text-2xl font-josefin md:mt-6 font-xl   flex justify-center">
      <span className="border-b  border-[#0000ff] text">Let's get in touch</span>   
              </p>
          <p className="mb-5 md:mt-16 font-nunito font- flex justify-center">

                <PiPhoneCallFill className="inline-block align-middle mt-1 mr-5 text-xl " /> +254 20 232 4790
              </p>
              <p className="font-nunito mb-5   flex justify-center">
                <MdMarkEmailUnread className="inline-block align-middle mt-1 mr-2 text-xl" />  info@birthmark.co.ke
              </p>
              <p className="font-nunito mb-5 flex justify-center">
                <MdLocationPin className="inline-block align-middle mt-1 mr-2 text-xl" />  Aqua plaza , 4th floor , Muranga Road <br/>
    
              </p>  
              <div className=' space-x-4 text-lg flex justify-center animate-bounce-moderate'>
                <Fade top>
            
          <a href ="https://www.linkedin.com/in/birthmark-limited-98b224234">
              <button className=' ml-2'><BsLinkedin/></button> </a>
              <a href ="https://instagram.com/birthmarklimited?igshid=MzRlODBiNWFlZA==">
              <button className=' ml-2'><BsInstagram/></button> </a>
              <a href ="https://twitter.com/BackupBirthmark?t=3X-cTNExtlPmJVIOczj6Ig&s=09">
          <button className=' ml-2 '><FaTwitterSquare/></button> </a>
               </Fade>
          </div> 
          </div>
          {/*Contact form*/ }
<div className='bg-gray-100 rounded-xl with-shadow md:w-64 lg:w-1/2'>
        <Fade right>
          <form
          ref={form} 
          id="contactForm"
          className="flex font-nunito space-y-4 flex-col mb-3 w-full " 
          onSubmit={handleSubmit}>
            <p className="text-xl mt-4 text-[#000e5d] flex justify-center font-bold">Send us a message and we will get back to you! </p>
            <input
              className="py-2 px-12 m-2 mb-2 with-shadow text-[#000e5d] bg-slate-300 outline-none"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="text-red-500 font-josefin flex justify-center">{errors.name}</p>}

            <input
  className="py-2 px-12 m-2 with-shadow text-[#000e5d] bg-slate-300 outline-none"
  type="email"
  placeholder="Email"
  name="email"
  value={formData.email}
  onChange={handleInputChange}  
/>  
{errors.email && <p className="text-red-500 font-josefin flex justify-center">{errors.email}</p>}
            <textarea
              className="py-2 px-12 with-shadow text-[#000e5d] bg-slate-300 outline-none m-2"
              rows="5"
              placeholder="Message..."
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <p className="text-red-500 font-josefin flex justify-center">{errors.message}</p>}
            
  <button
    type="submit"
    className="px-8 py-3 border-3 font-josefin mx-auto  mt-3 bg-[#2e881cd2] flex justify-center text-white hover:bg-[#000e5d] hover:border-slate-600 rounded-tl-full rounded-br-full"  
  >
    Send Email
  </button>
  {showMessage && <p className="text-center text-[#000e5d] font-josefin mt-3">Submitted.</p>}
          </form>
          
        </Fade>
        </div>
      </div>  
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Contact;
