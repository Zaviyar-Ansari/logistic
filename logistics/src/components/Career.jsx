import React from 'react'
import weblogo from './Images/weblogo.png'
import mainbg from './Images/img3393.jpg'
import img1 from './Images/img3373.jpg'
import img2 from './Images/img3397.jpg'
import img3 from './Images/img3389.jpg'
import img4 from './Images/img3403.jpg'
import img5 from './Images/img3385.jpg'
import img6 from './Images/img3381.jpg'
import img7 from './Images/img3369.jpg'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Career = () => {
  return (
    <div>
        {/*After Navbar section*/}
    
    <div className="relative">
    <img src={mainbg} alt="" className='w-full h-[80vh] object-cover' />
    <div className='w-full h-[80vh] bg-black opacity-40 absolute inset-0'></div>
    <div className='absolute inset-0 flex flex-col font-Inter text-white my-28 mx-24 space-y-5 '>
      <div className='flex flex-row space-x-1'>
        <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
      <h1 className='text-2xl font-semibold '>CAREER</h1>
      </div>
      <p className='text-7xl font-Kumbh font-bold'>WE MAKE</p>
      <p className='text-7xl font-Kumbh font-bold'>SHIPPING</p>
      <p className='text-xl w-[100vh]'>
        Vivamus Magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero.
      </p>
    </div>
  </div>

  <div>
  <div className='flex flex-row justify-center gap-x-8 my-10'>
    <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' /> 
    <div className='flex flex-col items-center space-y-2'>
      <h1 className='text-primary2 text-3xl font-bold'>Our Services</h1>
      <hr className='border-b-2 border-primary2 w-20'/>
    </div>
    </div>

    <div className='flex flex-row justify-between mx-20'> 
        {/*1*/}
        <div className='w-[40vh] space-y-2'>
            <img src={img1} alt=""  className='w-[30vh] h-[30vh] object-cover rounded-full mb-10'/>
            <p className='text-2xl text-center font-bold w-[28vh]'>Christine Rooster</p>
            <p className='text-center w-[32vh] text-lg'>CO-FOUNDER, PRESIDENT</p>
            <p className='px-5 text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.</p>
        </div>
        {/*2*/}
        <div className='w-[40vh] space-y-2'>
            <img src={img2} alt=""  className='w-[30vh] h-[30vh] object-cover rounded-full mb-10'/>
            <p className='text-2xl text-center font-bold w-[28vh]'>Christine Rooster</p>
            <p className='text-center text-lg w-[32vh]'>CO-FOUNDER, COO</p>
            <p className='px-5 text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.</p>
        </div>
        {/*3*/}
        <div className='w-[40vh] space-y-2'>
            <img src={img3} alt=""  className='w-[30vh] h-[30vh] object-cover rounded-full mb-10'/>
            <p className='text-2xl text-center w-[28vh] font-bold'>Christine Rooster</p>
            <p className='text-center text-lg w-[32vh]'>MARKETINGT</p>
            <p className='px-5 text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.</p>
        </div>
    </div>
  </div>

  {/*INDUSTRIES*/}

  <div>
  <div className='flex flex-row justify-center gap-x-8 my-10'>
    <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
    <div className='flex flex-col items-center space-y-2' >
      <h1 className='text-primary2 text-3xl font-bold '>INDUSTRIES</h1>
      <hr className='border-b-2 border-primary2 w-20'/>
    </div>
    </div>

    <div className='flex flex-row justify-evenly'>
        {/*1*/}
        <div className='relative w-full'>
            <img src={img4} alt="" className='w-full h-[40vh] object-cover'/>
            <div className='w-full h-[40vh] bg-gray-800 opacity-25 absolute inset-0'></div>
            <p className='absolute inset-0 text-center text-3xl text-white font-bold top-60'>Cargo Ship</p>
        </div>
        
        {/*2*/}
        <div className='relative w-full'>
            <img src={img5} alt="" className='w-full h-[40vh] object-cover'/>
            <div className='w-full h-[40vh] bg-gray-800 opacity-25 absolute inset-0'></div>
            <p className='absolute inset-0 text-center text-3xl text-white font-bold top-60'>Warehousing</p>
        </div>
        
        {/*3*/}
        <div className='relative w-full'>
            <img src={img6} alt="" className='w-full h-[40vh] object-cover'/>
            <div className='w-full h-[40vh] bg-gray-800 opacity-25 absolute inset-0'></div>
            <p className='absolute inset-0 text-center text-3xl text-white font-bold top-60'>Storage</p>
        </div>
        
        {/*4*/}
        <div className='relative w-full'>
            <img src={img7} alt="" className='w-full h-[40vh] object-cover'/>
            <div className='w-full h-[40vh] bg-gray-800 opacity-25 absolute inset-0'></div>
            <p className='absolute inset-0 text-center text-3xl text-white font-bold top-60'>Air Transport</p>
        </div>
    </div>
    
  </div>


  <div className='mx-20'>
    <h1 className='text-4xl font-bold mt-20'>Recent Job Openings</h1>
    <div className='grid grid-cols-3 justify-between mt-10 w-full space-x-2'>
       {/* Select Freight Input with Dropdown Icon */}
      <div className='relative col-span-2'>
        <input type="text" className=' border-2 border-gray-600 p-2 pr-10 w-full rounded-xl' placeholder='Search Jobs ...'/>
      </div>
        <div className='flex flex-row justify-end space-x-3'>
             {/* Select Freight Input with Dropdown Icon */}
      <div className='relative'>
        <input type="text" className=' border-2 border-gray-600 p-2 pr-10 w-full rounded-xl' placeholder='Search Nothing'/>
        <FontAwesomeIcon icon={faChevronDown}className="absolute right-3 top-1/2 transform text-black -translate-y-1/2 pointer-events-none" />
      </div>
       {/* Select Freight Input with Dropdown Icon */}
       <div className='relative'>
        <input type="text" className=' border-2 border-gray-600 p-2 pr-10 w-full rounded-xl' placeholder='Search Nothing'/>
        <FontAwesomeIcon icon={faChevronDown}className="absolute right-3 top-1/2 transform text-black -translate-y-1/2  pointer-events-none" />
      </div>
        </div>
    </div>

    {/*after the input feilds */}
    <div className='mx-10'>
        <div className='flex flex-row justify-between space-y-2 py-6 items-center '>
            <p className='text-2xl font-Kumbh font-bold text-primary2 w-1/2 text-center'>Supervisor - Civil</p>
            <p className='text-2xl text-gray-500 w-1/2 text-center'>Agility Logistic Park </p>
            <p className='text-2xl text-gray-500 w-1/2 text-center ' >As Sulay Riyad Province , <br /> sudia Srabia</p>
        </div>
        <hr />
        {/*2*/}
        
        <div className='flex flex-row justify-between space-y-2 py-6  items-center '>
            <p className='text-2xl font-Kumbh font-bold text-primary2 text-center w-1/2 '>Assistant Manager - <br /> Contract Adminstration</p>
            <p className='text-2xl text-gray-500 text-center w-1/2 '>Agility Logistic Park </p>
            <p className='text-2xl text-gray-500 text-center w-1/2 ' >Al Sulbiya industrial 1, Al Jahar <br />Governorate Kuwait</p>
        </div>
        <hr />
        {/*3*/}
        
        <div className='flex flex-row justify-between space-y-2 py-6  items-center '>
            <p className='text-2xl font-Kumbh font-bold text-primary2 text-center w-1/2 '>Welder</p>
            <p className='text-2xl text-gray-500 text-center w-1/2 '>Agility Logistic Park </p>
            <p className='text-2xl text-gray-500 text-center w-1/2 ' >As Sulay Riyad Province , <br /> sudia Srabia</p>
        </div>
        <hr />
        {/*4*/}
        
        <div className='flex flex-row justify-between space-y-2 py-6  items-center '>
            <p className='text-2xl font-Kumbh font-bold text-primary2 text-center w-1/2 '>Command Center Administrator</p>
            <p className='text-2xl text-gray-500 text-center w-1/2 '>Agility Logistic Park </p>
            <p className='text-2xl text-gray-500 text-center w-1/2 ' >Al Dejeej, Al Farawniya <br /> Governorate Kuwait</p>
        </div>
        <hr />
        {/*5*/}
        
        <div className='flex flex-row justify-between space-y-2 py-6  items-center '>
            <p className='text-2xl font-Kumbh font-bold text-primary2 text-center w-1/2 '>Finance Executive</p>
            <p className='text-2xl text-gray-500 text-center w-1/2 '>Agility Logistic Park </p>
            <p className='text-2xl text-gray-500 text-center w-1/2 ' >Hyderabad, Telangana, India</p>
        </div>
        <hr />
    </div>

    {/*button*/}
    <div className='flex flex-row justify-start mx-16 space-x-5 text-white  text-2xl font-semibold my-10'>
        <button className='bg-primary2 py-2 px-4'>VEIW ALL JOBS OPENING</button>
        <button className='bg-primary5 py-2 px-4'>SUBMIT RESUME TO JOIN OUR TALENT WORK</button>
    </div>
  </div>
    </div>
  )
}

export default Career
