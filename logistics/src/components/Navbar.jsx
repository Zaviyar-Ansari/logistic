import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';   // Twitter icon
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';  // Call and Location icons
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Search icon

const Navbar = () => {
  return (
    <div className=' text-white flex flex-row justify-start'>
        <div className='w-[60vh] bg-primary2'>
            <h1 className='text-center text-4xl font-Kumbh font-bold py-14 px-4'>LOGISTIC</h1>
        </div>
        <div className='w-full'>
            <div className='flex flex-row justify-between gap-x-3 bg-primary1'>
                <div className='px-5 flex gap-x-10'>
                <p  className='text-gray-400 text-xl py-4'><FontAwesomeIcon icon={faPhone} className="text-gray-100 text-3xl" />  +44 20 7930 8205</p>
                <p className='text-gray-400 text-xl py-4'><FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-100 text-3xl" />  450 Strand, Charing Cross, PK
                </p>
                </div>
                <div className='flex gap-x-5 px-5'>
                <FontAwesomeIcon icon={faFacebook} className="text-gray-100 text-3xl py-4" />
                <FontAwesomeIcon icon={faTwitter} className="text-gray-100 text-3xl py-4 " />
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-100 text-3xl py-4" />
                </div>
            </div>
            <div className='flex flex-row justify-between bg-white '>
                <ul className='flex flex-row justify-start gap-x-10 py-7 text-black px-10 font-bold font-Inter'>
                    <li className='hover:underline-offset-1 hover:text-primary2 hover:underline'>HOME</li>
                    <li className='hover:underline-offset-1 hover:text-primary2 hover:underline'>SERVICES</li>
                    <li className='hover:underline-offset-1 hover:text-primary2 hover:underline'>CARRER</li>
                    <li className='hover:underline-offset-1 hover:text-primary2 hover:underline'>TRACKING</li>
                    <li className='hover:underline-offset-1 hover:text-primary2 hover:underline'>ABOUT</li>
                    <li className='hover:underline-offset-1 hover:text-primary2 hover:underline'>CONTACT US</li>
                </ul>
                <FontAwesomeIcon icon={faSearch} className="text-gray-600 text-2xl hover:text-gray-800 cursor-pointer px-10 py-7" />
            </div>
        </div>
    </div>
  )
}

export default Navbar