import React from 'react'
import Animation from '../components/Animation'
export default function Home() {
  return (
    <div className="mt-[120px]">
  <div className="flex justify-between items-center px-4">
    {/* SHOP BOLD LIVE BOLDER Section */}
    <div className="flex flex-col justify-center items-start md:text-4xl lg:text-6xl">
      <div className='text-black font-semibold'>SHOP BOLD.</div>
      <div className='text-[#714bb9] font-extrabold'>LIVE BOLDER.</div>
    </div>

    {/* Animation Component */}
    <div className='mr-[20px] flex justify-center items-center   '>
    <Animation />
    </div>
  </div>
  </div>

  );
}
