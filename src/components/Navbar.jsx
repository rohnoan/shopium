import React from 'react';
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between h-[100px] bg-purple-400 px-8'>
      <div>
        <img className=' min-w-[130px] h-[85px] rounded-3xl' src={logo} alt="Logo" />
      </div>
      <div className='flex font-semibold text-black items-center text-[16px] space-x-8'>
        <button className='ml-[15px] b- text-black hover:bg-white px-4 py-2 text-mdrounded'>HOME</button>
        <button className=' hover:bg-white px-4 py-2 rounded'>PRODUCTS</button>
        <button className=' hover:bg-white px-4 py-2 rounded'>CART</button>
        <button className=' hover:bg-white px-4 py-2 rounded'>CONTACT US</button>
        <button className=' hover:bg-white px-4 py-2 rounded'>404</button>
      </div>
    </div>
  );
}
