import React from 'react'
import { useEffect,useState } from 'react';

import a from '../assets1/a.jpg';
import b from '../assets1/b.jpg';
import c from '../assets1/c.webp';
import d from '../assets1/d.webp';
import f from '../assets1/f.jpg';
import g from '../assets1/g.webp';
import h from '../assets1/h.webp'
import j from '../assets1/j.webp'




export default function Animation() {

    const [products, setProducts] = useState([a,b,c,d,f,g,h,j]);
    const[index,setIndex]=useState(0);

    const next=()=>{
        setIndex((prevIndex)=>(prevIndex+1)%products.length)
    }
    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
    
    useEffect(() => {
      const interval = setInterval(next, 1500); // Change every 1.5 seconds (1500ms)
  
      return () => {
        clearInterval(interval); // Clear interval when component unmounts
      };
    }, [next]);


  return (
    <div className="mt-5  flex justify-center items-center rounded-lg w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
      <div className="flex justify-center items-center h-fit w-fit p-[20px]">
        <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        {products.length > 0 &&<img src={products[index]} alt="" />}
        
        </div>
      </div>
      
      
    </div>

    )
}
