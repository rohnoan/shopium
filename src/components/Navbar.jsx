import React, { useState } from 'react';
import logo from '../images/logo.png';

export default function Navbar() {
  const [navButton, setNavButton] = useState(0); // Track the active button

  const handleButtonClick = (index) => {
    setNavButton(index); // Set the index of the clicked button
  };

  return (
    <div className=' flex items-center justify-between h-[100px] bg-[#714bb9] px-4 md:px-8 w-full box-border fixed top-0 z-0'>
      <div className='mr-[2px]'>
        <img className='bg-[#714bb9]  shadow-sm rounded-md min-w-[130px] h-[85px] ' src={logo} alt="Logo" />
      </div>
      
      <div className='flex font-semibold bg-[#714bb9] text-black items-center text-[16px] space-x-4'>
        {['HOME', 'PRODUCTS', 'CART', 'CONTACT'].map((label, index) => (
          <button

            key={index}
            onClick={() => handleButtonClick(index)}
            className={`flex items-center justify-center px-6  h-[37px]  py-2  rounded ${navButton === index ? 'text-white  ' : 'text-black  hover:text-white '}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
