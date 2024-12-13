import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';

export default function ProductBlock({ title, image, price, id }) {
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity: 1 });
    setShowMessage(true);

    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs mx-auto h-[520px]">
      {/* Image Container */}
      <div className="w-full h-72 sm:h-80 relative flex items-center justify-center">
        <img
          className="object-contain w-full h-full transform transition duration-300 ease-in-out hover:scale-105"
          src={image}
          alt={title}
        />
      </div>

      {/* Product Details */}
      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800 break-words px-2">
          {title}
        </h3>
        <p className="text-xl font-bold text-gray-600 mt-2">${price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-violet-400 text-white font-semibold rounded-lg w-full hover:bg-violet-500 transition duration-200 text-sm"
        >
          Add to Cart
        </button>
      </div>

      {/* "Added to Cart" Message */}
      {showMessage && (
        <div
          className="absolute h-[60px] bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-500 text-white text-center py-2 px-4 rounded-3xl w-[100px]  text-sm"
        >
          Added to Cart
        </div>
      )}
    </div>
  );
}
