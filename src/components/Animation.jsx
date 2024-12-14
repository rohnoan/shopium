import React, { useState, useEffect } from 'react';
import a from '../assets/camera.jpg';
import b from '../assets/jacket.jpg';
import c from '../assets/perfume.jpg';
import d from '../assets/shoes.jpg';
import f from '../assets/image.jpg';
import g from '../assets/laptop.jpg';
import j from '../assets/makeup.jpg';



export default function Animation() {
  const [products, setProducts] = useState([a, b, c, d, f, g, j]);
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 1500); // Change every 1.5 seconds (1500ms)
    return () => clearInterval(interval); // Clear interval on unmount
  }, [next]);

  return (
    <div className="mt-5  flex justify-center items-center rounded-lg w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
      <div className="flex justify-center items-center h-fit w-fit p-[20px]">
        <div className="flex justify-center items-center">
          {products.length > 0 && <img src={products[index]} alt="product" />}
        </div>
      </div>
    </div>
  );
}
