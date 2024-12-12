import React from 'react'
import { useState,useContext } from 'react'
import { CartContext } from './CartContext'

const CartContextProvider=({children})=>{
    const [product,setProduct]=useState("")
    return(
        <CartContext.Provider
        value={{product,setProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider