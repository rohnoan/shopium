import React from 'react'
import { useEffect,useState } from 'react';
import camera from '../assets/camera.jpg'
import image from '../assets/image.jpg'
import jacket from '../assets/jacket.jpg'
import laptop from '../assets/laptop.jpg'
import makeup from '../assets/makeup.jpg'
import perfume from '../assets/perfume.jpg'
import shoes from '../assets/shoes.jpg'
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
    <div className='mt-[-90px] bg-violet-300 flex w-full justify-center align-middle rounded-lg'>
      <div className='flex justify-center align-middle h-[500px] w-[700px]  p-[20px]  '>
        
        <div className='flex justify-center align-middle'>
        {products.length > 0 &&<img src={products[index]} alt="" />}
        
        </div>
      </div>
      
      
    </div>

    )
}
