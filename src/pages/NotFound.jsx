import React from 'react'
import image from '../assets3/image.png'
export default function NotFound() {
  return (
    <div className='mt-[100px]  flex-col justify-center items-center'>
      <img className='w-full'  src={image} alt="" />
      <div className='text-5xl font-bold text-purple-500  flex justify-center'>NOT FOUND</div>
    </div>
  )
}
