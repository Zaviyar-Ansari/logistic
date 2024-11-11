import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';   // Twitter icon
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';  // Call and Location icons
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Search icon
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="flex text-white relative">
    {/* Black Background Filler */}
    <div className="absolute w-[40vh] h-[62px] bg-gray-800" style={{ clipPath: 'polygon(90% 0, 100% 0, 100% 100%, 90% 100%)' }} />
    {/* Left Orange Box with Right Side Tilt */}
    <div
      className="w-[40vh] bg-orange-500 relative"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
        zIndex: 10, // Bring it above the black background
      }}
    >
      <h1 className="text-center text-4xl font-bold py-14 px-4">
        LOGISTIC
      </h1>
    </div>
  
    {/* Right Side with Contact Info */}
    <div className="flex-1">
      <div className="flex justify-between items-center bg-gray-800 py-4 px-6">
        <div className="flex items-center gap-x-6">
          <p className="text-gray-400 text-xl flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-100 text-3xl" /> +44 20 7930 8205
          </p>
          <p className="text-gray-400 text-xl flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-100 text-3xl" /> 450 Strand, Charing Cross, PK
          </p>
        </div>
        <div className="flex gap-x-4">
          <FontAwesomeIcon icon={faFacebook} className="text-gray-100 text-2xl" />
          <FontAwesomeIcon icon={faTwitter} className="text-gray-100 text-2xl" />
          <FontAwesomeIcon icon={faLinkedin} className="text-gray-100 text-2xl" />
        </div>
      </div>
  
      {/* Navigation Menu */}
      <div className="flex justify-between items-center bg-white py-4 px-10">
      <ul className="flex space-x-8 font-semibold text-black">
  <Link to="/"> 
    <li className="hover:text-orange-500">HOME</li>
  </Link>
  <Link to="/services"> 
    <li className="hover:text-orange-500">SERVICES</li>
  </Link>
  <Link to="/career"> 
    <li className="hover:text-orange-500">CAREER</li>
  </Link>
  <Link to="/tracking"> 
    <li className="hover:text-orange-500">TRACKING</li>
  </Link>
  <Link to="/about"> 
    <li className="hover:text-orange-500">ABOUT</li>
  </Link>
  <Link to="/contact"> 
    <li className="hover:text-orange-500">CONTACT US</li>
  </Link>
</ul>

        <FontAwesomeIcon icon={faSearch} className="text-gray-600 text-2xl hover:text-gray-800 cursor-pointer" />
      </div>
    </div>
  </div>
  
  )
}

export default Navbar