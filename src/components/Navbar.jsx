import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [navButton, setNavButton] = useState(0); // Track the active button

  const handleButtonClick = (index) => {
    setNavButton(index); // Set the index of the clicked button
  };
  const routes = ['/', '/products', '/cart', '/contact'];

  return (
    < div>
      
      
      <div className=' flex items-center justify-between h-[35px] bg-gradient-to-r from-violet-200 to-violet-700 px-4 md:px-8 w-full box-border fixed top-0 z-0'>
      <div className='mr-[2px]'>
        <img className='bg-[#714bb9]  shadow-sm rounded-md min-w-[90px] h-[30px] ' src={logo} alt="Logo" />
      </div>
      
      <div className='flex font-semibold  text-black items-center text-[16px] space-x-4'>
        {['HOME', 'PRODUCTS', 'CART', 'CONTACT'].map((label, index) => (
          <Link to={routes[index]}

            key={index}
            onClick={() => handleButtonClick(index)}
            className={`flex items-center justify-center px-6  h-[37px]  py-2  rounded ${navButton === index ? 'text-white  ' : 'text-black  hover:text-white '}`}
          >
            {label}
          </Link>
        ))}
      </div>
      
      </div>
      
    </div>
  );
}
