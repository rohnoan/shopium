import React from 'react'
import { useEffect,useState } from 'react';

import a from '../assets1/a.webp';
import b from '../assets1/b.jpg';
import c from '../assets1/c.jpg';
import e from '../assets1/e.avif';
import f from '../assets1/f.webp';
import g from '../assets1/g.webp';


export default function Animation() {

    const [products, setProducts] = useState([a,b,c,e,f,g]);
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
    <div className='flex w-full justify-center align-middle rounded-lg'>
      <div className='flex justify-center align-middle h-[400px] w-[600px]  p-[20px] bg-white '>
        
        <div className='flex justify-center align-middle'>
        {products.length > 0 &&<img src={products[index]} alt="" />}
        
        </div>
      </div>
      
      
    </div>

    )
}
