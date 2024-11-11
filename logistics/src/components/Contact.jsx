import React from 'react'
import mainbg from './Images/img5829.jpg'
import weblogo from './Images/weblogo.png'

const Contact = () => {
  return (
    <div>
       {/*Navbar section*/}
    
    <div className="relative">
    <img src={mainbg} alt="" className='w-full h-[50vh] object-cover' />
    <div className='w-full h-[50vh] bg-black opacity-40 absolute inset-0'></div>
    <div className='absolute inset-0 flex flex-col font-Inter text-white my-28 mx-20 space-y-2  text-center'>
      <p className='text-7xl font-bold'>Contact Us</p>
      <p className='text-xl'>See Our Daily News & Updates</p>
    </div>
  </div>


  {/*after main image section*/}
  <div className='flex flex-row justify-between m-20'>
    <div className='w-[120vh] bg-primary4 '>
        <h1 className='text-center text-white text-4xl font-bold py-6'>Get in Touch</h1>
        <div className='grid grid-cols-2 mx-10 gap-x-4 gap-y-8'>
            <input type="text" placeholder='First Name'  className='col-span-1 border-2 text-2xl border-white p-2 rounded-lg solid bg-primary4'/>
            <input type="text" placeholder='Last Name'  className='col-span-1 border-2 text-2xl border-white p-2 rounded-lg solid bg-primary4'/>
            <input type="email" placeholder='Email'  className='col-span-2 border-2 text-2xl border-white p-2 rounded-lg solid bg-primary4 '/>
            <input type="text" placeholder='Subject'  className='col-span-2 border-2 text-2xl border-white p-2 rounded-lg solid bg-primary4 '/>
            <textarea type="text" rows="4" placeholder='Message'  className='col-span-2 border-2 text-2xl border-white p-2 rounded-lg solid bg-primary4 '/>

            <button className='text-2xl bg-primary2 py-2 text-white w-52 mb-10'>Send Message</button>
        </div>
    </div>
    <div className='w-1/2 mx-8 mt-4'>
        <p className='text-2xl font-bold text-primary2'>Address </p>
        <span className='text-xl font-semibold text-black'>203 Fake St. Mountain View, <br /> San Francisco, California, USA</span>
        <p className='text-2xl font-bold text-primary2'>Phone </p>
        <span className='text-xl font-semibold text-black'>+1 232 3235 324</span>
        <p className='text-2xl font-bold text-primary2'>Email Address </p>
        <span className='text-xl font-semibold text-black'>youremail@gmail,com</span>
        <p className='text-2xl font-semibold mt-28'>More Info </p>
        <span className='text-xl text-gray-950' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</span>
        <div>
        <button className='text-2xl text-white bg-primary2 p-3 mt-5'>Learn More</button>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Contact
