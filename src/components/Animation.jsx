import React from 'react'
import { useEffect,useState } from 'react';
import camera from '../assets/camera.png'
import image from '../assets/image.png'
import jacket from '../assets/jacket.png'
import laptop from '../assets/laptop.png'
import makeup from '../assets/makeup.png'
import perfume from '../assets/perfume.png'
import shoes from '../assets/shoes.png'
export default function Animation() {

    const [products, setProducts] = useState([camera,image,jacket,laptop,makeup,perfume,shoes]);
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
