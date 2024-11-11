import React from 'react'
import mainbg from './Images/img4259.jpg'
import weblogo from './Images/weblogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Tracking = () => {
  return (
    <div>
       {/*Navbar section*/}
    
    <div className="relative">
    <img src={mainbg} alt="" className='w-full h-[80vh] object-cover' />
    <div className='w-full h-[80vh] bg-black opacity-40 absolute inset-0'></div>
    <div className='absolute inset-0 flex flex-col font-Inter text-white my-28 mx-20 space-y-5 '>
      <div className='flex flex-row space-x-1'>
        <img src={weblogo} alt="" className='w-[4vh] h-[4vh] object-cover' />
      <h1 className='text-2xl font-semibold '>Tracking</h1>
      </div>
      <p className='text-7xl font-bold'>LOGISTICS</p>
      <p className='text-7xl font-bold'>TRACKING</p>
      <p className='text-xl font-semibold w-[100vh]'>
        Vivamus Magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero.
      </p>
    </div>
  </div>

  {/*Logistics Tracking*/}
  <div className='mx-32 my-20'>
    <h1 className='text-4xl font-bold '>Logistics Tracking</h1>
    <p className='text-lg font-Kumbh text-red-500 my-2'>Official website</p>
    <div className='flex felx-row justify-start space-x-7'>
    <div className='relative w-[66vh] '>
        <input type="text" className=' border-2 border-gray-600 p-3 text-2xl pr-10 w-full rounded-lg' placeholder='Tracking Number'/>
        <FontAwesomeIcon icon={faSearch}className="absolute right-20 top-1/2 transform text-black p-3 rounded-lg -translate-y-1/2 bg-gray-300  pointer-events-none" />
      </div>
      <button className='text-2xl rounded-lg font-semibold bg-primary2 text-white p-0  w-[25vh] '>Track a Parcel</button>
    </div>

    <h1 className='text-gray-600 text-3xl font-semibold mt-20'>Track your parcel from logistics in one click</h1>
    <p className='text-xl text-gray-600 '>Enter a Logistics tracking number to track your package</p>
    <div className='flex flex-row justify-start space-x-3 items-center'>
    <FontAwesomeIcon icon={faArrowLeft}className=" text-xl bg-gray-600 p-2 text-white" />
      <p className='text-gray-600 text-lg'>Back to courier list</p>
    </div>

    <h1 className='text-3xl font-semibold mt-20'>How to track my Logistics package?</h1>
    <p className='text-gray-500 text-xl'>Logistics package tracking is easy with Ordertracker, all you have to do is to paste your tracking number in the above field to track a package or go to the track my parcel section. We provide you with the most powerful parcel tracking system for any post office. Ordertracker accepts any international tracking number, it is an universal tracking website to track a parcel on a global level such as "track my parcel" with accurate informations about your shipment.</p>
  </div>
    </div>
  )
}

export default Tracking
