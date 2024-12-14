import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import boxxx from '../assets/boxxx.png'
import Checkout from '../components/Checkout';
export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="mt-[100px]">
      {cart.length === 0 ? (
        <div>
          <img className="flex justify-center mt-[50px] m-auto" src={boxxx} alt="Empty Cart" />
          <div className=' flex justify-center font-bold text-violet-400  text-3xl'>YOUR CART'S EMPTY</div>
        </div>
      ) : (
        <Checkout />
      )}
    </div>
  );
}
