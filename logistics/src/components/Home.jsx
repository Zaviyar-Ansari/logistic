import React from 'react'
import mainbg from './Images/many-transport-trucks-parked-service-station-sunset-ai-generative.jpg'
import img1 from './Images/img133.jpg'
import weblogo from './Images/weblogo.png'
import boxcash from './Images/box cash.png'
import delivery from './Images/delivery box.png'
import img4 from './Images/img209.jpg'
import img5 from './Images/img189.jpg'
import img6 from './Images/steptodown.com526755.jpg'
import img7 from './Images/img205.jpg'
import img8 from './Images/img185.jpg'
import img9 from './Images/img201.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faShip, faBicycle, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import img10 from './Images/img145.jpg'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import img11 from './Images/img173.jpg'
import img12 from './Images/img193.jpg'
import img13 from './Images/img221.jpg'
import img14 from './Images/img141.jpg'
import icon1 from './Images/icons8-global-shipping-64.png'
import icon2 from './Images/icons8-global-location-64.png'
import icon3 from './Images/icons8-staff-50.png'
import icon4 from './Images/icons8-time-tracker-50.png'

const Home = () => {
  return (
  <div>
    {/*Navbar section*/}
    
    <div className="relative">
    <img src={mainbg} alt="" className='w-full h-[80vh] object-cover' />
    <div className='w-full h-[80vh] bg-black opacity-40 absolute inset-0'></div>
    <div className='absolute inset-0 flex flex-col font-Inter text-white my-28 mx-20 space-y-5 '>
      <div className='flex flex-row space-x-1'>
        <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
      <h1 className='text-2xl font-semibold '>WE'RE PROVIDE BEST SERVICES</h1>
      </div>
      <p className='text-5xl font-bold'>TRANSPORT</p>
      <p className='text-7xl font-bold'>FOR EVERYTHING</p>
      <p className='text-xl font-semibold w-[100vh]'>
        Vivamus Magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero.
      </p>
    </div>
  </div>

  {/*After navbar section*/}
  <div className='flex flex-row justify-between'>
    <div className='flex flex-row w-1/2 h-[60vh] mx-10 my-20 space-x-5 relative'>
      <div>
      <img src={img1} alt="" className='w-full h-full object-cover' />
      </div>
      <p className='absolute bg-primary2 text-center rounded-full px-8 py-11 text-xl top-20 left-24 shadow-2xl text-white'><span className='text-4xl font-extrabold '>25+</span> <br /> Years Working <br /> Experience</p>
    </div>
    <div className='w-1/2 mx-5 my-20 '>
    <div className='flex flex-row space-x-1'>
      <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover'/>
    <h1 className='text-primary2 text-2xl font-bold font-Inter'>ABOUT US</h1></div>
      <p className='text-4xl  font-extrabold font-Inter my-5'>Provide Transportation Services Since 1995</p>
      <p className='text-xl font-semibold my-5'>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu  erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium  ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
      <p className='text-xl font-bold text-primary2 underline underline-offset-2 my-10'>Read More</p>
      <div className='flex flex-row justify-center space-x-5'>
        <div className='flex flex-row items-center space-x-3'>
        <img src={boxcash} alt="" className='w-[6vh] h-[6vh] object-fill' />
        <div>
          <h1 className='text-xl font-bold'>Affordable Cost</h1>
          <p className='text-sm'>Mauris blandit aliquet, eget Tincidunt nibh pulvinar</p>
        </div>
        </div>
        <div className='h-[8vh] w-[2px] bg-gray-900 mx-3' /> {/* Vertical Line Separator */}
        <div className='flex flex-row space-x-3 items-center'>
          <img src={delivery} alt="" className='w-[5vh] h-[5vh] object-fill' />
          <div>
            <h1 className='text-xl font-bold'>Short Time Delivery</h1>
            <p  className='text-sm'>tincidunt nibh pulvinar. Sed Porttitor lectus nibh.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*Specialist Logistics Services*/}

  <div className='bg-slate-100 pb-32'>
    <div className='flex flex-row justify-center space-x-3 items-center pt-10'>
      <img src={weblogo} alt="" className='w-[5vh] h-[5vh] object-cover' />
      <h1 className='text-primary2 text-3xl font-semibold font-Inter'>OUR SERVICES</h1>
    </div>
    <h1 className='text-5xl font-bold font-Kumbh text-center pt-4'>Specialist Logistics Services</h1>

    <div className='grid grid-cols-3 my-10 gap-y-32 mb-32 justify-items-center mx-10'>
      {/*1*/}
      <div className='relative'>
        <img src={img4} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-xl font-bold font-Inter mt-3'>Air Freight</h1>
        <p className='text-sm'>Air freight offers several advantages over others modes of transportation</p>
        <hr/>
       <p className="underline underline-offset-2 flex items-center pb-3">
        Read More
       <FontAwesomeIcon icon={faArrowRight} className="text-sm text-black ml-2" />
       </p>
        </div>
        <div className='top-40 absolute left-52 '>
        <FontAwesomeIcon icon={faPlane} className="text-2xl text-gray-100 bg-primary2 p-4 rounded-full  -rotate-45" />
        </div>
      </div>
      {/*2*/}
      <div className='relative'>
        <img src={img5} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-xl font-bold font-Inter mt-3'>Cargo Freight</h1>
        <p className='text-sm'>cargo freight is the transportation of goods through the sea.n</p>
        <hr />
        <p className="underline underline-offset-2 flex items-center pb-3">
         Read More
        <FontAwesomeIcon icon={faArrowRight} className="text-sm text-black ml-2" /> 
        </p>

        </div>
        <div className='inset-x-8 top-40 absolute left-52 right-0'>
        <FontAwesomeIcon icon={faShip}  className="text-2xl text-gray-100 bg-primary2 p-4 rounded-full " />
        </div>
      </div>
      {/*3*/}
      <div className='relative'>
        <img src={img6} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-xl font-bold font-Inter mt-3'>Road Freight</h1>
        <p className='text-sm'>road freight can be carried out of by various of vehicles flatbed trucks</p>
        <hr />
       <p className="underline underline-offset-2 flex items-center pb-3">
        Read More
       <FontAwesomeIcon icon={faArrowRight} className="text-sm text-black ml-2" />
        </p>

        </div>
        <div className='inset-x-8 top-40 absolute left-52 right-0'>
        <FontAwesomeIcon icon={faTruck} className="text-2xl text-gray-100 bg-primary2 p-4 rounded-full "/>
        </div>
      </div>
      {/*4*/}
      <div className='relative'>
        <img src={img7} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-xl font-bold font-Inter mt-3'>Bike Freight</h1>
        <p className='text-sm'>Bike freight also known as bicycle logistics, refers of goods or cargo.</p>
        <hr />
       <p className="underline underline-offset-2 flex items-center pb-3">
        Read More
        <FontAwesomeIcon icon={faArrowRight} className="text-sm text-black ml-2" />
        </p>
        </div>
        <div className='inset-x-8 top-40 absolute left-52 right-0'>
        <FontAwesomeIcon icon={faBicycle} className="text-2xl text-gray-100 bg-primary2 p-4 rounded-full " />
        </div>
      </div>
      {/*5*/}
      <div className='relative'>
        <img src={img8} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-xl font-bold font-Inter mt-3'>Bicycle Freight</h1>
        <p className='text-sm'>Bicycle freight also known as bicycle logistics, refers of goods or cargo.</p>
        <hr />
       <p className="underline underline-offset-2 flex items-center pb-3">
        Read More
        <FontAwesomeIcon icon={faArrowRight} className="text-sm text-black ml-2" /> 
        </p>
        </div>
        <div className='inset-x-8 top-40 absolute left-52 right-0'>
        <FontAwesomeIcon icon={faMotorcycle} className="text-2xl text-gray-100 bg-primary2 p-4 rounded-full " />
        </div>
      </div>
      {/*6*/}
      <div className='relative'>
        <img src={img9} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-xl font-bold font-Inter mt-3'>Truck Freight</h1>
        <p className='text-sm'>Trucks with a Gross Vehicle Weight Rating (GVWR) greater than 33,000 lbs. </p>
        <hr />
       <p className="underline underline-offset-2 flex items-center pb-3">
       Read More
       <FontAwesomeIcon icon={faArrowRight} className="text-sm text-black ml-2" />
        </p>
        </div>
        <div className='inset-x-8 top-40 absolute left-52 right-0'>
        <FontAwesomeIcon icon={faTruck} className="text-2xl text-gray-100 bg-primary2 p-4 rounded-full " />
        </div>
      </div>
    </div>
  </div>

  {/*We Create Opportunity to Reach Potiential section*/}
  <div className='flex flex-row justify-between relative h-[70vh]'>
    <div className='w-1/2 px-16 py-8 bg-primary3'>
      <div className='flex flex-row justify-start gap-x-3 items-center'>
        <img src={weblogo} alt="" className='h-[5vh] w-[5vh] object-cover' />
        <h1 className='text-primary2 text-2xl font-bold font-Inter'>REQUEST A QUOTE</h1>
      </div>
      <p className='text-4xl font-bold font-Kumbh text-white'>We Create Opportunity to Reach Potiential</p>
    </div>
    <div className='w-1/2'>
      <img src={img10} alt=""  className='h-full w-full object-cover'/>
    </div>
  </div>
  {/*form */}
  <div className='w-[80vh] absolute inset-x-20 -mt-[49vh]'>
  <div className='flex flex-row justify-between items-center text-xl font-bold bg-white'>
      <div className='bg-primary2'>
        <p className='p-3 text-white'>Request a Quote</p>
      </div>
      <div className='flex items-center'>
        <p className='p-3 text-black'>Real Time Tracking</p>
         {/* Vertical Line Separator */}
        <div className='h-[6vh] w-[2px] bg-gray-900 mx-3' />
        <p className='p-3 text-black'>24/7 Hours Support</p>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-x-3 gap-y-7 p-10 bg-primary5'>
      <input type="text" className='bg-primary6 border-2 border-white p-2' placeholder='Full Name' />
      <input type="text" className='bg-primary6 border-2 border-white p-2' placeholder='Your Email' />
      <input type="text" className='bg-primary6 border-2 border-white p-2' placeholder='Weight, kg' />
      <input type="text" className='bg-primary6 border-2 border-white p-2' placeholder='Distance, km' />
      
      {/* Select Freight Input with Dropdown Icon */}
      <div className='relative col-span-2'>
        <input type="text" className='bg-primary6 border-2 border-white p-2 pr-10 w-full' placeholder='Select Freight'/>
        <FontAwesomeIcon icon={faChevronDown}className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
      </div>
      {/* Send Quote Button */}
      <button className='col-span-2 text-2xl font-semibold text-white bg-primary2 w-[20vh] p-3 mt-4'>Send Quote </button>
    </div>
  </div>

  {/*Our Recent Work Showcase*/}
  <div>
  <div className='flex flex-row justify-center space-x-4 items-center mt-10'>
      <img src={weblogo} alt="" className='w-[5vh] h-[5vh] object-cover'/>
      <h1 className='text-primary2 font-bold font-Inter text-2xl'>PORTFOLIO</h1>
    </div>
    <p className='text-center text-4xl font-bold font-Inter'>Our Recent Work Showcase</p>
    <div>
      {/*images section*/}
      <div className='flex flex-row justify-between mx-16 my-20'>
      {/*1 img*/}
    <div className='relative'>
  <img src={img11} alt="" className='w-[40vh] h-[30vh] object-cover' />
  <div className='w-[40vh] h-[30vh] bg-gray-800 opacity-40 absolute inset-0'></div>
  <div className='w-[40vh] h-[30vh] text-center absolute inset-0 flex flex-col justify-center items-center space-y-6 pt-20'>
    <h1 className='text-2xl font-semibold text-primary2'>Packaging</h1>
    <p className='text-sm mx-16 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</p>
    <div className='flex flex-row justify-center items-center text-primary2'>
      <p className='underline underline-offset-2 text-sm'>Read More</p>
      <FontAwesomeIcon icon={faArrowRight} className="text-sm text-primary2 ml-2" />
    </div>
  </div>
</div>
{/*2 img*/}
<div className='relative'>
  <img src={img12} alt="" className='w-[40vh] h-[30vh] object-cover' />
  <div className='w-[40vh] h-[30vh] bg-gray-800 opacity-20 absolute inset-0'></div>
  <div className='w-[40vh] h-[30vh] text-center absolute inset-0 flex flex-col justify-center items-center space-y-6 pt-20'>
    <h1 className='text-2xl font-semibold text-primary2'>Ocean Freight</h1>
    <p className='text-sm mx-16 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</p>
    <div className='flex flex-row justify-center items-center text-primary2'>
      <p className='underline underline-offset-2 text-sm'>Read More</p>
      <FontAwesomeIcon icon={faArrowRight} className="text-sm text-primary2 ml-2" />
    </div>
  </div>
</div>
{/*3 img*/}
<div className='relative'>
  <img src={img13} alt="" className='w-[40vh] h-[30vh] object-cover' />
  <div className='w-[40vh] h-[30vh] bg-gray-800 opacity-40 absolute inset-0'></div>
  <div className='w-[40vh] h-[30vh] text-center absolute inset-0 flex flex-col justify-center items-center space-y-6 pt-20'>
    <h1 className='text-2xl font-semibold text-primary2'>Air Freight</h1>
    <p className='text-sm mx-16 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</p>
    <div className='flex flex-row justify-center items-center text-primary2'>
      <p className='underline underline-offset-2 text-sm'>Read More</p>
      <FontAwesomeIcon icon={faArrowRight} className="text-sm text-primary2 ml-2" />
    </div>
  </div>
</div>
      </div>
    </div>
  </div>

  {/*banner type image form and text section*/}
   <div className='relative mb-44'>
    <img src={img14} alt="" className='h-[60vh] w-full object-cover' />
    <div className='w-full h-[60vh] bg-gray-800 opacity-70 absolute inset-0'></div>
    <div className='absolute inset-0 py-20'>
      <p className='text-center text-5xl font-Inter font-bold mx-52 text-white'>24/7 customer support any time of the day or night</p>
      <div className='text-white font-bold font-Inter text-xl flex flex-row justify-center gap-x-8 py-10'>
        <button className='bg-primary1 py-4  px-7 '>Free Quote</button>
        <button className='bg-primary2 py-4 px-7 '>Contact us</button>
      </div>
    </div>

    {/*icons section*/}
    <div className='bg-blue-800 flex flex-row justify-between mx-20 px-10 py-12 text-white absolute indent-0 inset-0 top-[40vh] -bottom-24'>
    {/*1 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <img src={icon1} alt="" className='w-[6vh] h-[6vh] object-cover' />
      <p className='text-4xl font-bold '>15K</p>
      <p className='text-2xl font-Inter'>Worldwide client</p>
      </div>
      <div className='border-l-2 border-white border-dashed' />
      {/*2 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <img src={icon2} alt="" className='w-[6vh] h-[6vh] object-cover' />
      <p className='text-4xl font-bold '>189+</p>
      <p className='text-2xl font-Inter'>Worldwide Branches</p>
      </div>
      <div className='border-l-2 border-white border-dashed' />
      {/*3 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <img src={icon3} alt="" className='w-[6vh] h-[6vh] object-cover' />
      <p className='text-4xl font-bold '>950+</p>
      <p className='text-2xl font-Inter'>Expert Company Staf</p>
      </div>
      <div className='border-l-2 border-white border-dashed' />
      {/*4 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <img src={icon4} alt="" className='w-[6vh] h-[6vh] object-cover' />
      <p className='text-4xl font-bold '>15K</p>
      <p className='text-2xl font-Inter'>Successful Deliver</p>
      </div>
    </div>
   </div>
    


  </div>
  
  )
}

export default Home