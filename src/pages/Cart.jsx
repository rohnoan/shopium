import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {

  const {product}=useContext(CartContext)

  return (
    <div className='h-[500px] mt-[100px]'>
        ye le mera nam : {product}
    </div>
  )
}
