import React from 'react'
import mainbg from './Images/many-transport-trucks-parked-service-station-sunset-ai-generative.jpg'
import img1 from './Images/industrial-containers-box-logistic-import-export-business.jpg'
import img2 from './Images/truck-vehicle-with-trailers-background.jpg'
import img3 from './Images/medium-shot-smiley-man-warehouse.jpg'
import weblogo from './Images/weblogo.png'
import boxcash from './Images/box cash.png'
import delivery from './Images/delivery box.png'
import img4 from './Images/steptodown.com569044.jpg'
import img5 from './Images/steptodown.com499132.jpg'
import img6 from './Images/steptodown.com526755.jpg'
import img7 from './Images/steptodown.com671021.jpg'
import img8 from './Images/steptodown.com532144.jpg'
import img9 from './Images/steptodown.com314483.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faShip, faBicycle, faMotorcycle } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
  <div>
    {/*Navbar section*/}
    
    <div className="relative">
    <img src={mainbg} alt="" className='w-full h-[90vh] object-cover' />
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
      <div className='flex flex-col space-y-5'>
      <img src={img1} alt="" className='w-[60vh] h-[20vh] object-cover' />
      <img src={img2} alt="" className='w-[60vh] h-full object-cover' />
      </div>
      <div>
      <img src={img3} alt="" className='w-full h-full object-cover' />
      </div>
      <p className='absolute bg-primary2 text-center rounded-full px-6 py-8 text-lg top-20 left-32 text-white'><span className='text-4xl font-bold'>25+</span> <br /> Years Working <br /> Experience</p>
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

    <div className='grid grid-cols-3 my-10 gap-y-32 mb-32 justify-items-center'>
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
  </div>
  
  )
}

export default Home