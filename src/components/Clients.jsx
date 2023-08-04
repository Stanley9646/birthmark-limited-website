import React , { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

import logo1 from '../assets/logo12.png'
import logo2 from '../assets/logo3.png'
import logo3 from '../assets/logo1.jpg'
import logo4 from '../assets/logo17.png'
import logo5 from '../assets/logo7.png'
import logo7 from '../assets/logo9.jpg'
import logo8 from '../assets/logo8.png'
import logo11 from '../assets/logo11.png'
import logo10 from '../assets/logo10.png'
import logo12 from '../assets/logo2.png';

import Fade from 'react-reveal/Fade';

const Clients = () => {
//Counter of clients
  const [ currentIndex2, setCurrentIndex2] = useState(0);
  useEffect(() => {
    
    let interval2 = setInterval(() => {
      setCurrentIndex2((currentIndex) => currentIndex + 1);
    }, 5);
    return () => 
    clearInterval(interval2);
    
   
  }, []);

  
  return (
    <div id="clients" className="w-full h-screen py-14 mt-6">
<Navbar/>
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
        <div className="mx-auto  flex justify-center">
<p className='font-semibold text-[#000e5d] font-josefin flex justify-center md:text-xl'> 
Our clients include big and small insurance intermediaries based in East Africa.
 </p>
  </div>
  <h2 className='font-josefin text-[#000e5d] mb-1 font-semibold flex justify-center md:text-xl'>
    Our total clientele included over 164 Insurance Brokers, Bank Assurance and Agents.
  </h2>

      {/* logos of some of the cliets */}
      <div 
      className="mx-auto mt-16  flex justify-center">
        <p className="font-semibold font-josefin text-2xl text-center italic relative">
          <span className="before-after-line"></span>
          Our Clients
          <span className="before-after-line"></span>
        </p>
      </div>

<div className="flex justify-center  m-4">
 
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto relative">
  <Fade left>
    <div className=" rounded-lg hover:scale-105 transition-all">
      <img src={logo1} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className=" rounded-lg hover:scale-105 transition-all">
      <img src={logo2} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className=" rounded-lg hover:scale-105 transition-all">
      <img src={logo7} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className=" rounded-lg  hover:scale-105 transition-all">
      <img src={logo10} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className="m-2 rounded-lg hover:scale-105 transition-all">
      <img src={logo5} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    </Fade>
  </div> 
</div>
<div className="flex justify-center p-4 m-4">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto  ">
  <Fade right>
    <div className=" rounded-lg hover:scale-105 transition-all">
      <img src={logo12} className="w-40 h-40  sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className=" rounded-lg  hover:scale-105 transition-all">
      <img src={logo3} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className=" rounded-lg hover:scale-105 transition-all">
      <img src={logo11} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className=" rounded-lg hover:scale-105 transition-all">
      <img src={logo8} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    <div className="m-2 rounded-lg hover:scale-105 transition-all">
      <img src={logo4} className="w-40 h-40 sm:w-50 sm:h-50 " alt="" />
    </div>
    </Fade>
  </div>
</div>
{/* Insurance brokers */}
      <div className="w-full  p-4">
    <div className="bg-gray-100 rounded-lg p-6 with-shadow">
      <Fade top>
      <h2 className="text-2xl font-josefin flex justify-center text-[#4c4c62] font-bold">
      Insurance Brokers
      </h2>
      </Fade>
      <Fade bottom>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 font-nunito text-sm">
        <div>
           <ul>
            <li>1. ABC Insurance Brokers </li>  
            <li>2. Acentria Insurance Brokers</li>
            <li>3. Afrishield Insurance Brokers</li>
            <li>4. Allicom Insurance Brokers</li>
            <li>5. Amro Insurance Brokers</li>
            <li>6. AMS Insurance Brokers</li>
            <li>7. APIS Insurance Brokers</li>
            <li>8. A-Plan Insurance Brokers</li>
            <li>9. Assured Insurance Brokers</li> 
            <li>10. AssureLink Insurance Brokers</li> 
            <li>11. Avocet Insurance Brokers</li>
            <li>12. Bafana Insurance Brokers</li>
            <li>13. Blue Cover Insurance Brokers</li>
            <li>14. Bottomry Insurance Brokers</li>
            <li>15. Busam Insurance Brokers </li>
            <li>16. Chartwell Insurance Brokers</li>
            <li>17. Consolidated Insurance Brokers</li>
            <li>18. Covermax Insurance Brokers</li> 
            <li>19. Disney Insurance Brokers</li>
            <li>20. E Insurance Brokers</li>
            <li>21. Disney Insurance Brokers</li>
          </ul>
        </div>
        <div>
          <ul>
            
            
           
            <li>22. E Insurance Brokers</li>
            <li>23. Enwealth Insurance Brokers</li>
            <li>24. ETG Insurance Brokers</li>
            <li>25. Fairsure Insurance Brokers</li>
            <li>26. Farelane Insurance Brokers</li>
            <li>27. Formax Insurance Brokers</li>
            <li>28. First Accord Insurance Brokers</li>
            <li>29. Grail Insurance Brokers</li>
            <li>30. Hawk Bay Insurance Brokers</li>
            <li>31. Hillspan Insurance Brokers</li>
            <li>32. HP Insurance Brokers</li>
            <li>33. Integrated Insurance Brokers</li>
            <li>34. Inter Oceans Insurance Brokers</li>
            <li>35. K-Sembi Insurance Brokers</li>
            <li>36. Karen Direct Insurance Brokers</li>
          <li>37. Kava Insurance Brokers</li>
          <li>38. Kenfident Insurance Brokers</li>   
          <li>39. Laser Insurance Brokers</li>
          <li>40. Losagi Insurance Brokers </li>
          <li>41. M A Khan Insurance Brokers</li>
          <li>42. Macly Insurance Brokers</li>
            
          </ul>
        </div>
        
        <div>
          <ul>
          
        
          <li>43. Maj Insurance Brokers</li>
          <li>44. Meister Insurance Brokers</li>
          <li>45. Methodist Insurance Brokers</li>
          <li>46. Midline Insurance Brokers</li>
          <li>47. Mima Insurance Brokers</li>
          <li>48. Miran Insurance Brokers</li>
          <li>49. New Chapter Insurance Brokers</li>
          <li>50. Nile Capital Insurance Brokers</li>
          <li>51. Nyadwe Insurance Brokers</li>
          <li>52. Octagon Insurance Brokers</li>
          <li>53. Olea Kenya Insurance Brokers</li>
          <li>54. Options Insurance Brokers</li>
          <li>55. Package Insurance Brokers</li>
          <li>56. Paladin Insurance Brokers</li>
          <li>57. Pelican Insurance Brokers</li>
          <li>58. Policy Mart Insurance Brokers</li>
          <li>59. Primeken Insurance Brokers</li>
          <li>60. Qijito Insurance Brokers</li>
          <li>61. Reica Insurance Brokers</li>
          <li>62. Reval Insurance Brokers</li>
          <li>63. Risk Solutions Insurance Brokers</li>
          </ul>
        </div>
        <div>
          <ul>
     
         
         
          <li>64. Roberts Insurance Brokers</li>
          <li>65. Samnel Insurance Brokers</li>
          <li>66. Sapon Insurance Brokers</li>
          <li>67. Sasala Insurance Brokers</li>
          <li>68. Scanner Insurance Brokers</li>
          <li>69. Shree Insurance Brokers</li>
          <li>70. Smartguard Insurance Brokers</li>
          <li>71. Sunland Insurance Brokers</li>
          <li>72. Superlink Insurance Brokers</li>
          <li>73. Spectrum Insurance Brokers (Uganda)</li>
          <li>74. Transnep  Insurance Brokers limited</li>
          <li>75. Unipolar Insurance Brokers</li>
          <li>76. Utmost Insurance Brokers</li>
          <li>77. Vefis Insurance Brokers</li>
          <li>78. Verge Insurance Brokers</li>
          <li>79. Victoria Insurance Brokers</li>
          <li>80. Viva 365 Insurance Brokers</li>
          <li>81. Wakiba Insurance Brokers
</li>
          </ul>
        </div>
        
      </div>
      </Fade>
    </div>
  </div> 
{/* Insurance Agents */}
  <div className="w-full  p-4 ">
    <div className="bg-gray-100 rounded-lg p-6 with-shadow">
      <Fade top>
      <h2 className="text-2xl font-josefin flex justify-center text-[#4c4c62] font-bold">
      Insurance Agents
      </h2>
      </Fade>
      <Fade bottom>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 font-nunito text-sm ">
        <div>
          <ul>
          <li>1. Abiria Insurance Agencies </li>
          <li>2. Aloha Insurance Agency </li>
            <li>3. APF Insurance Agency </li>
            <li>4. Axe Insurance Agency</li>
            <li>5. Belven Insurance Agency</li>
            <li>6. Bluenet Insurance Agency</li>
            <li>7. Bristal Corporation Ins. Agency</li>
            <li>8. Broad Insurance Agency </li>
            <li>9. Canei Insurance Agency</li>
            <li>10. Carsure Insurance Agency</li>
            <li>11. Chama Insurance Agency</li>
            <li>12. Clearways Insurance Agency</li> 
            <li>13. Convenor Insurance Agency</li> 
            <li>14. CoTrust Insurance Agency</li>
            <li>15. Daybreak Insurance Agency </li>
            <li>16. D-Risk Insurance Agency</li>
            <li>17. Datani Insurance Agency</li>
            <li>18. Dickways Insurance Agency</li> 
            <li>19. Ease Insurance Agency </li>
            <li>20. End to End Insurance Agency </li>
            <li>21. Eritims Insurance Agency</li>
            <li>22. Express Indemnity Insurance Agency</li>
            
          
          </ul>
        </div>
        <div>
          <ul>
           
          <li>23. Extra Miles Insurance Agency</li> 
            <li>24. Faraja Insurance Agency</li>
            <li>25. Fast Target Insurance Agency</li>
            <li>26. Felicity Insurance Agency</li>
            <li>27. FinCorp Insurnce Agency</li>
            <li>28.  Finnet Insurance Agency</li>
            <li>29. Fullbloom Insurance Agency</li>
            <li>30. Haivan Insurance Agency</li>
            <li>31. Hakad Insurance Agency</li>
            <li>32. Hifadhi Africa Insurance Agency</li>
            <li>33. Horeb Insurance Agency</li>
            <li>34. Intaru Insurance Agency</li>
            <li>35. Insta Africa Insurance Agency</li>  
            <li>36. Jahazi Insurance Agency</li>
            <li>37. Jimmy’s Insurance Agency</li>
          <li>38. Karopay Insurance Agency</li>
          <li>39. Keensell Insurance Agency</li>
          <li>40.  Kentab Insurance Agency</li>
          <li>41. Keysons Insurance Agency</li>
          <li>42. Kimsure Insurance Agency</li>
          <li>43.  Kinetic Insurance Agency</li>
          <li>44.  Kimisitu Insurance Agency</li> 
          
          
          </ul>
        </div>
        
        <div>
          <ul>
          <li>45. Kuality kit Insurance Agency </li>
          <li>46. Luxe Insurance Agency</li>
          <li>47. Max & Sirch Insurance Agency</li>
          <li>48. Mentors Insurance Agencies</li>
          <li>49. Millenia Insurance Agency</li>
          <li>50. MinMax Insurance Agency</li>
          <li>51. MLG Insurance Agencies</li>
          <li>52. Mr. Insurance Agency</li>
          <li>53. MyCredit Assurance Agency</li>
          <li>54. Nanap Ventures And Insurance Agency</li>
          <li>55. Natbah Insurance Agency</li>
          <li>56. Ndemi Insurance Agencies</li>
          <li>57. Overleap Insurance Agency</li>
          <li>58. Plessis Insurance Agency</li>
          <li>59. Pesa Bazaar Insurance Agency</li>
          <li>60. Pitta Insurance Agency</li>
          <li>61. Prime Link Insurance Agency</li>
          <li>62. Prime Merchants Insurance Agency</li>
          <li>63. Privileged Insurance Agencies</li>
          <li>64. Rency Insurance Agency</li>
          <li>65. Renshield Insurance Agency</li>
            <li>66. Rhetse Insurance Agency</li>
         
          </ul>
        </div>
        
        <div>
          <ul>
          <li>67. Riann Insurance Agency</li>
          <li>68. Right Insurance Agency</li>
         <li>69. Royal Prestige Insurance Agency</li>
          <li>70. Safechoice Insurance Agency</li>
          <li>71. Safetra Insurance Agency</li>
          <li>72. Sam - Ville Insurance Agency</li>
          <li>73. Sanctum Insurance Agency</li>
          <li>74. Sea Breeze Insurance Agency</li>
          <li>75. Serv All Insurance Agency</li>
          <li>76. Shimin Insurance Agency</li>
          <li>77. Sienna Insurance Agency</li>
        
          <li>78. Silverguard Insurance Agency</li>
          <li>79. Solution Point Insurance Agency</li>
          <li>80. Spring Board Capital Insurance Agency</li>
          <li>81. SparkHill Insurance Agency</li>
          <li>82. Straightway Insurance Agency</li> 
          <li>83. The Blue Diamond Insurance Agency</li>
          <li>84. Tiqvah Insurance Agency</li>
          <li>85. Trian Insurance Agency</li>
          <li>86. Unison Insurance Agency</li>
          
          </ul>
        </div>
      </div>
      </Fade>
    </div>
  </div>
  {/* Bank Assurance */}
  <div className="flex flex-wrap justify-center ">
  <div className="w-full sm:w-1/2 md:w-1/3  ">
          <div className="bg-gray-100 rounded-lg p-6 lg:m-4 with-shadow">
          <Fade top>
            <h2 className="text-2xl font-josefin flex justify-center text-[#4c4c62] font-bold">
            Bank Assurance
            </h2>
            </Fade>
            <Fade bottom>
            <p className='flex justify-center text-sm'>
              <ul className='font-nunito '>
              <li>1.Prime Bank Insurance Agency</li>
              <li >2.Maisha Micro Finance Insurance Agency </li>
              <li>3.SMEP Insurance Agency</li>
              <li>4.Sumac Insurance Agency</li>
                 </ul>
            </p>
            </Fade>
          </div>
        </div>
     </div>
<ScrollToTopButton/>
<Footer/>
    </div>
  )
}

export default Clients