import React from 'react'
import mainbg from './Images/img2257.jpg'
import weblogo from './Images/weblogo.png'
import icon1 from './Images/icons8-plane-100.png'
import icon2 from './Images/icons8-live-100.png'
import icon3 from './Images/icons8-globe-100.png'
import img3 from './Images/img2289.jpg'
import bgimg from './Images/img2273.jpg'
import deliveryboy from './Images/img2277.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import img5 from './Images/img2285.jpg'
import img6 from './Images/img2281.jpg'
import img7 from './Images/img2301.jpg'
import img8 from './Images/img205.jpg'
import img9 from './Images/steptodown.com526755.jpg'

const Services = () => {
  return (
    <div>
        {/*After Navbar section*/}
    
    <div className="relative">
    <img src={mainbg} alt="" className='w-full h-[80vh] object-cover' />
    <div className='w-full h-[80vh] bg-black opacity-40 absolute inset-0'></div>
    <div className='absolute inset-0 flex flex-col font-Inter text-white my-40 mx-32 '>
      <div className='flex flex-row space-x-1'>
        <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
      <h1 className='text-2xl font-semibold'>WE RE PROVIDE BEST SERVICES
      </h1>
      </div>
      <p className='text-7xl font-bold mt-4'>WORLD WIDE</p>
      <p className='text-7xl font-bold mt-2'>BEST SHIPPING</p>
      <p className='text-xl font-semibold w-[100vh] mt-16'>
      Vivamus Mangna justo, lacinia eget consectetur sed, convellis at tellus, Quisque velit nisi
      pretium ut lacinia in, elementum id enim. nulla quis lorem ut libero 
      </p>
    </div>
  </div>
  
  {/*our services*/}
  <div>
    <div className='flex flex-row justify-center gap-x-8 my-10'>
    <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
      <h1 className='text-primary2 text-2xl font-bold'>OUR SERVICES</h1>
    </div>
     {/*icons section*/}
     <div className='flex flex-row justify-between mx-8 px-10 py-12 text-black'>
    {/*1 icon*/}
      <div className='flex flex-col items-start space-y-2 px-10 mb-10'>
      <img src={icon1} alt="" className='w-[6vh] h-[6vh] object-cover' />
      <p className='text-3xl font-extrabold font-Kumbh '>Transportation</p>
      <p className='text-2xl font-Inter'>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
      </div>
      <div className='border-l-2 border-gray-500 border-dashed' />
      {/*2 icon*/}
      <div className='flex flex-col items-start space-y-2 px-10 mb-10'>
      <img src={icon2} alt="" className='w-[6vh] h-[6vh] object-cover' />
      <p className='text-3xl font-extrabold font-Kumbh '>Live Monitoring</p>
      <p className='text-2xl font-Inter'>Esteem spirit temper too say adieus who direct esteem. It ook estee luckily or picture placing drawing.</p>
      </div>
      <div className='border-l-2 border-gray-500 border-dashed' />
      {/*3 icon*/}
      <div className='flex flex-col items-start space-y-2 px-10 mb-10'>
      <img src={icon3} alt="" className='w-[6vh] h-[6vh] object-cover' />
      <p className='text-3xl font-extrabold font-Kumbh  '>Worldwide Service+</p>
      <p className='text-2xl font-Inter'>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
      </div>
    </div>
  </div>


  {/*Services We Offer*/}

  <div className='bg-gray-200 pb-10'>
    <h1 className='text-4xl font-extrabold font-Kumbh text-center py-10'>Services We Offer</h1>
  
    <div className='grid grid-cols-3 my-10 gap-y-32 mb-32 justify-items-center mx-10'>
      {/*1*/}
      <div className='relative'>
        <img src={img3} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-2xl text-center font-extrabold font-Kumbh py-8'>Air Freight</h1>
        </div>
 
      </div>
      {/*2*/}
      <div className='relative'>
        <img src={img5} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-2xl text-center font-extrabold font-Kumbh py-8'>Truck Freight</h1>
        </div>
      </div>
      {/*3*/}
      <div className='relative'>
        <img src={img6} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-2xl text-center font-extrabold font-Kumbh py-8'>Cargo Freight</h1>
        </div>
      </div>
      {/*4*/}
      <div className='relative'>
        <img src={img8} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-2xl text-center font-extrabold font-Kumbh py-8'>Bicycle Freight</h1>
        </div>
      </div>
      {/*5*/}
      <div className='relative'>
        <img src={img7} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-2xl text-center font-extrabold font-Kumbh py-8'>Bike Freight</h1>
        </div>
      </div>
      {/*6*/}
      <div className='relative'>
        <img src={img9} alt="" className='w-[40vh] h-[30vh] object-cover' />
        <div className='bg-white absolute w-[30vh] inset-x-10 top-48 px-8 space-y-1'>
        <h1 className='text-2xl text-center font-extrabold font-Kumbh py-8'>Road Freight</h1>
        </div>
      </div>
    </div>

  </div>


  {/*bg image ship*/}
  <div className="relative">
    <img src={bgimg} alt="" className='w-full h-[40vh] object-cover' />
    <div className='w-full h-[40vh] bg-black opacity-70 absolute inset-0'></div>
    <div className='absolute inset-0 flex flex-col justify-center text-center font-Kumbh text-white mx-20 space-y-16 '>
      <h1 className='text-5xl font-semibold '>100% Secure and Safe</h1>
      <p className='text-xl font-semibold mx-44'>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
      <button className='text-white font-bold px-6 text-2xl py-2 bg-primary2 rounded-3xl mx-auto '>Contact us</button>
    </div>
  </div>

  {/*Why Choose Us?*/}
  <div className='my-36 mt-10 flex flex-row justify-between'>
    <div className='relative w-[110vh] mx-10 '>
    <div className='w-[50vh] h-[50vh] bg-primary2  absolute inset-0 left-10 top-10'></div>
      <img src={deliveryboy} alt="" className='w-[50vh] h-[50vh] object-cover absolute'/>
    </div>

    <div className='w-full mt-8'>
      <h1 className='text-5xl font-semibold mt-6 '>Why Choose Us?</h1>
      <p className='text-xl w-[70vh] mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
      <div className='flex flex-row justify-start space-x-2 items-center mt-7'> 
      <FontAwesomeIcon icon={faCheck} className="text-white bg-orange-800 rounded-full p-1 text-2xl" />
        <p>Apartments frequently or motionless.</p>
      </div>
      <div  className='flex flex-row justify-start space-x-2 items-center mt-3'>
      <FontAwesomeIcon icon={faCheck} className="text-white bg-orange-800 rounded-full p-1 text-2xl" />
        <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>
      <div className='flex flex-row justify-start space-x-2 items-center mt-3'>
      <FontAwesomeIcon icon={faCheck} className="text-white bg-orange-800 rounded-full p-1 text-2xl" />
        <p>Voluptatem quia voluptas sit aspernatur.</p>
      </div>
      <button className='text-2xl font-semibold border-2 border-primary2 solid mt-10 px-10 py-3 mx-7'>About Us</button>

    </div>
  </div>


  {/*last part */}
  {/*icons section*/}
  <div className='bg-gray-100 flex flex-row justify-between mx-28 px-20 py-12 text-white my-20'>
    {/*1 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <p className='text-4xl font-bold text-primary2 '>42+</p>
      <p className='text-2xl font-semibold text-gray-700'>Countries Covered</p>
      </div>
      {/*2 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <p className='text-4xl font-bold text-primary2 '>97+</p>
      <p className='text-2xl font-semibold text-gray-700'>Business Secess</p>
      </div>
      {/*3 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <p className='text-4xl font-bold text-primary2 '>2342</p>
      <p className='text-2xl font-semibold text-gray-700'>Happy Client</p>
      </div>
      {/*4 icon*/}
      <div className='flex flex-col items-center space-y-2'>
      <p className='text-4xl font-bold text-primary2 '>3245</p>
      <p className='text-2xl font-semibold text-gray-700'>Business Done</p>
      </div>
    </div>
    </div>
  )
}

export default Services
