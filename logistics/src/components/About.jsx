import React from 'react'
import mainbg from './Images/img4985.jpg'
import weblogo from './Images/weblogo.png'
import img1 from './Images/img4981.jpg'
import img2 from './Images/img4977.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div>
        {/*Navbar section*/}
    
    <div className="relative">
    <img src={mainbg} alt="" className='w-full h-[80vh] object-cover' />
    <div className='w-full h-[80vh] bg-black opacity-40 absolute inset-0'></div>
    <div className='absolute inset-0 flex flex-col font-Inter text-white my-32 mx-20 space-y-5 '>
      <div className='flex flex-row space-x-1'>
        <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
      <h1 className='text-2xl font-semibold '>ABOUT US</h1>
      </div>
      <p className='text-5xl font-bold'>TRANSPORTATION</p>
      <p className='text-7xl font-bold'>& LOGISTICS</p>
      <p className='text-xl font-semibold w-[100vh]'>
        Vivamus Magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero.
      </p>
    </div>
  </div>


  {/*after the main img*/}
  <div>
  <div className='flex flex-row justify-start gap-x-8 my-10 mx-20'>
    <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
    <div className='flex flex-col items-start space-y-2' >
      <h1 className='text-primary2 text-3xl font-bold '>About Us</h1>
      <hr className='border-b-2 border-primary2 w-20'/>
    </div>
    </div>
    <div className='flex flex-row justify-between mx-20'>
        <div className='w-full'>
            <p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.</p>
            <p className='text-2xl font-semibold text-gray-500 mt-16' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.</p>
            <p className='text-xl font-bold text-primary2 mt-7 underline underline-offset-2'>Read More</p>
            <div className='w-full mt-8 mb-20'>
      <div className='flex flex-row justify-start space-x-2 items-center mt-7 '> 
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-3xl font-bold" />
        <p className='text-2xl font-Kumbh'>Error minus sint nobis dolor</p>
      </div>
      <div  className='flex flex-row justify-start space-x-2 items-center mt-3'>
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-3xl font-bold" />
        <p className='text-2xl font-Kumbh'>Voluptatum porro expedita labore esse</p>
      </div>
      <div className='flex flex-row justify-start space-x-2 items-center mt-3'>
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-3xl font-bold" />
        <p className='text-2xl font-Kumbh'>Voluptas unde sit pariatur earum</p>
      </div> 
    </div>
        </div>
        <div className='w-[80vh]'>
            <img src={img1} alt="" className='w-full h-[50vh] object-cover rounded-full '/>
        </div>
    </div>
  </div>

  {/*another images section*/}
  <div className='relative mb-20'>
  <img src={img2} alt="" className='w-full h-[80vh] object-cover'/>
  <div className='w-full h-[80vh] bg-black opacity-70 absolute inset-0'></div>
  <div className='flex flex-row justify-center gap-x-8 my-20 absolute inset-0'>
    <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
    <div className='flex flex-col items-center space-y-2' >
      <h1 className='text-white text-3xl font-bold '>HOW IT WORKS</h1>
      <hr className='border-b-2 border-white w-20'/>
    </div>
    </div>
    <div className='absolute inset-0 mt-44 text-white flex flex-row justify-between mx-20 space-x-10 items-start'>
    <div className="w-1/2">
  {/* Circle with "1" */}
  <div className="flex justify-center items-center w-20 h-20 rounded-full bg-primary2 border-8 border-white text-center mx-auto">
    <p className="text-4xl font-bold text-white">1</p>
  </div>

  {/* Heading and Description */}
  <h1 className="text-3xl font-bold text-center mt-8">Make an order</h1>
  <p className="text-xl mt-8">
    Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto.
  </p>

  {/* Checklist */}
  <div className="w-full mt-8 mb-20">
    <div className="flex flex-row justify-start space-x-2 items-center mt-7">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Error minus sint nobis dolor</p>
    </div>
    <div className="flex flex-row justify-start space-x-2 items-center mt-3">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Voluptatum porro expedita labore esse</p>
    </div>
    <div className="flex flex-row justify-start space-x-2 items-center mt-3">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Voluptas unde sit pariatur earum</p>
    </div>
  </div>
</div>
    
    {/*2*/}
    <div className="w-1/2">
  {/* Circle with "2" */}
  <div className="flex justify-center items-center w-20 h-20 rounded-full bg-primary2 border-8 border-white text-center mx-auto">
    <p className="text-4xl font-bold text-white">2</p>
  </div>

  {/* Heading and Description */}
  <h1 className="text-3xl font-bold text-center mt-8">Make an order</h1>
  <p className="text-xl mt-8">
    Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto.
  </p>

  {/* Checklist */}
  <div className="w-full mt-8 mb-20">
    <div className="flex flex-row justify-start space-x-2 items-center mt-7">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Error minus sint nobis dolor</p>
    </div>
    <div className="flex flex-row justify-start space-x-2 items-center mt-3">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Voluptatum porro expedita labore esse</p>
    </div>
    <div className="flex flex-row justify-start space-x-2 items-center mt-3">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Voluptas unde sit pariatur earum</p>
    </div>
  </div>
</div>

   {/*3*/}
    <div className="w-1/2">
  {/* Circle with "3" */}
  <div className="flex justify-center items-center w-20 h-20 rounded-full bg-primary2 border-8 border-white text-center mx-auto">
    <p className="text-4xl font-bold text-white">3</p>
  </div>

  {/* Heading and Description */}
  <h1 className="text-3xl font-bold text-center mt-8">Make an order</h1>
  <p className="text-xl mt-8">
    Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto.
  </p>

  {/* Checklist */}
  <div className="w-full mt-8 mb-20">
    <div className="flex flex-row justify-start space-x-2 items-center mt-7">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Error minus sint nobis dolor</p>
    </div>
    <div className="flex flex-row justify-start space-x-2 items-center mt-3">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Voluptatum porro expedita labore esse</p>
    </div>
    <div className="flex flex-row justify-start space-x-2 items-center mt-3">
      <FontAwesomeIcon icon={faCheck} className="text-white bg-red-600 rounded-full p-1 text-xl" />
      <p className="text-xl">Voluptas unde sit pariatur earum</p>
    </div>
  </div>
</div>
    </div>
  </div>
    </div>
  )
}

export default About
