import React, { useContext, useEffect, useState } from 'react';
import {CartContext} from '../context/CartContext.js'

export default function Products() {
  const {setProduct}=useContext(CartContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div className="mt-[60px] text-black">
      <div className='h-[400px]'>
          click on me for my name
          <input type="text" 
          placeholder='name'
          onChange={(e)=>setProduct(e.target.value)}
          className='border border-black'
          />
          <button 
          onClick={handleSubmit}
          className='border border-black
          '>choona mat.</button>
      </div>
    </div>
  );
}