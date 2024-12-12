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
    <div className='mt-[-90px] bg-violet-300 flex w-full justify-center align-middle rounded-lg'>
      <div className='flex justify-center align-middle h-[500px] w-[700px]  p-[20px]  '>
        
        <div className='flex justify-center align-middle'>
        {products.length > 0 &&<img src={products[index]} alt="" />}
        
        </div>
      </div>
      
      
    </div>

    )
}
