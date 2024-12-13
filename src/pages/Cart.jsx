import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import boxxx from '../assets/boxxx.png'
import Checkout from '../components/Checkout';
export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="mt-[100px]">
      <h2 className="text-4xl bg-violet-400  font-bold text-white w-full  text-center justify-center ">CART</h2>
      {cart.length === 0 ? (
                <div>
                    <img className="flex justify-center mt-[50px] m-auto " src={boxxx} alt="" />
                    <div className='mt-[10px] font-bold  flex justify-center text-3xl'>YOUR CARTS EMPTY :(</div>
                </div>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center gap-4 p-4 border-b border-gray-200"
          >
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
        ))
      )}


      <Checkout/>
    </div>
  );
}
