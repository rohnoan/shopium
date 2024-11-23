import React from 'react'
import { useEffect,useState } from 'react';
export default function Animation() {

    const [products, setProducts] = useState([]);
    const[index,setIndex]=useState(0);

    const next=()=>{
        setIndex((prevIndex)=>(prevIndex+1)%products.length)
    }
    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(error => console.error('Error fetching data', error));
      }, []);
    useEffect(()=>{
        if(products.length>0){
            const interval=setInterval(()=>{
                setIndex((prevIndex)=>(prevIndex+1)%products.length);
            },4000);
        return ()=>clearInterval(interval);}
        },[products]);


  return (
    <div className='mt-[120px] flex justify-center align-middle'>
        <button onClick={next} className='w-[30px] bg-slate-600 mt-[150px] h-[50px] rounded-[25px]'>&lt;</button>
      <div className='flex justify-center align-middle h-[350px] w-[600px] border border-black'>
        
        <div className='flex justify-center align-middle'>
        {products.length > 0 &&<img src={products[index].image} alt="" />}
        
        </div>
      </div>
      
      <button onClick={prev} className='w-[30px]  bg-slate-600  mt-[150px] h-[50px] rounded-full'>&gt;</button>
    </div>

    )
}
