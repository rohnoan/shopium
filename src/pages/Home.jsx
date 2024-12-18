import React from 'react';
import MarqueeComponent from '../components/MarqueeComponent';
import Animation from '../components/Animation';
import Anim from '../components/Anim';
import brand from '../assets3/brand.png';
import sellers from '../assets3/sellers.png';
import del from '../assets3/delivery.png';
import sup from '../assets3/support.png';
import pay from '../assets3/payments.png';

export default function Home() {
  return (
    <div className="mt-[30px]">
      <MarqueeComponent />

      {/* Flex container for Anim and Animation components */}
      <div className='flex flex-row flex-1'>
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-1 sm:justify-center lg:flex-row xl:flex-row sm:space-x-6">
        <div className="bg-violet-400 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <Anim />
        </div>
        <div className="bg-violet-400 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <Animation />
        </div>
      </div>
      </div>

      <div className="flex mt-[50px] text-4xl bg-violet-400 justify-center">
        <div className="text-5xl mt-[50px] mb-[50px]">
           why <span className="text-white font-extrabold">SHOPIUM</span>?
        </div>
      </div>

      {/* Grid for other features */}
      <div className="grid sm:text-2xl md:text-3xl lg:text-4xl grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gray-100">
        {/* Block 1: Feature 1 (left) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <div className="mr-4">ONE DAY DELIVERY</div>
        </div>

        {/* Block 2: Image 1 (right) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <img src={del} alt="Feature Image" className="h-24 w-50" />
        </div>

        {/* Block 3: Feature 2 (left) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <div className="mr-4">SMOOTH RETURNS</div>
        </div>

        {/* Block 4: Image 2 (right) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <img src={brand} alt="Feature Image" className="h-24 w-50" />
        </div>

        {/* Block 5: Feature 3 (left) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <div className="mr-4">TRUSTED SELLERS</div>
        </div>

        {/* Block 6: Image 3 (right) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <img src={sellers} alt="Feature Image" className="h-24 w-50" />
        </div>

        {/* Block 7: Feature 4 (left) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <div className="mr-4">24/7 CUSTOMER SUPPORT</div>
        </div>

        {/* Block 8: Image 4 (right) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <img src={sup} alt="Feature Image" className="h-24 w-50" />
        </div>

        {/* Block 9: Feature 5 (left) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <div className="mr-4">SECURE PAYMENTS</div>
        </div>

        {/* Block 10: Image 5 (right) */}
        <div className="flex items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
          <img src={pay} alt="Feature Image" className="h-24 w-50" />
        </div>
      </div>
    </div>
  );
}
