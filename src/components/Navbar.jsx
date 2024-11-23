import React, { useState } from 'react';
import logo from '../images/logo.png';

export default function Navbar() {
  const [navButton, setNavButton] = useState(-1); // Track the active button

  const handleButtonClick = (index) => {
    setNavButton(index); // Set the index of the clicked button
  };

  return (
    <div className='flex items-center justify-between h-[100px] bg-[#ae4bd8] px-4 md:px-8 w-full box-border fixed top-0 z-50'>
      <div>
        <img className=' shadow-black shadow-sm min-w-[130px] h-[85px] rounded-3xl' src={logo} alt="Logo" />
      </div>
      
      <div className='flex font-semibold text-[#330044] items-center text-[16px] space-x-4'>
        {['HOME', 'PRODUCTS', 'CART', 'CONTACT','ABOUT US'].map((label, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`flex items-center justify-center px-4  h-[42px]  py-2 border border-black rounded ${navButton === index ? 'text-white bg-black ' : 'text-black bg-white hover:bg-black hover:text-white shadow-lg'}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
