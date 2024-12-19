import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Checkout() {
  const { cart } = useContext(CartContext);

  // Calculate total price of items in the cart, ensuring quantity is always 1
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price); // Ensuring price is a number
    const quantity = 1; // Set quantity to 1 for all items
    if (!isNaN(price)) {
      return acc + price * quantity;
    }
    return acc; // Return the accumulator if price is invalid
  }, 0);

  return (
    <div className="mt-[100px] px-4 py-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-6xl font-bold text-center mb-6 text-black">CHECKOUT</h2>
      
      {/* Cart Summary */}
      {cart.length === 0 ? (
        <div className="text-center text-xl font-semibold text-gray-600">YOUR CART IS EMPTY</div>
      ) : (
        <div>
          {/* Cart Items List */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="text-gray-600">x1</div> {/* Showing quantity as 1 */}
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center mt-6 text-xl font-semibold">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button className="mt-6 w-full py-2 bg-black text-white font-semibold rounded-lg hover:bg-slate-300 transition duration-200">
            COMPLETE CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
}
