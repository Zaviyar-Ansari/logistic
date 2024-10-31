import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // For mail

const Footer = () => {
  return (
    <div className='bg-primary3'>
        <div className='flex flex-row justify-between mx-20 py-20'>
            <h1 className='text-white font-Inter text-3xl font-bold'>Subscribe Our Newsletter Get Update</h1>
            <div>
            <input type="email" placeholder='Enter your email' className='px-4 py-3 bg-primary4 text-white text-2xl w-[60vh]' />
            <button className='bg-primary2 px-4 py-3 text-2xl font-Inter'>Subscribe</button>
            </div>
        </div>
        <hr className='border-b-2 border-gray-400 w-[196vh] mx-20'/>
        <div className='flex flex-row justify-evenly mx-20 gap-x-20 my-20 pb-28'>
            <div className='w-1/2 text-white'>
                <h1 className='text-4xl font-Kumbh font-bold'>LOGISTIC</h1>
                <p className='text-xl mt-4'>Pellentesque non dolor vitae lacus fringilla consequat vel quis enim. Cras venenatis mollis neque in fringilla. In vitae</p>
                <div className='flex flex-row justify-start gap-x-6 mt-10'>
                <FontAwesomeIcon icon={faFacebook} className="text-gray-100 text-3xl bg-black rounded-full p-5" />
                <FontAwesomeIcon icon={faInstagram} className="text-gray-100 text-3xl bg-black rounded-full p-5" />
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-100 text-3xl bg-black rounded-full p-5" />
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-100 text-3xl bg-black rounded-full p-5" />
                </div>
            </div>
            <div className='w-1/2 text-white'>
                <h1 className='text-3xl font-Inter font-bold'>Office Address</h1>
                <hr className='border-b-2 border-primary2 w-14'/>
                <ul className='space-y-5 text-xl mt-4'>
                    <li>3891 Ranchview Dr. Richardson,</li>
                    <li> California 62639</li>
                    <li>Mon-Fri : 09.00 am-05.00 pm</li>
                    <li className='underline'>+99 (456) 568 65</li>
                    <li className='underline'>info.support@gmail.com</li>
                </ul>
            </div>
            <div className='w-1/2 text-white'>
                <h1 className='text-3xl font-Inter font-bold'>Explore</h1>
                <hr className='border-b-2 border-primary2 w-14'/>
                <ul className='space-y-5 text-xl mt-4'>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer