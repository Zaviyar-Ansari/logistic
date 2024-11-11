import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // For mail

const Footer = () => {
  return (
    <div className='bg-primary3'>
        <div className='flex flex-row justify-between py-20 mx-20'>
            <h1 className='text-3xl font-bold text-white font-Inter'>Subscribe Our Newsletter Get Update</h1>
            <div>
            <input type="email" placeholder='Enter your email' className='px-4 py-3 bg-primary4 text-white text-2xl w-[35vh]' />
            <button className='px-4 py-3 text-2xl bg-primary2 font-Inter'>Subscribe</button>
            </div>
        </div>
        <hr className='border-b-2 border-gray-400 w-[128vh] mx-20'/>
        <div className='flex flex-row mx-20 my-20 justify-evenly gap-x-20 pb-28'>
            <div className='w-1/2 text-white'>
                <h1 className='text-4xl font-bold font-Kumbh'>LOGISTIC</h1>
                <p className='mt-4 text-xl'>Pellentesque non dolor vitae lacus fringilla consequat vel quis enim. Cras venenatis mollis neque in fringilla. In vitae</p>
                <div className='flex flex-row justify-start mt-10 gap-x-6'>
                <FontAwesomeIcon icon={faFacebook} className="p-5 text-3xl text-gray-100 bg-black rounded-full" />
                <FontAwesomeIcon icon={faInstagram} className="p-5 text-3xl text-gray-100 bg-black rounded-full" />
                <FontAwesomeIcon icon={faEnvelope} className="p-5 text-3xl text-gray-100 bg-black rounded-full" />
                <FontAwesomeIcon icon={faLinkedin} className="p-5 text-3xl text-gray-100 bg-black rounded-full" />
                </div>
            </div>
            <div className='w-1/2 text-white'>
                <h1 className='text-3xl font-bold font-Inter'>Office Address</h1>
                <hr className='border-b-2 border-primary2 w-14'/>
                <ul className='mt-4 space-y-5 text-xl'>
                    <li>3891 Ranchview Dr. Richardson,</li>
                    <li> California 62639</li>
                    <li>Mon-Fri : 09.00 am-05.00 pm</li>
                    <li className='underline'>+99 (456) 568 65</li>
                    <li className='underline'>info.support@gmail.com</li>
                </ul>
            </div>
            <div className='w-1/2 text-white'>
                <h1 className='text-3xl font-bold font-Inter'>Explore</h1>
                <hr className='border-b-2 border-primary2 w-14'/>
                <ul className='mt-4 space-y-5 text-xl'>
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